import { Collection } from '../modules/firestore/collection';
import { CouponOrder } from './relationships/coupon-order';
import { Filial } from './filial';
import { FilialCoupon } from './relationships/filial-coupon';
import { Order } from './order';
import { User } from './user';
import { UserCoupon } from './relationships/user-coupon';
import { firestore } from "firebase"
import "firebase/firestore";


export class Coupon extends Collection {

    static path = "coupons"

    /**
     * Filiais que são permitidas o uso do cupom
     */
    public static get filial() {
        return new FilialCoupon<Filial>(Coupon)
    }

    /**
     * Usuários que utilizaram o cupom
     */
    public static get user() {
        return new UserCoupon<User>(Coupon)
    }

    /**
     * Pedidos que utilizaram o cupom
     */
    public static get order() {
        return new CouponOrder<Order>(Coupon)
    }

    /**
     * IDENTIFICADOR DO CUPOM
     */
    name?: string;

    /**
     * Descrição do CUPOM
     */
    description?: string;

    /**
     * Define a responsabilidade de pagamento (TEAM ou da EMPRESA)
     */
    fromTeam?: boolean;

    /**
     * Valor a ser descontado no carrinho
     */
    money?: number;

    /**
     * Porcentagem a ser descontado no carrinho
     */
    percentage?: number;

    /**
     * Define se o CUPOM é frete grátis ou não
     */
    freeShipping?: boolean;

    /**
     * Data de criação do CUPOM
     */
    created_at?: firestore.Timestamp | firestore.FieldValue;

    /**
     * Data de expiração do CUPOM
     */
    finished_at?: firestore.Timestamp;

    /**
     * Define se o cupom está HABILITADO de forma geral
     */
    enable?: boolean;

}

export type CouponFilial = (
    //Define se ele está ATIVO ou INATIVO para uma filial específica
    Coupon
    // & {
    //     active?: boolean
    // }
);

export type CouponOrder = (
    //Define se ele está ATIVO ou INATIVO para uma filial específica
    Coupon
    & {
        discounts?: number
    }
);