import { Company } from '../../models/company';
import { Category } from '../../models/category';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable, of, combineLatest } from 'rxjs';
import { map, flatMap, switchMap } from 'rxjs/operators';
import { Filial, FilialType } from '../../models/filial';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  /**
   * Busca uma lista de produtos de uma empresa.
   * Gerando Produtos com:
   * Atributos do produto. Categoria do produto.
   * @param id_company Id da empresa
   */
  public getProductsStockCompany(id_company: string): Observable<ProductStock[]> {
    return Company.categories.list(id_company)
      // Todas as categorias
      .pipe(flatMap((categories: Category[]) => {
        return Company.products.list(id_company)
          // Todos os produtos
          .pipe(map((products: Product[]) => {
            // Informações sobre o relacionamento da filial com os produtos
            let id_category_to_category = {}
            for (let category of categories) {
              id_category_to_category[category.id] = category
            }
            // Elementos usados no estoque
            let product_stock: ProductStock[] = []
            // Para todos os produtos verificar as informações do relacionamento
            for (let product of products) {
              product_stock.push({
                ...product,
                category: id_category_to_category[product.category.id],
              })
            }
            return product_stock
          }))
      }))
  }

  /**
   * Busca uma lista de produtos globais do tipo de uma empresa.
   * Gerando Produtos com:
   * Atributos do produto. Categoria do produto.
   * @param id_company Id da empresa
   */
  public getProductsStockGlobal(type: FilialType): Observable<ProductStock[]> {
    if (!type) return of([])
    return Category.list([{ name: 'type', operator: '==', value: type }])
      // Todas as categorias
      .pipe(flatMap((categories: Category[]) => {
        return Product.list([{ name: 'global.type', operator: '==', value: type }])
          // Todos os produtos
          .pipe(map((products: Product[]) => {
            // Mapa para relacionar o ID da categoria para a categoria
            let id_category_to_category = {}
            for (let category of categories) {
              id_category_to_category[category.id] = category
            }
            // Elementos usados no estoque
            let product_stock: ProductStock[] = []
            // Para todos os produtos verificar as informações do relacionamento
            for (let product of products) {
              product_stock.push({
                ...product,
                category: id_category_to_category[product.category.id],
              })
            }
            return product_stock
          }))
      }))
  }

  /**
   * Busca uma lista de produtos de uma filial. E produtos globais que pertencem a uma filial.
   * Adiciona nessa lista de produtos as informações do relacionamento.
   * Gerando Produtos com:
   * Atributos do produto. Categoria do produto.
   * Se active true então existe o relacionamento com a filial. Se false não existe relacionamento do produto com a filial.
   * Demais atributos diretos do relacionamento Filial.product_stock
   * @param id_filial Id da filial
   */
  public getProductsStockFilial(filial: Filial): Observable<ProductStock[]> {
    return combineLatest([
      this.getProductsStockCompany(filial.company.id),
      this.getProductsStockGlobal(filial.type)
    ])
      .pipe(map((products_stock: ProductStock[][]) => {
        return [].concat(products_stock[0], products_stock[1])
      }))
      .pipe(switchMap((products_stock: ProductStock[]) => {
        // Informações sobre o relacionamento da filial com os produtos
        return Filial.product_stock.listRelation(filial.id)
          .pipe(map((objs) => {
            // Criando um mapa de id produto para informações do relacionamento da filial com o produto
            let id_product_to_relationship = {}
            for (let obj of objs) {
              id_product_to_relationship[obj.id] = obj
            }

            // Para todos os produtos verificar as informações do relacionamento
            for (let product of products_stock) {
              // Se existir o relacionamento do produto com a filial
              if (id_product_to_relationship[product.id]) {
                product.active = (id_product_to_relationship[product.id].active === undefined ? true : id_product_to_relationship[product.id].active)
                product.priority = id_product_to_relationship[product.id].priority
                product.recomendation = id_product_to_relationship[product.id].recomendation
                product.recomendation_priority = id_product_to_relationship[product.id].recomendation_priority
              } else {
                product.active = false;
              }
              // Se não existir o relacionamento do produto com a filial
            }
            return products_stock
          }))
      }))
  }

  /**
   * Retorna a melhor recomendação de uma filial
   * @param filial Filial no qual será realizado a busca
   */
  public getBestRecomendation(filial: Filial): Observable<Product> {
    return Filial.product_stock
      .list(filial.id, [{ name: "recomendation", operator: "==", value: true }], undefined)
      .pipe(map((products_stock: ProductStock[]) => {
        let recomendationProductsStock = products_stock
          .sort(this.comparatorProductStockByRecomendation)
        return recomendationProductsStock[0];
      }))
  }

  /**
   * Comparador para ordenar os produtos do estoque baseado na prioridade da recomendação
   * @param a Produto Estoque
   * @param b Produto Estoque
   */
  public comparatorProductStockByRecomendation(a: ProductStock, b: ProductStock) {
    let p1: number = a.recomendation_priority ? a.recomendation_priority : 0;
    let p2: number = b.recomendation_priority ? b.recomendation_priority : 0;
    return p2 - p1
  }

  /**
   * Comparador para ordenar os produtos do estpoque baseado na prioridade de sua categoria.
   * Se a categoria for igual ordenar pela prioridade do produto em relação ao relacionamento com a filial.
   * @param a Produto Estoque
   * @param b Produto Estoque
   */
  public comparatorProductStock(a: ProductStock, b: ProductStock) {
    if (!a.category) { console.warn("Produto sem categoria", a); return 1; }
    if (!b.category) { console.warn("Produto sem categoria", b); return -1; }
    let cat_pri_p1: number = (a.category.priority === undefined ? 0 : a.category.priority)
    let cat_pri_p2: number = (b.category.priority === undefined ? 0 : b.category.priority)
    let cat_id_p1: string = (a.category.id === undefined ? '' : a.category.id)
    let cat_id_p2: string = (b.category.id === undefined ? '' : b.category.id)
    let id_p1: string = (a.id === undefined ? '' : a.id)
    let id_p2: string = (b.id === undefined ? '' : b.id)
    let pri_p1: number = (a.priority === undefined ? 0 : a.priority)
    let pri_p2: number = (b.priority === undefined ? 0 : b.priority)

    if (cat_pri_p1 === cat_pri_p2) {
      if (cat_id_p1 === cat_id_p2) {
        if (pri_p1 === pri_p2) {
          if (id_p1 === id_p2) {
            return 0
          } else {
            return id_p1 > id_p2 ? -1 : 1
          }
        } else {
          return pri_p1 > pri_p2 ? -1 : 1
        }
      } else {
        return cat_id_p1 > cat_id_p2 ? -1 : 1
      }
    } else {
      return cat_pri_p1 < cat_pri_p2 ? -1 : 1
    }
  }
}

// export type ProductMenu = (
//   Product & {
//     category: Category

//     recomendation?: boolean
//     recomendation_priority?: number
//     priority?: number

//     active?: boolean
//   });

export type ProductStock = (
  Product & {
    category: Category

    recomendation?: boolean
    recomendation_priority?: number
    priority?: number

    active?: boolean
  });