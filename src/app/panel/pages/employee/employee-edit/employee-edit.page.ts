import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Filial } from '../../../../../models/filial';
import { Observable, combineLatest, of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Permission, User } from '../../../../../models/user';
import { NavController, MenuController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap, switchMap, first, map, flatMap } from 'rxjs/operators';
import { Company } from '../../../../../models/company';
import { validateEmail, elementIsInsideArray, makeRandomString } from '../../../../util/util';
import { CascadeRelationship } from '../../../../../modules/firestore/collection';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.page.html',
  styleUrls: ['./employee-edit.page.scss'],
})
export class EmployeeEditPage implements OnInit {
  /**
   * Referência para usar o array de permissões na view
   */
  Permission = Permission

  /**
   * Carregando informações do funcionário
   */
  loading: boolean

  /**
   * Carregando lista de filiais
   */
  loadingFilials: boolean

  /**
   * Formulário
   */
  form: FormGroup;

  /**
   * Empresa no qual o funcionário trabalha
   */
  company: Company;

  /**
   * Dados do produto a ser editado
   */
  employee: User; // null se for página de cadastro

  /**
   * Observable da lista de filiais do restaurante
   */
  filials$: Observable<Filial[]>;

  /**
   * Id da filial no início da página de edição
   */
  filialIdOld: string;

  /**
   * Email no início da página de edição
   */
  emailOld: string;
  /**
   * Exibe mensagem de erro
   */
  error: string;

  /**
   * Senha do usuário
   */
  password: string = "";

  /**
   * Define se o usuário vai ser um administrador da empresa ou se ele vai ser um funcionário de uma filial
   */
  typeOfEmployee: "company" | "filial"

  levelOfFilialPermission: "manager" | "cashier"

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private shared: SharedService,
    private authentication: AuthenticationService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.initForm()

    this.loading = true
    this.loadingFilials = true

