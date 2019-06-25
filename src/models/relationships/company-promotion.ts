import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Company } from '../company';
import { Promotion } from '../promotion';

/**
 * Relacionamento que indica os produtos que existem em uma empresa.
 */
export class CompanyPromotions<T> extends CollectionRelationship<T, {}>  {

    public get collection1() {
        return {
            collection: Company,
            name: 'company',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Promotion,
            name: 'promotions',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true
}