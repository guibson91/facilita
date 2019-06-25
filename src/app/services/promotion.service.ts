import { Injectable } from '@angular/core';
import { Promotion } from '../../models/promotion';
import { Company } from '../../models/company';
import { Filial } from '../../models/filial';
import { Observable, combineLatest } from 'rxjs';
import { RelationshipField } from '../../modules/firestore/collection-relationship';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  /**
   * Busca uma lista de promoções de uma filial.
   * Adiciona nessa lista de promoções as informações do relacionamento.
   * Gerando Promoções com:
   * Atributos do produto. Active e quantity
   * Se active true então existe o relacionamento com a filial. Se false não existe relacionamento da promoção com a filial.
   * Demais atributos diretos do relacionamento Filial.promotions_stock
   * @param id_filial Id da filial
   */
  public getPromotionsStockFilial(filial: Filial): Observable<PromotionStock[]> {
    console.log(filial)
    let promotions$: Observable<Promotion[]> = Company.promotions.list(filial.company.id)
    let relations$: Observable<({ active?: boolean, quantity?: number } & RelationshipField)[]> = Filial.promotion_stock.listRelation(filial.id)

    return combineLatest([
      promotions$,
      relations$
    ])
      .pipe(map((arr: [Promotion[], ({ active?: boolean, quantity?: number } & RelationshipField)[]]) => {
        let promotions: PromotionStock[] = arr[0];
        let relations: ({ active?: boolean, quantity?: number } & RelationshipField)[] = arr[1];

        let id_promotion_to_relationship = {}
        for (let obj of relations) {
          id_promotion_to_relationship[obj.id] = obj
        }

        // Para todos as promoções verificar as informações do relacionamento
        for (let promotion of promotions) {
          // Se existir o relacionamento do produto com a filial
          if (id_promotion_to_relationship[promotion.id]) {
            promotion.active = (id_promotion_to_relationship[promotion.id].active === undefined ? true : id_promotion_to_relationship[promotion.id].active)
            promotion.quantity = (id_promotion_to_relationship[promotion.id].quantity === undefined ? 0 : id_promotion_to_relationship[promotion.id].quantity)
          } else {
            promotion.active = false;
          }
          // Se não existir o relacionamento do produto com a filial
        }
        return promotions
      }))
  }
}

export type PromotionStock = (
  Promotion & {
    active?: boolean,
    quantity?: number
  });