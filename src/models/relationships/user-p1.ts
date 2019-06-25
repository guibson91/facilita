import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { User } from '../user';

/**
 * Relacionamento que define indicação PAI (1n)
 */
export class UserP1<T> extends CollectionRelationship<T, {}> {

    public get collection1() {
        return {
            collection: User,
            name: 'user_p1',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: User,
            name: 'n1',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}