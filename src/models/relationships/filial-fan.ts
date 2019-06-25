import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { User } from '../user';
import { Filial } from '../filial';

/**
 * Relacionamento que define os fãs de uma filial (NN)
 */
export class FilialFan<T> extends CollectionRelationship<T,{}>{

    public get collection1() {
        return {
            collection: User,
            name: 'fans',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Filial,
            name: 'favorites',
            required: false
        }
    }

    public type = RelationshipType.ManyToMany
    public bidirectional = true

}