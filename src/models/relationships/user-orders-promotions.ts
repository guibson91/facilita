import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { User } from '../user';
import { OrderPromotion } from '../order-promotion';

/**
 * Relacionamento que define os pedidos de um usuário (1N)
 * Cada pedido pertence a somente um usuário
 * Cada usuário possui 0 ou mais pedidos
 */
export class UserOrdersPromotions<T> extends CollectionRelationship<T, {}>  {

    public get collection1() {
        return {
            collection: User,
            name: 'user',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: OrderPromotion,
            name: 'orders_promotions',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}