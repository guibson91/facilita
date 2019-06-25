import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { User } from '../user';

/**
 * Relacionamento que define indicação BISAVÔ (1n)
 */
export class UserP3<T> extends CollectionRelationship<T, {}>  {

    public get collection1() {
        return {
            collection: User,
            name: 'user_p3',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: User,
            name: 'n3',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}