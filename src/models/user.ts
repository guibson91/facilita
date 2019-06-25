import { FilialEmployee } from './relationships/filial-employee';
import { Location } from './utils/location';
import { UserOrders } from './relationships/user-orders';
import { Collection } from "../modules/firestore/collection";
import { RelationshipField } from '../modules/firestore/collection-relationship';
import { UserP1 } from './relationships/user-p1';
import { UserP2 } from './relationships/user-p2';
import { UserP3 } from './relationships/user-p3';
import { Filial } from './filial';
import { Order } from './order';
import { FilialFan } from './relationships/filial-fan';
import { Coupon } from './coupon';
import { UserCoupon } from './relationships/user-coupon';
import { firestore } from "firebase"
import "firebase/firestore";
import { Company } from './company';
import { CompanyEmployee } from './relationships/company-employee';
import { OrderPromotion } from './order-promotion';
import { UserOrdersPromotions } from './relationships/user-orders-promotions';

export class User extends Collection {

    // Propriedades da entidade.
    static path = "users"

    // Propriedades do relacionamento

    public static get company_employee() {
        return new CompanyEmployee<Company>(User)
    }

    public static get filial_employee() {
        return new FilialEmployee<Filial>(User)
    }

    public static get orders() {
        return new UserOrders<Order>(User)
    }

    public static get orders_promotions() {
        return new UserOrdersPromotions<OrderPromotion>(User)
    }

    public static get coupons() {
        return new UserCoupon<Coupon>(User)
    }

    public static get user_p1() {
        return new UserP1<User>(User)
    }

    public static get user_p2() {
        return new UserP2<User>(User)
    }

    public static get user_p3() {
        return new UserP3<User>(User)
    }

    public static get favorites() {
        return new FilialFan<Filial>(User)
    }

    //Dados persistentes no Database
    name?: string
    first_name?: string
    code?: string
    email?: string
    password?: string;
    location?: Location;
    physical_location?: Location;
    locations_history?: Location[]
    updated_time?: firestore.Timestamp
    gender?: string // 'male' or 'female'
    image?: string
    phone?: string
    phone_social?: string
    permissions?: PermissionType[]
    push_notification?: { pushToken: string, userId: string }

    /**
     * Verifica se o usuário atual já aceitou os termos de compromisso.
     * Exclusivo para o usuário do painel.
     */
    accept_terms_use?: boolean

    // Relacionamentos N1 ou 11 (na qual entidade se relaciona com ONE)
    company_employee?: RelationshipField
    filial_employee?: RelationshipField
    user_p1?: RelationshipField
    user_p2?: RelationshipField
    user_p3?: RelationshipField

    hasDenunciation?: boolean;
    denunciations?: string[]
}

/***********************************************************************
 * Permissão do usuário propriamente dita.
 * Responsável por mapear a permissão do usuário para um string correspondente.
 * Essa string que efetivamente será persistida no Database.
 ***********************************************************************/

export const Permission: {
    TEAM: PermissionType,
    COMPANY_MANAGEMENT: PermissionType,
    FILIAL_MANAGEMENT: PermissionType,
    ORDER: PermissionType,
    ORDER_READ: PermissionType,
    CUSTOMER: PermissionType
} = {
    TEAM: "TEAM",
    COMPANY_MANAGEMENT: "COMPANY_MANAGEMENT",
    FILIAL_MANAGEMENT: "FILIAL_MANAGEMENT",
    ORDER: "ORDER",
    ORDER_READ: "ORDER_READ",
    CUSTOMER: "CUSTOMER"
}

/**
 * Tipo de permissão de usuário
 * Deve ser utilizado para tipar uma variável 'permission'
 * Responsável em gerar o intellisense no typescript
 */
export type PermissionType = "TEAM" | "COMPANY_MANAGEMENT" | "FILIAL_MANAGEMENT" | "ORDER" | "ORDER_READ" | "CUSTOMER";