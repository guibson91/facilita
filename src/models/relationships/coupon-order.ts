import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Coupon } from '../coupon';
import { Order } from '../order';

export class CouponOrder<T> extends CollectionRelationship<T,
    {

    }>{

    public get collection1() {
        return {
            collection: Coupon,
            name: 'coupon',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Order,
            name: 'orders',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}