import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Filial } from '../filial';
import { OrderPromotion } from '../order-promotion';

/**
 * Relacionamento que define os pedidos de uma filial (N1)
 * Cada pedido pertence a uma filial
 * Cada filial possui 0 ou mais pedidos
 */
export class FilialOrdersPromotions<T> extends CollectionRelationship<T, {}> {

    public get collection1() {
        return {
            collection: Filial,
            name: 'filial',
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