import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Coupon } from '../coupon';
import { User } from '../user';

export class UserCoupon<T> extends CollectionRelationship<T,
    {
        
    }>{

    public get collection1() {
        return {
            collection: User,
            name: 'users',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Coupon,
            name: 'coupons',
            required: false
        }
    }

    public type = RelationshipType.ManyToMany
    public bidirectional = true

}