    let company$: Observable<Company> = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else if (this.shared.isManager)
          return this.shared.company$
        else
          return of(null)
      }))

    let employee$: Observable<User> = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('employee_id'))
          return User.object(params.get('employee_id'))
        else
          return of(null)
      }))

    combineLatest([
      company$.pipe(first())
        .pipe(tap((company: Company) => {
          this.company = company;
          if (!company) {
            console.error("Sem empresa")
            //this.navCtrl.setRoot(HomePage)
            return;
          }
        }))
        .pipe(tap((company: Company) => {

          this.filials$ = Company.filials.list(company.id)
            .pipe(tap(() => {
              this.loadingFilials = false
            }));
        })),
      employee$.pipe(tap((employee: User) => {
        this.employee = employee
        this.loading = false
        this.ref.detectChanges()
        if (this.employee) {
          if (this.employee.filial_employee && this.employee.filial_employee.id) {
            this.filialIdOld = this.employee.filial_employee.id
            this.form.patchValue({
              filialId: this.filialIdOld
            })
            if (elementIsInsideArray(Permission.COMPANY_MANAGEMENT, this.employee.permissions)) {
              this.typeOfEmployee = "company"
            } else if (elementIsInsideArray(Permission.FILIAL_MANAGEMENT, this.employee.permissions)) {
              this.typeOfEmployee = "filial"
              this.levelOfFilialPermission = "manager"
            } else if (elementIsInsideArray(Permission.ORDER, this.employee.permissions) && elementIsInsideArray(Permission.ORDER_READ, this.employee.permissions)) {
              this.typeOfEmployee = "filial"
              this.levelOfFilialPermission = "cashier"
            }
          }
          this.emailOld = this.employee.email
          this.form.patchValue(this.employee)
        }

      }))
    ])
      .pipe(first())
      .subscribe(() => {
        this.loading = false;
        this.ref.detectChanges()
      })

  }

  generatePassword() {
    this.password = makeRandomString(6);
  }

  initForm() {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      image: [''],
      filialId: [''] // utilizado somente para gerar o relacionamento
    })

    this.form.valueChanges.subscribe(() => {
      this.ref.detectChanges()
    })

  }

  /**
   * Voltar página sem salvar alterações
   */
  back() {
    this.navCtrl.navigateRoot(['employee/list', { company_id: this.company.id }]);
  }

  /**
   * Remover usuário e autenticação
   */
  remove(): Observable<void> {
    let relationships: CascadeRelationship[] = [
      {
        relationship: User.company_employee,
        removeId: this.company.id
      }
    ];
    if (this.typeOfEmployee === 'filial') {
      relationships.push({
        relationship: User.filial_employee,
        removeId: this.filialIdOld
      })
    }
    return User.remove(this.employee.id, relationships)
  }

  /**
   * Salvar alterações e redirecionar para página anterior.
   * Tanto para criar novo registro, quanto para atualizá-lo
   */
  save(): Observable<any> {
    let filialId = this.form.value.filialId
    return this.userFromForm().pipe(flatMap((employee: User) => {
      //Atualizar usuário e autenticação
      if (this.employee) {

        let obs$: Observable<any>;
        if (employee.email != this.emailOld || this.password.length > 0) {
          obs$ = this.authentication.changePassword(this.employee.id, employee.email, this.password)
        } else {
          obs$ = of(true)
        }

        return obs$
          .pipe(flatMap(() => {
            return User.update(this.employee.id, employee, [
              {
                relationship: User.filial_employee,
                id: (this.typeOfEmployee === 'filial' ? filialId : undefined),
                removeId: this.filialIdOld
              }
              //Não é possível modificar relação de usuário com a empresa
            ])
          }))
          .pipe(tap(() => {
            this.back()
          }))
      }
      //Cadastro de usuário e autenticação
      else {
        return this.authentication.register(employee.email, this.password)
          .pipe(flatMap((user_key) => {
            let relationships: CascadeRelationship[] = [
              {
                relationship: User.company_employee,
                id: this.company.id
              }
            ];
            if (this.typeOfEmployee === 'filial') {
              relationships.push({
                relationship: User.filial_employee,
                id: filialId
              })
            }
            return User.update(user_key, employee, relationships)
          }))
          .pipe(tap(() => {
            this.back()
          }))
      }
    }))
  }

  /**
   * Baseado nas informações do formulário
   * criar o respectivo usuário
   */
  userFromForm(): Observable<User> {
    return of(null).pipe(map(() => {
      let user: User = Object.assign({}, this.form.value)
      if (this.form.value)
        //Verifica se a senha é válida
        if (this.form.value.password && this.form.value.password.length < 6) {
          throw Error('Sua senha deve conter pelo menos 6 caracteres')
        }

      //Verifica se o email é válido
      if (!validateEmail(this.form.value.email)) {
        throw Error("Por favor, digite um email válido")
      }

      if (this.typeOfEmployee === "filial" && !user['filialId']) {
        throw Error("Por favor selecione qual filial esse funcionário irá trabalhar.")
      }

      if (user['filialId'])
        delete user['filialId']
      if (user['password'])
        delete user['password']
      if (user['password2'])
        delete user['password2']

      /**
       * Atribuindo as permissões de acordo com o que foi selecionado
       */
      switch (this.typeOfEmployee) {
        case "filial":
          switch (this.levelOfFilialPermission) {
            case "manager":
              user.permissions = [Permission.FILIAL_MANAGEMENT, Permission.ORDER, Permission.ORDER_READ]
              break;
            case "cashier":
              user.permissions = [Permission.ORDER, Permission.ORDER_READ]
              break;
            default:
              throw Error("Não foi selecionado nível de permissão do funcionário da filial")
          }
          break;
        case "company":
          user.permissions = [Permission.COMPANY_MANAGEMENT]
          break;
        default:
          throw Error("Não foi selecionado o tipo de funcionário(se é um administrador da empresa ou funcionário de uma filial)")
      }
      return user
    }))
  }
}