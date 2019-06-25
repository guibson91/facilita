import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Company } from '../company';
import { User } from '../user';

/**
 * Relacionamento que indica os funcionários que existem em uma empresa.
 */
export class CompanyEmployee<T> extends CollectionRelationship<T, {}>  {

    public get collection1() {
        return {
            collection: Company,
            name: 'company_employee',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: User,
            name: 'user_employees',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}