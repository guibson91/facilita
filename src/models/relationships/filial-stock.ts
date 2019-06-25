import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Filial } from '../filial';
import { Product } from '../product';

/**
 * Relacionamento que define os produtos de uma filial (Estoque) (NN)
 * Cada produto pertence a 0 ou mais filiais
 * Cada filial possui 0 ou mais produtos
 */
export class FilialStock<T> extends CollectionRelationship<T,
    {
        active?: boolean,
        recomendation?: boolean,
        recomendation_priority?: number,
        priority?: number
    }>{

    public get collection1() {
        return {
            collection: Filial,
            name: 'filial',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Product,
            name: 'product_stock',
            required: false
        }
    }

    public type = RelationshipType.ManyToMany
    public bidirectional = true

}