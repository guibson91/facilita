import { Collection } from '../modules/firestore/collection';
import { RelationshipField } from '../modules/firestore/collection-relationship';
import { Filial } from './filial';
import { User } from './user';
import { firestore } from "firebase"
import "firebase/firestore";
import { Company } from './company';
import { CompanyOrdersPromotions } from './relationships/company-orders-promotions';
import { FilialOrdersPromotions } from './relationships/filial-orders-promotions';
import { UserOrdersPromotions } from './relationships/user-orders-promotions';
import { Promotion } from './promotion';
import { PromotionOrdersPromotions } from './relationships/promotion-orders-promotions';


/**
 * Pedidos de promoções
 */
export class OrderPromotion extends Collection {

    static path = "orders_promotions"

    // Propriedades de TODOS os relacionamento da entidade
    public static get company() {
        return new CompanyOrdersPromotions<Company>(OrderPromotion)
    }

    public static get filial() {
        return new FilialOrdersPromotions<Filial>(OrderPromotion)
    }

    public static get user() {
        return new UserOrdersPromotions<User>(OrderPromotion)
    }

    public static get promotion() {
        return new PromotionOrdersPromotions<Promotion>(OrderPromotion)
    }

    // Código único
    code?: string;

    //Momento de criação 
    created_at?: firestore.Timestamp | firestore.FieldValue

    company?: RelationshipField
    filial?: RelationshipField
    user?: RelationshipField
    promotion?: RelationshipField

    // Não persistentes no DB
    filial_full?: Filial
    company_full?: Company
    user_full?: User
    promotion_full?: Promotion

    //Avaliação do usuário do pedido
    // evaluate?: {
    //     rate?: number; //Nota de satisfação do pedido fornecida por um usuário (1 a 5)
    //     comment?: string;
    //     created_at?: firestore.Timestamp;
    // }
}