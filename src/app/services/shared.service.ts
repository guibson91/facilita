import { Filial } from '../../models/filial';
import { Injectable, ApplicationRef } from '@angular/core';
import { Location } from '../../models/utils/location';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { of } from 'rxjs';
import { flatMap, catchError, delay, tap, retry } from 'rxjs/operators';
import { Order, OrderStatus } from '../../models/order';
import { Permission, User } from '../../models/user';
import { Platform, ToastController } from '@ionic/angular';
import { Company } from '../../models/company';
import { Subscription, ReplaySubject } from 'rxjs';
import { Vibration } from '@ionic-native/vibration/ngx';
import { CloudFunctionsService } from './cloud-functions.service';
import { Category } from '../../models/category';
import { SystemService } from './system.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  /**
   * Verifica se o usuário atual está autenticado
   */
  isLogged: boolean = false;

  /**
   * DEFINE O MANUAL QUE VAI SER ABERTO PARA AJUDAR NO PAINEL
   */
  urlManual: string = 'https://firebasestorage.googleapis.com/v0/b/virtualmenu-d8360.appspot.com/o/manual%2FTutorial%20Maisrangos%20(6).pdf?alt=media&token=c98442a7-504a-4940-bc8a-c06bc7c49a5e#page='

  /**
   * Diferença em milisegundos da hora atual do servidor e a hora atual local
   */
  offsetTime: number = 0;

  /**
   * ReplaySubject(Tipo de observable) que irá está sincronizado com as mudanças do usuário atual.
   */
  user$: ReplaySubject<User> = new ReplaySubject<User>(1);

  /**
   * Subscription para requisição do usuário em tempo real
   */
  subscription_user: Subscription

  /**
   * Usuário logado
   */
  user: User;

  locationUser: Location;

  /**
   * ReplaySubject(Tipo de observable) que irá está sincronizado com as mudanças da empresa atual.
   * APENAS gerente da empresa e funcionários da filial
   */
  company$: ReplaySubject<Company> = new ReplaySubject<Company>(1);

  /**
   * Empresa do usuário logado
   * APENAS gerente da empresa e funcionários da filial
   */
  company: Company;

  /**
   * ReplaySubject(Tipo de observable) que irá está sincronizado com as mudanças da empresa atual.
   * APENAS os funcionários e gerentes da filial
   */
  filial$: ReplaySubject<Filial> = new ReplaySubject<Filial>(1);

  /**
   * Filial do usuário logado
   * APENAS os funcionários e gerentes da filial
   */
  filial: Filial;

  /**
   * Guarda as filiais atreladas a empresa do usuário.
   * ReplaySubject(Tipo de observable) que irá está sincronizado com as mudanças da empresa atual.
   * APENAS o gerente da empresa
   */
  filials$: ReplaySubject<Filial[]> = new ReplaySubject<Filial[]>(1);

  /**
   * Filiais da empresa
   * APENAS o gerente da empresa
   */
  filials: Filial[];

  /**
   * ReplaySubject Pedindos pendentes do usuário
   */
  pending_orders$: ReplaySubject<Order[]> = new ReplaySubject<Order[]>(1)

  /**
   * Pedindos pendentes do usuário
   */
  pending_orders: Order[]

  //Auxiliar para emitir som para novos pedidos (gerente de filial)
  orders_created_old_filial: Order[] = [];

  //Auxiliar para emitir som para novos pedidos (gerente da empresa)
  orders_created_old_company: Order[] = [];

  //Auxiliar que guarda a última categoria selecionada na criação de produtos
  latest_category: Category;

  /**
   * Audio emitido
   */
  audio: HTMLAudioElement = new Audio('./../assets/audio/slow-spring-board.mp3');

  /**
   * Retorna se o usuário atual é manager.
   */
  public get isManager(): boolean {
    if (!this.user) return false;
    return this.user.permissions.indexOf(Permission.COMPANY_MANAGEMENT) >= 0;
  }

  /**
   * Retorna se o usuário atual é manager de filial.
   */
  public get isFilialManager(): boolean {
    if (!this.user) return false;
    return this.user.permissions.indexOf(Permission.FILIAL_MANAGEMENT) >= 0;
  }

  /**
   * Retorna se o usuário atual é TEAM.
   */
  public get isTeam(): boolean {
    if (!this.user) return false;
    return this.user.permissions.indexOf(Permission.TEAM) >= 0;
  }

  /**
   * verifica se o usuário é um consumidor
   */
  public get isCustomer(): boolean {
    if (!this.user) return false;
    return this.user.permissions.indexOf(Permission.CUSTOMER) >= 0;
  }

  /**
   * Retorna a data atual.
   * Pega a data local. E utiliza o offset(se já calculado) para ajustar a hora local do usuário.
   */
  public get now(): Date {
    let d = new Date()
    d.setMilliseconds(d.getMilliseconds() + this.offsetTime)
    return d
  }

  constructor(private toastCtrl: ToastController,
    public system: SystemService,
    public vibration: Vibration,
    public nativeAudio: NativeAudio,
    public platform: Platform,
    public appRef: ApplicationRef,
    public cloudFunction: CloudFunctionsService
  ) {

    this.audio.volume = 1;
    this.audio.loop = true;

    //@todo está dando problemas na API de time... comentado por ora!!

    // this.cloudFunction.time()
    //   .pipe(catchError(err => {
    //     return of(null)
    //       .pipe(delay(2000))
    //       .pipe(tap(() => {
    //         throw Error()
    //       }))
    //   }))
    //   .pipe(retry(1234567))
    //   .subscribe((d: Date) => {
    //     this.offsetTime = d.getMilliseconds() - new Date().getMilliseconds()
    //     if (this.offsetTime > 10 * 60 * 1000) {
    //       this.system.logEvent("user_local_hour_wrong", {
    //         value: this.offsetTime
    //       })
    //     }
    //   })

    this.user$.subscribe(user => {
      if (user) {
        this.system.setUserId(user.id)
        this.system.setUserProperty("district", (user.location && user.location.district ? user.location.district : "no district"))
        this.system.setUserProperty("city", (user.location && user.location.city ? user.location.city : "no city"))
        this.system.setUserProperty("name", (user.name ? user.name : "no name"))
      }
      this.user = user;
    })
    this.filial$.subscribe(filial => {
      this.filial = filial;
    })

    var subscription: Subscription
    this.company$.subscribe(company => {
      this.company = company;
      if (subscription) subscription.unsubscribe();

      if (this.isManager && company) {
        subscription = Company.filials.list(company.id).subscribe((filials: Filial[]) => {
          this.filials$.next(filials)
        })
      } else {
        this.filials$.next(null)
      }
    })
    this.filials$.subscribe(filials => {
      this.filials = filials
    })
    this.pending_orders$.subscribe(pending_orders => {
      console.log("Pedidos pendentes foi alterado!");
      this.pending_orders = pending_orders;
      setTimeout(() => {
        this.appRef.tick();
      })
    })

    this.startPendingOrdersObservable();
    this.emmitSoundToFilialCreatedOrders();
    this.emmitSoundToCompanyCreatedOrders();

  }

  /**
   * Iniciar observable para fiscalizar alterações de pedidos pendentes
   */
  startPendingOrdersObservable() {
    let subscription: Subscription
    this.user$.subscribe((user: User) => {
      this.user = user;
      if (subscription) {
        subscription.unsubscribe()
        subscription = undefined
      }
      if (user && this.isCustomer) {
        subscription = User.orders.list(user.id, [{ name: "status", operator: "<", value: OrderStatus.done }])
          .subscribe((pending_orders: Order[]) => {
            console.log("Opa.. estou observando os pedidos pendentes!!", pending_orders);
            setTimeout(() => {
              this.pending_orders$.next(pending_orders || [])
            })
          }, error => {
            console.error("Ops.. não consegui obter a lista de pedidos em aberto do usuário", error);
          })
      }
    },
      (error) => {
        console.error("Ocorreu um erro: ", error);
        if (subscription) subscription.unsubscribe()
      },
      //Completado
      () => {
        if (subscription) subscription.unsubscribe()
      })
    this.pending_orders$.subscribe((pending_orders: Order[]) => {
      this.pending_orders = pending_orders
    })
  }

  /**
   * Observar alterações de pedidos criados, e emitir uma notificação caso seja um novo pedido
   * GERENTE DA EMPRESA
   */
  emmitSoundToCompanyCreatedOrders() {
    this.user$.pipe(flatMap((user) => {
      return this.company$.pipe(flatMap((company: Company) => {
        this.company = company;
        if (user && this.isManager && this.company) {
          return Company.orders.list(this.company.id, [{ name: "status", operator: "==", value: OrderStatus.created }], [{
            name: 'created_at',
            type: 'desc'
          }])
        } else {
          return of([])
        }
      }))
    })).subscribe((orders_created: Order[]) => {
      if (orders_created.length == 0) {
        this.stopSound();
        return;
      }
      orders_created.forEach(order_created => {
        let hasElement: boolean = false;
        this.orders_created_old_company.forEach(order_old => {
          if (order_created.id == order_old.id) {
            hasElement = true;
            return;
          }
        });
        if (!hasElement) {
          this.orders_created_old_company = orders_created;
          this.emmitSound();
          return;
        }
      });
      this.orders_created_old_company = orders_created;
    }, error => {
      console.error("Ocorreu um erro no emmitSoundToCompanyCreatedOrders", error);
    });
  }

  /**
   * Observar alterações de pedidos criados, e emitir uma notificação caso seja um novo pedido
   * GERENTE DE FILIAL
   */
  emmitSoundToFilialCreatedOrders() {
    this.user$.pipe(flatMap((user) => {
      return this.filial$.pipe(flatMap((filial: Filial) => {
        this.filial = filial;
        if (user && this.isFilialManager && this.filial) {
          return Filial.orders.list(this.filial.id, [{ name: "status", operator: "==", value: OrderStatus.created }], [{
            name: 'created_at',
            type: 'desc'
          }])
        } else {
          return of([])
        }
      }))
    })).subscribe((orders_created: Order[]) => {

      if (orders_created.length == 0) {
        this.stopSound();
        return;
      }
      //Comparar cada pedido criado atual com cada pedido criado antigo
      //Deve emitir uma notificação se existir algum pedido diferente de todos os outros criado
      //não existir no array das ordens criadas antigas      
      orders_created.forEach(order_created => {
        let hasElement: boolean = false;
        this.orders_created_old_filial.forEach(order_old => {
          if (order_created.id == order_old.id) {
            hasElement = true;
            return;
          }
        });
        if (!hasElement) {
          this.orders_created_old_filial = orders_created;
          this.emmitSound();
          return;
        }
      });
      this.orders_created_old_filial = orders_created;
    }, error => {
      console.error("Ops.. algo deu errado", error);
    });
  }

  async emmitSound() {
    try {
      let toast = await this.toastCtrl.create({
        message: 'Você recebeu um novo pedido',
        duration: 500
      })
      toast.present();

      if (this.platform.is('cordova')) {
        await this.nativeAudio.preloadSimple('audio1', './../assets/audio/slow-spring-board.mp3')
        await this.nativeAudio.play('audio1', () => console.log('audio1 está tocando'))
        this.vibration.vibrate([2000, 500, 2000]);
      }
      else {
        this.audio.play();
      }

    } catch (e) {
      console.error("Ocorreu um error", e)
    }
  }

  stopSound() {
    if (this.audio) this.audio.pause();
  }

  /**
   * Sincroniza o usuário que está no banco de dados com o observable user$
   * @param id Id do usuário
   */
  realtimeUser(id: string) {
    if (this.subscription_user) this.subscription_user.unsubscribe()

    this.subscription_user = User.object(id).subscribe((user: User) => {
      if (user) {
        this.user$.next(user)
      } else {
        this.user$.next(null)
      }
    }, error => {
      this.user$.next(null);
      console.error("Usuário deslogado");
    })
  }


  get firstPage(): string {
    /**
     * @todo Adicionar as páginas
     */
    return environment.isApp ? "mobile/filial-search" : "login-panel"
  }

  /**
   * Retorna a página raiz da aplicação dependendo da permissão do usuário.
   */
  get rootPage(): string {
    if (this.user) {
      // this.showTabBar();
      if (!this.user.permissions || this.user.permissions.length === 0) {
        throw new Error("Usuário sem permissões");
      }

      // Consumidores
      if (this.user.permissions.indexOf(Permission.CUSTOMER) >= 0) {
        /**
         * @todo Adicionar as páginas
         */
        // return FilialSearchPage;
        return "FILIAL SEARCH PAGE"
      }
      // Do painel mas ainda não aceitou os termos de uso.
      else if (!this.user.accept_terms_use) {
        return "terms"
      }
      // Do painel mas já aceitou os termos de uso.
      else {
        return "home"
      }
    }
    else {
      return this.firstPage;
    }
  }

}