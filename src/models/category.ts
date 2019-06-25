import { CategoryProduct } from './relationships/category-product';
import { Collection } from '../modules/firestore/collection';
import { RelationshipField } from '../modules/firestore/collection-relationship';
import { Product } from './product';
import { Company } from './company';
import { CompanyCategory } from './relationships/company-category';
import { FilialType } from './filial';

export class Category extends Collection {

    static path = "categories";

    // Propriedades de TODOS os relacionamento da entidade

    public static get company() {
        return new CompanyCategory<Company>(Category)
    }

    public static get category_product() {
        return new CategoryProduct<Product>(Category)
    }

    // Persistentes no Firebase
    name?: string;
    priority?: number;
    // Se a categoria é global ou não
    global?: boolean;
    // Se for global deve ter o tipo:
    type?: FilialType;
    company?: RelationshipField;
}