import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Filial } from '../filial';
import { Promotion } from '../promotion';

/**
 * Relacionamento que define as promoções de uma filial (Estoque) (NN)
 * Cada produto pertence a 0 ou mais filiais
 * Cada filial possui 0 ou mais produtos
 */
export class FilialPromotionStock<T> extends CollectionRelationship<T,
    {
        quantity?: number,
        active?: boolean
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
            collection: Promotion,
            name: 'promotion_stock',
            required: false
        }
    }

    public type = RelationshipType.ManyToMany
    public bidirectional = true

}