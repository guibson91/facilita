import { CollectionRelationship, RelationshipType } from '../../modules/firestore/collection-relationship';
import { Category } from '../category';
import { Product } from '../product';

/**
 * Relacionamento que indica os produtos que existem em uma categoria
 */
export class CategoryProduct<T> extends CollectionRelationship<T, {}>  {
    
    public get collection1() {
        return {
            collection: Category,
            name: 'category',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: Product,
            name: 'category_product',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true
}