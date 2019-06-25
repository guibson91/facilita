import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from '../../../../../models/company';
import { NavController, MenuController } from '@ionic/angular';
import { SharedService } from '../../../../services/shared.service';
import { SystemService } from '../../../../services/system.service';
import { Observable, of, throwError } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.page.html',
  styleUrls: ['./company-edit.page.scss'],
})
export class CompanyEditPage implements OnInit {

  /**
   * Formulário
   */
  form: FormGroup

  /**
   * Carregando a página
   */
  loading: boolean = true

  /**
   * Dados da empresa a ser editada
   */
  company: Company // undefined se for página de cadastro

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private shared: SharedService,
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    public ref: ChangeDetectorRef,
    private system: SystemService) { }

  get isTEAM(): boolean {
    return this.shared.isTeam
  }

  /**
   * Inicializando estruturas após entrar na página.
   */
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      active: [false],
      delivery: [true],
      promotion: [true]
    })

    this.form.valueChanges.subscribe(() => {
      this.ref.detectChanges()
    })

    this.menuCtrl.enable(true)
    this.loading = true

    //Obter dados do objeto selecionado para edição (caso houver)
    this.route.paramMap.
      pipe(switchMap((params: ParamMap) => {
        if (params.get('id'))
          return Company.object(params.get('id'))
        else
          return of(null)
      }))
      .pipe(first())
      .subscribe((company: Company) => {
        this.company = company
        if (this.company) {
          this.form.patchValue(this.company);
        }
        this.loading = false
      }, err => {
        this.loading = false
        this.system.showErrorAlert(err);
      })
  }

  /**
   * Voltar página sem salvar alterações
   */
  cancel(): void {
    this.navCtrl.navigateRoot('company/list');
  }

  /**
   * Remove empresa do database
   */
  remove(): Observable<any> {
    return throwError(new Error("Esse método não foi implementado"))
    /**
     * @todo desativar logins do proprietário e funcionários
     * @todo retirar o empresa da lista de exibição da aplicação,
     * mas permanecer com todos os seus dados e seus relacionamentos
     */
  }

  /**
   * Salvar alterações e redirecionar para página anterior
   */
  save(): Observable<any> {
    //Atualizar usuário e autenticação
    if (this.company) {
      return Company.update(this.company.id, this.form.value)
        .pipe(tap(() => {
          if (this.shared.isManager)
            this.shared.company$.next(this.company)
        }))
        .pipe(tap(() => {
          this.cancel()
        }))
    }
    //Página de registro, criar novo objeto no database
    else {
      return Company.add(this.form.value)
        .pipe(tap(() => {
          this.cancel()
        }))
    }
  }
}