import { Component, Input, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Category } from '../../../../../models/category';
import { Product } from '../../../../../models/product';
import { Observable, of, Subscription, } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Company } from '../../../../../models/company';
import { AlertController, ModalController } from '@ionic/angular';
import { SystemService } from '../../../../services/system.service';
import { SharedService } from '../../../../services/shared.service';
import { FilialType } from '../../../../../models/filial';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.page.html',
  styleUrls: ['./category-select.page.scss'],
})
export class CategorySelectPage implements OnInit, OnDestroy {

  /**
   * String de busca
   */
  searchString: string

  /** 
   * Carregando
   */
  loading: boolean

  /**
   * Lista de categorias
   */
  categories: Category[]

  /**
   * Subscription das categories
   */
  categoriesSubscription: Subscription

  /**
   * Se existe categorias
   */
  existsCategories: boolean

  /**
   * Id da empresa
   */
  @Input()
  company: Company

  //Categoria Atual
  @Input()
  categoryActual: Category;

  // Se a categoria é global ou não
  global: boolean;

  // Se a categoria for global, qual tipo deve ser criado. Por hora apenas o tipo WAREHOUSE(Depósito) é aceito
  type: FilialType = FilialType.WAREHOUSE;

  constructor(public shared: SharedService,
    public alertCtrl: AlertController,
    public system: SystemService,
    private ref: ChangeDetectorRef,
    public modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.company && this.global) {
      throw Error("Uma categoria não pode ser global e pertencer a uma empresa ao mesmo tempo")
    }
    this.load()
  }

  ngOnDestroy() {
    if (this.categoriesSubscription) this.categoriesSubscription.unsubscribe()
  }

  /**
   * Carregando as categorias atuais.
   * Marcando como carregando e quando acabar de carregar marcar se existe categorias.
   */
  load(): void {
    this.loading = true
    this.existsCategories = true
    this.ref.detectChanges();
    if (this.categoriesSubscription) this.categoriesSubscription.unsubscribe()

    let categories$: Observable<Category[]>;

    if (this.global) {
      categories$ = Category.list([{
        name: 'type',
        operator: '==',
        value: FilialType.WAREHOUSE
      }])
    } else {
      categories$ = Company.categories.list(this.company.id, undefined, [{ name: "priority" }])
    }
    // Lista de categorias ordenadas pela prioridade
    this.categoriesSubscription = categories$.subscribe((categories: Category[]) => {
      this.categories = categories;
      this.loading = false;
      this.ref.detectChanges()
      if (this.categories && this.categories.length === 0) {
        this.existsCategories = false;
      } else {
        this.categories.sort((a: Category, b: Category) => {
          return ((a.priority || 0) - (b.priority || 0));
        });
      }
    });
  }

  /**
   * Adiciona uma nova categoria por meio de um alert que pergunta o nome
   */
  async add() {

    //console.log("NOVA PRIORIDADE: ", this.categories.length)
    let alert = await this.alertCtrl.create({
      header: 'Criar categoria',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nome da categoria'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Criar',
          handler: data => {
            // Verifica se foi preenchido algum valor no input do alerta
            if (!data || !data.name) return
            this.loading = true

            let add$: Observable<string>;
            // Se for uma categoria de tipo global
            if (this.global) {
              add$ = Category.add<Category>({
                name: data.name,
                priority: this.categories.length,
                type: this.type,
                global: true
              })
            } else { // Se for uma categoria de uma empresa
              add$ = Category.add<Category>({ name: data.name, priority: this.categories.length }, [
                {
                  relationship: Category.company,
                  id: this.company.id
                }
              ])
            }

            add$.subscribe(() => {
              this.load()
            }, err => {
              this.system.showErrorAlert(err)
            })
          }
        }
      ]
    })
    alert.present()
  }

  /**
   * Edita o nome de uma categoria por meio de um nome
   * @param category Categoria a ser editada
   */
  async edit(category: Category) {
    let alert = await this.alertCtrl.create({
      header: 'Editar',
      inputs: [
        {
          name: 'name',
          value: category.name
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Salvar',
          handler: data => {
            // Verifica se foi preenchido algum valor no input do alerta
            if (!data || !data.name) return
            this.loading = true
            Category.update<Category>(category.id, { name: data.name })
              .subscribe(() => {
                this.load()
              }, err => {
                this.system.showErrorAlert(err)
              })
          }
        }
      ]
    })
    alert.present()
  }

  /**
   * Tenta remover uma categoria. Mas só remove se ela não possuir produtos
   * @param category Categoria a ser removida
   */
  async remove(category: Category) {
    let alert = await this.alertCtrl.create({
      header: 'Tem certeza que deseja remover essa categoria?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Remover',
          handler: data => {
            this.loading = true
            this.existsProductsCategory(category)
              .pipe(flatMap((exists_products) => {
                if (exists_products) {
                  throw Error("Não pode ser removido categoria que possui produtos")
                }

                let relationships = [];
                // Se a categoria pertence a uma empresa
                if (this.company) {
                  relationships = [
                    {
                      relationship: Category.company,
                      id: this.company.id
                    }
                  ]
                }

                return Category.remove(category.id, relationships)
              }))
              .subscribe(() => {
                this.load()
              }, err => {
                this.loading = false
                this.ref.detectChanges()
                this.system.showErrorAlert(err)
              })
          }
        }
      ]
    });
    alert.present()
  }

  /**
   * Verifica se existe algum produto relacionado a uma categoria
   * @param category Será buscado os produtos dessa categoria
   */
  existsProductsCategory(category: Category): Observable<boolean> {

    //Verifica primeiro se a categoria que quer ser removida faz parte do produto atual (que ainda não foi salvo no DB)
    if (this.categoryActual && category.id == this.categoryActual.id) return of(true);

    return Category.category_product.list(category.id)
      .pipe(map((products: Product[]) => {
        if (products && products.length > 0) return true
        else return false
      }))
  }

  /**
   * Fecha o modal. Podendo passar ou não uma categoria selecionada
   * @param category Categoria que pode ser mandado para view que chamou o modal
   */
  dismiss(category?: Category) {
    this.modalCtrl.dismiss({
      category: category
    })
  }

}