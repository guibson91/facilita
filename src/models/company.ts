import { Product } from './product';
import { CompanyCategory } from './relationships/company-category';
import { CompanyFilial } from './relationships/company-filial';
import { CompanyProduct } from './relationships/company-product';
import { CompanyEmployee } from './relationships/company-employee';
import { Collection } from "../modules/firestore/collection";
import { RelationshipField } from '../modules/firestore/collection-relationship';
import { User } from './user';
import { Filial } from './filial';
import { Category } from './category';
import { Order } from './order';
import { CompanyOrders } from './relationships/company-orders';
import { Promotion } from './promotion';
import { CompanyPromotions } from './relationships/company-promotion';
import { CompanyInvoices } from './relationships/company-invoice';
import { Invoice } from './invoice';
import { CompanyOrdersPromotions } from './relationships/company-orders-promotions';
import { OrderPromotion } from './order-promotion';

/**
 * Empresa
 */
export class Company extends Collection {

	/**
	 * Propriedades da entidade.
	 */
	static path = "companies";

	/**
	 * Propriedades do relacionamento.
	 */

	public static get user_employees() {
		return new CompanyEmployee<User>(Company)
	}

	public static get filials() {
		return new CompanyFilial<Filial>(Company)
	}

	public static get categories() {
		return new CompanyCategory<Category>(Company)
	}

	public static get invoices() {
		return new CompanyInvoices<Invoice>(Filial)
	}

	public static get products() {
		return new CompanyProduct<Product>(Company)
	}

	public static get promotions() {
		return new CompanyPromotions<Promotion>(Company)
	}

	public static get orders() {
		return new CompanyOrders<Order>(Company)
	}

	public static get orders_promotions() {
		return new CompanyOrdersPromotions<OrderPromotion>(Company)
	}

	// Persistentes no Firebase.
	name?: string
	// Se a empresa está ativo ou não(Opção para o TEAM desativar empresas)
	active?: boolean
	// Filtros dos menu's do painel.
	delivery?: boolean
	promotion?: boolean
}

