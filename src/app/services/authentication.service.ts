import * as firebase from "firebase"
import { auth } from "firebase"
import 'firebase/auth';
import { Injectable } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Observable, of, from, combineLatest } from 'rxjs';
import { map, tap, flatMap, first, catchError, switchMap } from 'rxjs/operators';
import { Filial } from '../../models/filial';
import { PermissionType, User } from '../../models/user';
import { Company } from '../../models/company';
import { FIREBASE_CONFIG } from '../../main';
import { NanoTranslateService } from './nano-translate.service';
import { SharedService } from './shared.service';
import { CartService } from './cart.service';
import { CloudFunctionsService } from './cloud-functions.service';
import { SystemService, NanoError } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /**
   * Verifica se o usuário atual está authenticado.
   */
  isLogged: boolean = false;

  /**
   * Auxiliar para gerar autenticação sem redirecionamento
   */
  otherAuthenticationApp: firebase.app.App;

  /**
   * Observable que fiscaliza a autenticação uma única vez
   */
  authState$: Observable<User>;

  constructor(private translate: NanoTranslateService,
    private shared: SharedService,
    private fb: Facebook,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private cloudFunctions: CloudFunctionsService,
    private cartProvider: CartService,
    private system: SystemService) {

    this.otherAuthenticationApp = firebase.initializeApp(FIREBASE_CONFIG, 'otherAuthenticationApp');

    this.authState$ = this.initAuthState();
    // Gatilhar a primeira verificação de autenticação
    this.authState$.pipe(first()).subscribe()
  }

  firebaseAuthState(): Observable<firebase.User> {
    return Observable.create((observer) => {
      auth().onAuthStateChanged(observer)
    })
  }

  /**
   * Observa mudanças na autenticação
   */
  initAuthState(): Observable<User> {

    // Mudança no estado de autenticação do usuário.
    return this.firebaseAuthState()
      .pipe(first())
      .pipe(flatMap((user: firebase.User) => {
        // Usuário logado.
        if (user) {
          this.shared.realtimeUser(user.uid)
          return User.object<User>(user.uid)
            .pipe(tap((u: User) => {
              if (u) {
                this.shared.user$.next(u);
              } else {
                this.shared.user$.next(null);
                this.shared.pending_orders$.next([]);
                this.cartProvider.clearCart();
              }
            }));
        }
        // Usuário deslogado.
        else {
          this.shared.user$.next(null);
          this.shared.pending_orders$.next([]);
          this.cartProvider.clearCart();
          return of(null);
        }
      }))
      //Obter a empresa relativo ao usuário logado
      .pipe(flatMap((user: User) => {
        console.log("Usuário baixado: ", user)
        // Usuário existe e possui empresa
        if (user && user.company_employee) {
          let companyId = user.company_employee.id;
          let filialId = user.filial_employee ? user.filial_employee.id : null;
          return combineLatest(
            Company.object<Company>(companyId),
            (filialId ? Filial.object<Filial>(filialId) : of(null))
          )
            .pipe(first())
            .pipe(tap((data) => {
              // Atualiza a empresa atual.
              this.shared.company$.next(data[0]);
              if (data[1]) this.shared.filial$.next(data[1]);
              // Atualiza a filial atual
              else this.shared.filial$.next(null);
            }))
            //Garante que o retorno de getUser() seja sempre o usuário logado
            .pipe(map(() => user));
        }
        // Usuário não tem permissão para acessar o painel administrativo
        else {
          this.shared.company$.next(null); //empresa atual recebe NULL
          this.shared.filial$.next(null); //filial atual recebe NULL
          return of(user);
        }
      })).pipe(tap((data) => {
        if (data) {
          this.shared.isLogged = true;
        } else {
          this.shared.isLogged = false;
        }
      }));
  }

  /**
   * Uma função que retorna uma Promise que é retornada com sucesso se existe a empresa ou sem sucesso se não existe empresa.
   * Utilizada no ionViewCanEnter para só permitir a entrada em uma página se possuir o empresa.
   */
  existsCompany(nav: NavController, page?: string): Promise<void> {
    page = page || this.shared.rootPage;
    return new Promise<void>((resolve, reject) => {
      this.shared.company$.pipe(first()).subscribe((company: Company) => {
        if (company) {
          resolve();
        } else {
          if (nav) nav.navigateRoot(page || this.shared.rootPage);
          reject();
        }
      });
    });
  }

  /**
   * Uma função que retorna uma Promise que é retornada com sucesso se existe o usuário com as permissões definidas ou sem sucesso se não existe este usuário.
   * Utilizada no ionViewCanEnter para só permitir a entrada em uma página se possuir o usuário.
   */
  existsUserWithPermissions(nav: NavController, permissions: PermissionType[], page?: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.shared.user$.pipe(first()).subscribe((user: User) => {
        if (user &&
          (permissions.some((permission: PermissionType) => user.permissions.indexOf(permission) >= 0))) {
          resolve()
        } else {
          console.error("Usuário tentou acessar uma página sem permissão para isso", permissions, user)
          if (nav) nav.navigateRoot(page || this.shared.rootPage);
          reject();
        }
      });
    });
  }

  /**
   * Uma função que retorna uma Promise que é retornada com sucesso se existe a empresa ou sem sucesso se não existe empresa.
   * Utilizada no ionViewCanEnter para só permitir a entrada em uma página se possuir o empresa.
   */
  existCompanyAndFilial(nav: NavController, page?: string): Promise<void> {
    page = page || this.shared.rootPage;
    return new Promise<void>((resolve, reject) => {
      this.shared.company$.pipe(first()).subscribe((company: Company) => {
        if (company) {
          this.shared.filial$.pipe(first()).subscribe((filial: Filial) => {
            if (filial) {
              resolve();
            }
            else {
              nav.navigateRoot(page);
              reject();
            }
          })
        } else {
          nav.navigateRoot(page);
          reject();
        }
      });
    });
  }



  /**
   * Realizar o login do usuário.
   * @param email Email do usuário.
   * @param password Senha do usuário.
   * @returns Um observable que tenta o login do usuário.  
   */
  login(email: string, password: string): Observable<User> {
    return from(auth().signInWithEmailAndPassword(email, password))
      .pipe(catchError((err: any) => {
        throw this.translate.authError(err.code)
      })).pipe(flatMap(() => {
        return this.authState$.pipe(first());
      }));
  }
  /**
   * Efetuar login com facebook (nativo se Facebook instalado ou, caso contrário, janela popup)
   * @return Observable com os dados do usuário obtidos da requisição do Facebook
   */
  signInFacebook(): Observable<firebase.User> {
    this.system.logEvent("try_login_facebook")
    if (this.platform.is('cordova')) {
      return from(this.fb.login(['email', 'public_profile']))
        .pipe(catchError((err) => {
          let alert: NanoError = {
            nanoerror: true,
            title: "Algo de errado aconteceu",
            message: `Janela fechada pelo usuário antes de concluir a autenticação ou não autorizado a permissão do aplicativo Konnect-Consumidor. Tente novamente. código: ${JSON.stringify(err)}`,
            report: true
          }
          throw alert
        }))
        .pipe(flatMap((res: FacebookLoginResponse) => {
          console.log("Facebook response: ", res);
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          return from(firebase.auth().signInWithCredential(facebookCredential))
            .pipe(catchError((err) => {
              throw this.catchSignInWithCredential(err)
            }))
            .pipe(flatMap((res: any) => {
              return this.authState$.pipe(map(() => res));
            }))
        }))
    }
    else {
      return from(auth()
        .signInWithPopup(new firebase.auth.FacebookAuthProvider()))
        .pipe(flatMap((res: firebase.auth.UserCredential) => {
          return this.authState$.pipe(map(() => res.user));
        }))
    }
  }

  signInGoogle(): Observable<firebase.User> {
    if (this.platform.is('cordova')) {
      return from(this.googlePlus.login({
        'webClientId': '10498885020-3v39fs8qhsbeu28hu0toq2ge6126auat.apps.googleusercontent.com'
      })).pipe(catchError((err) => {
        throw this.catchSignInWithGoogle(err)
      })).pipe(flatMap((res) => {
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        return firebase.auth().signInWithCredential(googleCredential)
          .catch((err) => {
            throw this.catchSignInWithCredential(err)
          });
      })).pipe(flatMap((res: any) => {
        return this.authState$.pipe(map(() => res));
      }))
    }
    //Executado no computador
    else {
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      googleProvider.addScope('profile');
      googleProvider.addScope('email');
      return from(firebase.auth()
        .signInWithPopup(googleProvider))
        .pipe(flatMap((res: firebase.auth.UserCredential) => {
          return this.authState$.pipe(map(() => res.user));
        }))
    }
  }
  catchSignInWithGoogle(err: number): NanoError {
    let alert: NanoError = {
      nanoerror: true,
      title: "Algo de errado aconteceu",
      message: `Tente novamente. Se esse erro se repetir, por favor contate o suporte. código google: ${err}`,
      report: true
    }
    switch (err) {
      // API_NOT_CONNECTED	The client attempted to call a method from an API that failed to connect.
      case 17:
        break
      // CANCELED	The result was canceled either due to client disconnect or cancel().
      case 16:
      // SIGN_IN_CANCELLED	The sign in was cancelled by the user.
      case 12501:
      // INTERRUPTED	A blocking call was interrupted while waiting and did not run to completion.
      case 14:
        alert.title = 'Erro de autenticação';
        alert.message = `Janela fechada pelo usuário antes de concluir a autenticação. Tente novamente. código google: ${err}`
        alert.report = true
        break
      // DEVELOPER_ERROR	The application is misconfigured.
      case 10:
        break
      // ERROR	The operation failed with no more detailed information.
      case 13:
        break
      // INTERNAL_ERROR	An internal error occurred.
      case 8:
        break
      // INVALID_ACCOUNT	The client attempted to connect to the service with an invalid account name specified.
      case 5:
        break
      // NETWORK_ERROR	A network error occurred.
      case 7:
        alert.title = 'Erro de conexão'
        alert.message = `Conexão turbulenta. Tente novamente mais tarde.`
        alert.report = true
        break
      // RESOLUTION_REQUIRED	Completing the operation requires some form of resolution.
      case 6:
        break
      // SIGN_IN_REQUIRED	The client attempted to connect to the service but the user is not signed in.
      case 4:
        break
      // SUCCESS	The operation was successful.
      case 0:
        break
      // SUCCESS_CACHE	The operation was successful, but was used the device's cache.
      case -1:
        break
      // TIMEOUT	Timed out while awaiting the result.
      case 15:
        break
      // SIGN_IN_CURRENTLY_IN_PROGRESS	A sign in process is currently in progress and the current one cannot continue.
      case 12502:
        alert.title = 'Erro de autenticação';
        alert.message = 'A autenticação já está em progresso. Tente novamente.'
        alert.report = true
        break
      // SIGN_IN_FAILED	The sign in attempt didn't succeed with the current account.
      case 12500:
        break
    }
    return alert
  }

  /**
   * Recebe o erro do signInWithCredential e cria um alerta relativo a ele
   * @param err Erro do signInWithCredential
   */
  catchSignInWithCredential(err): NanoError {
    let alert: NanoError = {
      nanoerror: true,
      title: "Algo de errado aconteceu",
      message: `Se esse erro se repetir, por favor contate o suporte. código facebook: ${err.code}`,
      report: true
    }
    switch (err.code) {
      // Thrown if there already exists an account with the email address asserted by the credential. Resolve this by calling firebase.auth.Auth#fetchProvidersForEmail and then asking the user to sign in using one of the returned providers. Once the user is signed in, the original credential can be linked to the user with firebase.User#linkWithCredential.
      case "auth/account-exists-with-different-credential":
        alert.title = 'Conta já existe'
        alert.message = 'Uma conta já existe com o mesmo endereço de e-mail, mas credenciais de login diferentes. Faça login usando um provedor associado a este endereço de e-mail.'
        alert.report = false
        break
      // Thrown if the credential is malformed or has expired.
      case "auth/invalid-credential":
        break
      // Thrown if the type of account corresponding to the credential is not enabled. Enable the account type in the Firebase Console, under the Auth tab.
      case "auth/operation-not-allowed":
        break
      // Thrown if the user corresponding to the given credential has been disabled.
      case "auth/user-disabled":
        alert.title = 'Esse usuário foi desativado'
        alert.message = 'Entre em contato com o suporte para mais informações.'
        alert.report = true
        break
      // Thrown if signing in with a credential from firebase.auth.EmailAuthProvider#credential and there is no user corresponding to the given email.
      case "auth/user-not-found":
        alert.title = 'Usuário não encontrado'
        alert.message = 'Verifique se o e-mail está correto e tente novamente.'
        alert.report = false
        break
      // Thrown if signing in with a credential from firebase.auth.EmailAuthProvider#credential and the password is invalid for the given email, or if the account corresponding to the email does not have a password set.
      case "auth/wrong-password":
        alert.title = 'Senha incorreta'
        alert.message = 'Tente novamente.'
        alert.report = false
        break
      // Thrown if the credential is a firebase.auth.PhoneAuthProvider#credential and the verification code of the credential is not valid.
      case "aauth/invalid-verification-code":
        break
      // Thrown if the credential is a firebase.auth.PhoneAuthProvider#credential and the verification ID of the credential is not valid.
      case "auth/invalid-verification-id":
        break
      default:
        break
    }
    return alert
  }

  /**
   * Criar um novo usuário.
   * @param email Email do usuário.
   * @param password Senha do usuário.
   */
  registerWithUserConnection(email: string, password: string): Observable<auth.UserCredential> {
    return from(auth().createUserWithEmailAndPassword(email, password)).pipe(catchError((err: any) => {
      throw this.translate.authError(err.code)
    }));
  }

  register(email: string, password: string): Observable<string> {
    return Observable.create(observer => {
      this.otherAuthenticationApp.auth().createUserWithEmailAndPassword(email, password)
        .then((authData: auth.UserCredential) => {
          observer.next(authData.user.uid);
        }).catch((err: any) => {
          observer.error(this.translate.authError(err.code))
        });
    });
  }

  /**
   * Atualiza o "email" e "password" de autenticação
   * @param emailOld Email no início da atualização
   * @param passwordOld Password no início da atualização
   * @param email Email no final da atualização
   * @param password Password no final da atualização
   */
  update(emailOld: string, passwordOld: string, email: string, password: string): Observable<any> {

    if (emailOld == email && passwordOld == password) {
      return of("Email e password são os mesmos. Não houve alteração de autenticação");
    }

    return Observable.create(observer => {
      this.otherAuthenticationApp.auth().signInWithEmailAndPassword(emailOld, passwordOld).then((authData: auth.UserCredential) => {
        observer.next(authData);
      }).catch(err => {
        this.system.showErrorAlert(err);
        observer.error(err);
      });
    }).flatMap((authData: auth.UserCredential) => {
      var email$: Observable<string>;
      if (emailOld != email) {
        email$ = Observable.create(observer => {
          authData.user.updateEmail(email).then(() => {
            observer.next("Email de autenticação foi alterado com sucesso");
          }).catch(err => {
            this.system.showErrorAlert(err);
            observer.error("Erro ao tentar alterar o email de autenticação");
          });
        });
      }
      var password$: Observable<string>;
      if (passwordOld != password) {
        password$ = Observable.create(observer => {
          authData.user.updatePassword(password).then(() => {
            observer.next("Password de autenticação foi alterado com sucesso");
          }).catch(err => {
            this.system.showErrorAlert(err);
            observer.error("Erro ao tentar alterar o password de autenticação");
          });
        });
      }
      return combineLatest([
        (email$ || "Email não foi alterado"),
        (password$ || "Password não foi alterado"),
      ]);
    });
  }

  /**
   * Mudar a senha de um outro usuário.
   * @param id_user Id do outro usuário
   * @param password Novo password
   */
  changePassword(id_user: string, email: string, password: string): Observable<auth.UserCredential> {
    return this.firebaseAuthState().pipe(first())
      .pipe(flatMap((user: firebase.User) => {
        if (!user) throw Error("Você não está autenticado para realizar essa ação.")
        return from(user.getIdToken())
      })).pipe(flatMap((token: string) => {
        return this.cloudFunctions.changePasswordUser(token, id_user, email, password)
      }))
  }

  /**
   * Realizar o logout do usuário atual.
   */
  logout(): Observable<string> {
    return Observable.create(observer => {

      auth().signOut().then(() => {
        observer.next("success");
      }).catch(err => {
        // this.system.showErrorAlert(err);
        observer.error(err);
      });
    })
      .pipe(switchMap(() => {
        return this.authState$.pipe(first())
      }))
  }

}