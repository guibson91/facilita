import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Company } from '../company';
import { Category } from '../category';

/**
 * Relacionamento que indica as categorias que existem em uma empresa.
 */
export class CompanyCategory<T> extends CollectionRelationship<T, {}> {

    public get collection1() {
        return {
            collection: Company,
            name: 'company',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Category,
            name: 'categories',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}