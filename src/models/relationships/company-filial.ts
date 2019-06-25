import { Company } from "../company"
import { CollectionRelationship, RelationshipType } from "../../modules/firestore/collection-relationship"
import { Filial } from "../filial"
/**
 * Relacionamento que indica as filiais que existem em uma empresa.
 */
export class CompanyFilial<T> extends CollectionRelationship<T, {}>  {

    public get collection1() {
        return {
            collection: Company,
            name: 'company',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Filial,
            name: 'filials',
            required: true
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}