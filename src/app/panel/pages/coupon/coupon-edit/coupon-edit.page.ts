import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of, combineLatest, throwError } from 'rxjs';
import { Filial } from '../../../../../models/filial';
import { Coupon } from '../../../../../models/coupon';
import { Company } from '../../../../../models/company';
import { NavController, MenuController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { SystemService } from '../../../../services/system.service';
import { CouponService } from '../../../../services/coupon.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, first, tap, map } from 'rxjs/operators';
import { firestore } from "firebase"
import "firebase/firestore";

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.page.html',
  styleUrls: ['./coupon-edit.page.scss'],
})
export class CouponEditPage implements OnInit {

  form: FormGroup;

  loading: boolean;

  couponType: 'money' | 'percentage' | 'free';

  filials: Filial[];

  fromTeam: boolean = true;

  coupon: Coupon;

  company: Company;

  options: {
    name: string,
    id: string,
    company_id: string,
    active: boolean
  }[] = [];

  optionsOld: {
    name: string,
    id: string,
    company_id: string,
    active: boolean
  }[] = [];

  currentYear: number = new Date().getFullYear();

  nextYear: number = new Date().getFullYear() + 1;

  constructor(public navCtrl: NavController,
    public shared: SharedService,
    public system: SystemService,
    public couponProvider: CouponService,
    private ref: ChangeDetectorRef,
    public menuCtrl: MenuController,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  /**
   * Inicializar a lista de relacionamentos.
   */
  ngOnInit(): void {
    this.initForm();

    this.menuCtrl.enable(true)
    this.loading = true

    let company$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else if (this.shared.isManager)
          return this.shared.company$
        else
          return of(null)
      }))
      .pipe(tap((company: Company) => {
        this.company = company
      }))

    let coupon$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        console.log("ParamMap", params, params.get('coupon_id'))
        if (params.get('coupon_id'))
          return Coupon.object(params.get('coupon_id'))
        else if (this.shared.isManager)
          return this.shared.company$
        else
          return of(null)
      }))
      .pipe(tap((coupon: Coupon) => {
        console.log("Recebeu o cupom!", coupon)
        this.coupon = coupon
      }))


    combineLatest([
      company$.pipe(switchMap((company) => {

        let filials$: Observable<Filial[]>
        if (this.shared.isManager) {
          filials$ = Company.filials.list(company.id)
        } else if (this.shared.isFilialManager) {
          filials$ = this.shared.filial$.pipe(map((filial) => {
            return [filial]
          }))
        } else { // Apenas se for TEAM
          filials$ = Filial.list()
        }
        return filials$
          .pipe(first())
          .pipe(tap((filials: Filial[]) => {
            this.filials = filials
          }))
      })),
      coupon$
    ])
      .pipe(first())
      .subscribe(() => {
        //Página de edição
        if (this.coupon) {
          this.form.patchValue(this.coupon);
          if (this.coupon.finished_at) {
            this.form.patchValue({
              finished_at: this.coupon.finished_at.toDate().toISOString()
            })
          }
          if (this.coupon.money) {
            this.couponType = 'money';
          } else if (this.coupon.percentage) {
            this.couponType = 'percentage';
          } else {
            this.couponType = 'free';
          }

          this.couponProvider.getFilialsFromCoupon(this.coupon.id)
            .pipe(first())
            .subscribe((filialsActive: Filial[]) => {
              console.log("Filiais ATIVAS do cupom: ", filialsActive);
              this.filials.forEach(filial => {
                let founded: boolean = false;
                filialsActive.forEach(filialsActive => {
                  if (filialsActive.id == filial.id) {
                    this.options.push({
                      name: filial.name,
                      id: filial.id,
                      company_id: filial.company.id,
                      active: true
                    })
                    this.optionsOld.push({
                      name: filial.name,
                      id: filial.id,
                      company_id: filial.company.id,
                      active: true
                    })
                    founded = true;
                    return;
                  }
                })
                if (!founded) {
                  this.options.push({
                    name: filial.name,
                    id: filial.id,
                    company_id: filial.company.id,
                    active: false
                  })
                  this.optionsOld.push({
                    name: filial.name,
                    id: filial.id,
                    company_id: filial.company.id,
                    active: false
                  })
                }
              });

              this.loading = false
              this.ref.detectChanges()
            }, err => {
              this.system.showErrorAlert(err)
              this.loading = false
              this.ref.detectChanges()
            })
        } else {
          this.filials.forEach(filial => {
            this.options.push({
              name: filial.name,
              id: filial.id,
              company_id: filial.company.id,
              active: false
            })
          });

          this.loading = false
          this.ref.detectChanges()
        }
      }, err => {
        this.system.showErrorAlert(err)
        this.loading = false
        this.ref.detectChanges()
      })
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      money: [null],
      percentage: [null],
      finished_at: [null, Validators.required]
    });
    
    this.form.valueChanges.subscribe((data) => {
      this.ref.detectChanges()
    })
  }

  /**
  * Salvar alterações e redirecionar para página anterior
  */
  save(): Observable<any> {

    let newCoupon: Coupon = this.form.value;

    newCoupon.created_at = firestore.FieldValue.serverTimestamp();

    if (this.shared.isTeam) {
      newCoupon.fromTeam = true;
    }
    else {
      newCoupon.fromTeam = false;
    }

    if (this.couponType == 'money') {
      newCoupon.percentage = null;
      newCoupon.freeShipping = false;
    } else if (this.couponType == 'percentage') {
      newCoupon.money = null;
      newCoupon.freeShipping = false;
    } else {
      newCoupon.freeShipping = true;
      newCoupon.percentage = null;
      newCoupon.money = null;
    }

    //Array de objetos que contém a relação e os ids das filiais que fazem parte do CUPOM
    let relationObjs: any = [];

    //Salvar tudo no padrão maiúsculo
    newCoupon.name = newCoupon.name.trim().toUpperCase();
    newCoupon.description = newCoupon.description.toUpperCase();
    newCoupon.finished_at = firestore.Timestamp.fromDate(new Date(newCoupon.finished_at as any))

    if (this.couponType == 'money' && !this.form.value.money) {
      return throwError(Error("Você precisa definir o valor do desconto"));
    }

    if (this.couponType == 'percentage' && !this.form.value.percentage) {
      return throwError(Error("Você precisa definir a porcentagem de desconto"));
    }

    // Página de edição, atualizar objeto no database
    if (this.coupon) {
      relationObjs = [];
      for (let i = 0; i < this.options.length; i++) {
        //Se a Filial foi marcada agora (antes não estava marcada)
        if (this.options[i].active && !this.optionsOld[i].active) {
          //Adicionar relação com Filial
          relationObjs.push({
            relationship: Coupon.filial,
            id: this.options[i].id
          });
        }
        //Se a Filial foi desmarcada (antes estava marcada)
        else if (!this.options[i].active && this.optionsOld[i].active) {
          console.log("Opção a ser removida: ", this.options[i]);
          //Remover relação
          relationObjs.push({
            relationship: Coupon.filial,
            removeId: this.options[i].id
          });
        }
      }
      console.log("ATUALIZAR CUPOM. RELAÇÕES: ", relationObjs);

      return Coupon.list([{
        name: 'name',
        operator: '==',
        value: newCoupon.name
      }])
        .pipe(first())
        .pipe(switchMap((coupons: Coupon[]) => {
          console.log("Cupons após filtrado a busca por nome: ", coupons);
          //Já existe um cupom com esse nome
          if (coupons && coupons.length > 0) {
            return throwError(Error("Já existe cupom com esse nome. Por favor, escolha outro"));
          }
          //Não existe cupom com esse nome, pode salvar
          else {
            return Coupon.update(this.coupon.id, newCoupon, relationObjs);
          }
        }))
        .pipe(tap(() => {
          this.cancel()
        }))
    }
    //Página de registro, criar novo objeto no database
    else {
      relationObjs = [];
      this.options.forEach(option => {

        if (option.active) {
          //Adicionar relação com Filial
          relationObjs.push({
            relationship: Coupon.filial,
            id: option.id
          });
        }

      });
      console.log("CRIAR CUPOM. RELAÇÕES: ", relationObjs, newCoupon);

      return Coupon.list([{
        name: 'name',
        operator: '==',
        value: newCoupon.name
      }])
        .pipe(tap((c) => {
          console.log("Lista de cupons", c);
        }))
        .pipe(first())
        .pipe(switchMap((coupons: Coupon[]) => {
          console.log("Cupons após filtrado a busca por nome: ", coupons);
          //Já existe um cupom com esse nome
          if (coupons && coupons.length > 0) {
            return throwError(Error("Já existe cupom com esse nome. Por favor, escolha outro"));
          }
          //Não existe cupom com esse nome, pode salvar
          else {
            return Coupon.add(newCoupon, relationObjs);
          }
        }))
        .pipe(tap(() => {
          this.cancel()
        }))
    }
  }

  /**
   * Remove cupom e todos seus relacionamentos
   */
  remove(): Observable<any> {
    if (this.coupon) {
      return this.couponProvider.getFilialsFromCoupon(this.coupon.id)
        .pipe(first())
        .pipe(switchMap((filials: Filial[]) => {
          let relationObjs = [];
          filials.forEach(filial => {
            //Adicionar relação com Filial
            relationObjs.push({
              relationship: Coupon.filial,
              removeId: filial.id
            })
          });
          console.log("REMOVER CUPOM. RELAÇÕES: ", relationObjs);
          return Coupon.remove(this.coupon.id, relationObjs);
        }))
    }
    else {
      return of(null);
    }
  }

  cancel() {
    this.navCtrl.navigateRoot(['coupon/list', { company_id: (this.company ? this.company.id : '') }])
  }

}