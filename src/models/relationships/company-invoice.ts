import { Company } from "../company"
import { CollectionRelationship, RelationshipType } from "../../modules/firestore/collection-relationship"
import { Invoice } from "../invoice"
/**
 * Relacionamento que indica as faturas que existem em uma empresa.
 */
export class CompanyInvoices<T> extends CollectionRelationship<T, {}>  {

    public get collection1() {
        return {
            collection: Company,
            name: 'company',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Invoice,
            name: 'invoices',
            required: true
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}