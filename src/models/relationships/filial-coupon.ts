import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Filial } from '../filial';
import { Coupon } from '../coupon';

/**
 * Relacionamento que define os cupons de uma filial (NN)
 * Cada cupom pertence a 0 ou mais filiais
 * Cada filial possui 0 ou mais cupons
 */
export class FilialCoupon<T> extends CollectionRelationship<T,
    {
        active: boolean
    }>{

    public get collection1() {
        return {
            collection: Filial,
            name: 'filials',
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