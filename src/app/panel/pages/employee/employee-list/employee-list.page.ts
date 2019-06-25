import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Filial } from '../../../../../models/filial';
import { User } from '../../../../../models/user';
import { of, Subscription, combineLatest } from 'rxjs';
import { NavController, MenuController } from '@ionic/angular';
import { first, flatMap, tap, switchMap } from 'rxjs/operators';
import { Company } from '../../../../../models/company';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit, OnDestroy {

  /**
   * Capta o que foi digitado pelo usuário no campo de pesquisa
   */
  searchString: string = "";

  filials: { [id: string]: Filial } = {};

  /**
   * Lista de funcionários de determinada empresa
   */
  employees: User[];

  initSubscription: Subscription;

  /**
   * Empresa atual
   */
  company: Company;

  /**
   * Se está carregando os elementos da página.
   */
  loading: boolean = true;

  /**
   * Se não possui funcionários
   * Se após baixar não vier funcuionários aí sim podemos garantir que não existem funcionários atualmente.
   * Usada para mostrar mensagem "Você ainda não possui funcionários".
   */
  existsEmployees: boolean = true;


  constructor(public navCtrl: NavController,
    private ref: ChangeDetectorRef,
    private menuCtrl: MenuController,
    private route: ActivatedRoute) { }

  /**
   * Inicializando estruturas após entrar na página.
   */
  ngOnInit(): void {
    this.menuCtrl.enable(true);
    this.loading = true;
    this.existsEmployees = true

    this.initSubscription = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        if (params.get('company_id'))
          return Company.object(params.get('company_id'))
        else
          return of(null)
      }))
      .pipe(first())
      .pipe(flatMap((company) => {
        if (!company) throw Error("Lista de funcionários sem ter definido a empresa")
        this.company = company

        let employees$ = Company.user_employees.list(company.id)
          .pipe(tap((employees: User[]) => {
            // Verificar se não existe funcionários.
            if (employees && employees.length === 0) {
              this.existsEmployees = false;
            } else {
              this.existsEmployees = true;
            }
          }))
        let filials$ = company ? Company.filials
          .list(company.id) : of([]);

        return combineLatest([
          employees$,
          filials$
        ])
      }))
      .subscribe((arr: [User[], Filial[]]) => {
        this.employees = arr[0]
        let filials = arr[1]
        this.filials = {}
        for (let filial of filials) {
          this.filials[filial.id] = filial
        }
        // Não está mais carregando.
        this.loading = false;
        console.log("O que aconteceu", this.employees, this.filials)
        this.ref.detectChanges()
      })
  }

  detect() {
    this.ref.detectChanges()
  }

  ngOnDestroy() {
    if (this.initSubscription) this.initSubscription.unsubscribe()
  }

  add() {
    this.navCtrl.navigateRoot(['employee/edit', { company_id: this.company.id }]);
  }

  edit(employee: User) {
    this.navCtrl.navigateRoot(['employee/edit', { company_id: this.company.id, employee_id: employee.id }]);
  }

}