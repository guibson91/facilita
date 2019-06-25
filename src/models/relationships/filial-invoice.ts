import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Filial } from '../filial';
import { Invoice } from '../invoice';

/**
 * Relacionamento que define as faturas de uma filial (N1)
 * Cada fatura pertence a uma filial
 * Cada filial possui 0 ou mais faturas
 */
export class FilialInvoices<T> extends CollectionRelationship<T, {}> {

    public get collection1() {
        return {
            collection: Filial,
            name: 'filial',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Invoice,
            name: 'invoices',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}