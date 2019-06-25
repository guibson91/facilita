import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Company } from '../company';
import { OrderPromotion } from '../order-promotion';

/**
 * Relacionamento que define os pedidos de promoções de uma empresa (N1)
 * Cada pedido pertence a uma empresa
 * Cada empresa possui 0 ou mais pedidos
 */
export class CompanyOrdersPromotions<T> extends CollectionRelationship<T, {}>  {

    public get collection1() {
        return {
            collection: Company,
            name: 'company',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: OrderPromotion,
            name: 'orders_promotions',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}