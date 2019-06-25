import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { User } from '../user';

/**
 * Relacionamento que define indicação AVÔ (1n)
 */
export class UserP2<T> extends CollectionRelationship<T, {}>  {

    public get collection1() {
        return {
            collection: User,
            name: 'user_p2',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: User,
            name: 'n2',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}