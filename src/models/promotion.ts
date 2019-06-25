import { Collection } from '../modules/firestore/collection';
import { RelationshipField } from '../modules/firestore/collection-relationship';
import { Filial } from './filial';
import { Company } from './company';
import { CompanyPromotions } from './relationships/company-promotion';
import { FilialPromotionStock } from './relationships/filial-promotion-stock';
import { OrderPromotion } from './order-promotion';
import { PromotionOrdersPromotions } from './relationships/promotion-orders-promotions';

export class Promotion extends Collection {

    static path = "promotions";

    // Propriedades de TODOS os relacionamento da entidade
    public static get company() {
        return new CompanyPromotions<Company>(Promotion)
    }

    public static get filial() {
        return new FilialPromotionStock<Filial>(Promotion)
    }

    public static get orders_promotions() {
        return new PromotionOrdersPromotions<OrderPromotion>(Promotion)
    }

    company: RelationshipField

    // Persistentes no Firebase
    name?: string;
    description?: string;
    image?: string;
    priceBase?: number; //preço inicial (sem considerar descontos)
    promotionActive?: boolean;
    promotionPrice?: number;
    promotionPercentage?: number;


    //Não persistente
    code?: string;
}