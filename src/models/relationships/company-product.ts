import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Company } from '../company';
import { Product } from '../product';

/**
 * Relacionamento que indica os produtos que existem em uma empresa.
 */
export class CompanyProduct<T> extends CollectionRelationship<T, {}>  {

    public get collection1() {
        return {
            collection: Company,
            name: 'company',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Product,
            name: 'products',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true
}