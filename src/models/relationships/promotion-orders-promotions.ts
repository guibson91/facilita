import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { OrderPromotion } from '../order-promotion';
import { Promotion } from '../promotion';

export class PromotionOrdersPromotions<T> extends CollectionRelationship<T, {}> {

    public get collection1() {
        return {
            collection: Promotion,
            name: 'promotion',
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