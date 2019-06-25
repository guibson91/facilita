import { Collection } from '../modules/firestore/collection';
import { FilialFan } from './relationships/filial-fan';
import { FilialEmployee } from './relationships/filial-employee';
import { FilialStock } from './relationships/filial-stock';
import { FilialOrders } from './relationships/filial-orders';
import { Location } from './utils/location';
import { Order, PaymentMethod } from './order';
import { Product } from './product';
import { RelationshipField } from '../modules/firestore/collection-relationship';
import { User } from './user';
import * as moment from 'moment';
import { FilialCoupon } from './relationships/filial-coupon';
import { Coupon } from './coupon';
import { Company } from './company';
import { CompanyFilial } from './relationships/company-filial';
import { ProductStock } from '../app/services/product.service';
import { FilialPromotionStock } from './relationships/filial-promotion-stock';
import { Promotion } from './promotion';
import { FilialInvoices } from './relationships/filial-invoice';
import { Invoice } from './invoice';
import { firestore } from "firebase"
import "firebase/firestore";
import { Observable } from 'rxjs';
import { FilialOrdersPromotions } from './relationships/filial-orders-promotions';
import { OrderPromotion } from './order-promotion';


export class Filial extends Collection {

    // Propriedades da entidade.
    static path = "filials"

    // Propriedades do relacionamento
    public static get user_employees() {
        return new FilialEmployee<User>(Filial)
    }

    public static get company() {
        return new CompanyFilial<Company>(Filial)
    }

    public static get invoices() {
        return new FilialInvoices<Invoice>(Filial)
    }

    public static get product_stock() {
        return new FilialStock<Product>(Filial)
    }

    public static get promotion_stock() {
        return new FilialPromotionStock<Promotion>(Filial)
    }

    public static get coupons() {
        return new FilialCoupon<Coupon>(Filial)
    }

    public static get orders() {
        return new FilialOrders<Order>(Filial)
    }

    public static get orders_promotions() {
        return new FilialOrdersPromotions<OrderPromotion>(Filial)
    }

    public static get fans() {
        return new FilialFan<User>(Filial)
    }

    // Dados persistentes no banco de dados
    name?: string
    description?: string
    image?: string
    cover?: string // Imagem de capa
    phone?: string
    phone1?: string
    phone2?: string
    have_delivery?: boolean
    // Pedido mínimo
    orderMin?: number
    delivery?: {
        fee?: number, // Custo de entrega por km. 
        feeMin?: number, //taxa mínima possível de frete
        feeMax?: number, //taxa máxima possível de frete
        distanceMax?: number, // Em km.
        timeMin: number, // Em minutos.
        timeMax: number, // Em minutos.
    }
    location?: Location
    rating?: {
        rate?: number; //nota de satisfação média de todos os usuários votados (sum/quantity)
        quantity?: number; //quantidade de usuários que votaram
        sum?: number; //soma bruta de todas as avaliações
    }
    // Se a filial está aberta ou fechada
    open?: boolean
    // Calculados localmente
    distance?: number
    // Dados dos relacionamentos
    company?: RelationshipField

    // Apenas Frontend (Empresa completa)
    company_full?: Company;

    type?: FilialType
    subtypes?: FilialSubType[]

    promotions_full?: Promotion[]

    product_recomendated?: ProductStock

    open_on_business_hours?: boolean
    business_hours?: {
        0: IntervalHours[] // Domingo
        1: IntervalHours[] // Segunda
        2: IntervalHours[] // Terça
        3: IntervalHours[] // Quarta
        4: IntervalHours[] // Quinta
        5: IntervalHours[] // Sexta
        6: IntervalHours[] // Sábado
    }

    districts?: {
        value: string, //id
        title: string, //nome do bairro
        state: string,
        city: string
    }[]

    paymentMethods?: PaymentMethod[]
    cards?: CardType[]
    cards_food?: CardFoodType[]

    fee?: number
    monthly_payment?: number

    /**
     * Se está ativa ou não a filial
     */
    active?: boolean;

    /**
     * A primeira vez que a filial foi aberta. Usada para contabilidade das mensalidades
     */
    first_time_active?: firestore.Timestamp

    /**
     * A ultima vez que a filial foi aberta. Usada para contabilidade das mensalidades
     */
    last_time_active?: firestore.Timestamp

    /**
     * A ultima vez que a filial foi fechada. Usada para contabilidade das mensalidades
     */
    last_time_deactive?: firestore.Timestamp

    year?: any

    /**
     * Propriedades usadas na view
     */
    next_open_hour?: string

    deliveryDistricts?: {
        location: Location, //representa o bairro
        value: any //valor de delivery em string para permitir o two way data binding
    }[]

    //Define se o delivery é por bairro ou por distância ao usuário
    deliveryByDistrict?: boolean;

    /**
     * Muda o status de uma filial de ativa para desativa salvando os respectivos dados
     * @param filial Filial que será mudado o status
     * @param active Se ela vai virar ativa ou inativa
     */
    static changeActive(filial: Filial, active: boolean): Observable<void> {
        let obj: Filial = {};
        //
        if (active && !filial.first_time_active) {
            obj.first_time_active = firestore.Timestamp.fromDate(new Date())
        }
        if (active) {
            obj.last_time_active = firestore.Timestamp.fromDate(new Date())
        }
        if (!active) {
            obj.last_time_deactive = firestore.Timestamp.fromDate(new Date())
        }
        obj.active = active;
        return Filial.update(filial.id, obj)
    }
    /**
     * Se a filial for aberta por horário de funcionamento (open_on_business_hours)
     * Atualuzar a variavel open e next_open_hour de acordo com o horário de funcionamento e a hora atual.
     * next_open_hour: "Abre hoje às 10:30", "Abre amanhã as 15:30", "Abre quinta-feira às 10:00"
     * @param filial Filial que será verificada
     * @param date Hora atual
     */
    static checkBusinessHours(filial: Filial, date: Date): void {
        if (filial.open_on_business_hours) {
            const hour: string = date.toString().split(" ")[4].slice(0, 5)
            const week_day: number = date.getDay()
            let next_open: string

            // Verifica se existe horário de funcionamento hoje
            if (filial.business_hours && filial.business_hours[week_day]) {
                for (let interval of filial.business_hours[week_day]) {
                    // Se o intervalo é de horário aberto e a hora atual está dentro do intervalo
                    if (interval.open && hour >= interval.start && hour <= interval.end) {
                        filial.open = true
                        filial.next_open_hour = undefined
                        return
                    }

                    // Verifica o próximo horário aberto no mesmo dia. Usado para se a filial estiver fechada
                    if (interval.open && // Se o intervalo é um intervalo de aberto
                        hour < interval.start && // E a hora atual é menor que a hora de comeéco
                        (
                            !next_open || // Se não existir já um horário
                            next_open > interval.start // Se existir e for maior do que o horário de começo do intervalo
                        )
                    ) {
                        next_open = interval.start
                    }
                }

                // Filial fechada e próximo horário disponível já descoberto
                if (next_open) {
                    filial.open = false
                    filial.next_open_hour = "Abre hoje às " + next_open
                    return
                }
            }

            filial.open = false
            if (filial.next_open_hour) {
                return;
            }

            // Verifica qual o dia mais próximo que o estabelecimento fica aberto

            for (let diff = 1; diff <= 7; diff++) {
                const week_next_day = (week_day + diff) % 7

                if (filial.business_hours && filial.business_hours[week_next_day]) {
                    for (let interval of filial.business_hours[week_next_day]) {
                        if (!next_open || next_open > interval.start) {
                            next_open = interval.start
                        }
                    }

                    // Filial irá abrir nesse dia (dia atual + diff)
                    if (next_open) {
                        filial.open = false
                        if (diff == 1) {
                            filial.next_open_hour = "Abre amanhã ás " + next_open
                        } else {
                            moment.locale('pt-BR')
                            const d = new Date();
                            d.setDate(date.getDate() + diff)
                            filial.next_open_hour = "Abre " + moment(d).format("dddd").toLowerCase() + " às " + next_open
                        }
                        return
                    }
                }
            }
            filial.next_open_hour = undefined
        } else {
            filial.next_open_hour = undefined
        }
    }

}

export enum CardType {
    VISA = 'visa',
    MASTERCARD = 'master',
    ELO = 'elo',
    HIPERCARD = 'hipercard',
    HIPER = 'hiper',
    DINERS = 'diners',
    CABAL = 'cabal',
    AMERICAN_EXPRESS = 'american_express',
}

export enum CardFoodType {
    TICKET = 'ticket',
    ALELO = 'alelo',
    SODEXO = 'sodexo'
}

export const CARDS = [
    {
        value: CardType.VISA,
        text: 'VISA'
    },
    {
        value: CardType.MASTERCARD,
        text: 'MASTERCARD'
    },
    {
        value: CardType.ELO,
        text: 'ELO'
    },
    {
        value: CardType.HIPERCARD,
        text: 'HIPERCARD'
    },
    {
        value: CardType.HIPER,
        text: 'HIPER'
    },
    {
        value: CardType.DINERS,
        text: 'DINERS'
    },
    {
        value: CardType.CABAL,
        text: 'CABAL'
    },
    {
        value: CardType.AMERICAN_EXPRESS,
        text: 'AMERICAN EXPRESS'
    }
];

export const CARDS_FOOD = [
    {
        value: CardFoodType.TICKET,
        text: 'TICKET'
    },
    {
        value: CardFoodType.ALELO,
        text: 'ALELO'
    },
    {
        value: CardFoodType.SODEXO,
        text: 'SODEXO'
    }
]


export enum FilialType {
    RESTAURANT = 'restaurant',
    DRUGSTORE = 'drugstore',
    SUPERMARKET = 'supermarket',
    WAREHOUSE = 'warehouse',
    OTHER = 'other'
}

export interface FilialTypeOption {
    name: string,
    description?: string,
    value: FilialType
}
/**
 * Lista com tipos de filiais fixa
 */
export const FILIAL_TYPES: FilialTypeOption[] = [
    {
        name: "Restaurante",
        value: FilialType.RESTAURANT
    },
    {
        name: "Farmácia",
        value: FilialType.DRUGSTORE
    },
    {
        name: "Supermercado",
        value: FilialType.SUPERMARKET
    },
    {
        name: "Depósito",
        value: FilialType.WAREHOUSE
    },
    {
        name: "Outros",
        value: FilialType.OTHER
    }
]
/**
 * Interface do tipo de uma Filial contendo nome e descrição desse tipo. 
 * Descrição são apenas exemplos do que seria o tipo.
 */
export interface FilialSubType {
    name: string,
    description?: string,
    icon?: string
}
/**
 * Lista de tipos de Filials fixa.
 */
export const RESTAURANT_SUBTYPES: FilialSubType[] = [
    {
        name: "Frutos do mar", // *
        description: '(Caranguejo, camarão)',
        icon: 'flaticon-lobster'
    },
    {
        name: "Oriental", // *
        description: '(Chinesa, Japonesa,..)',
        icon: 'flaticon-sushi-and-chopsticks'
    },
    {
        name: "Árabe",
        description: '(Esfihas, kebab, kibe)',
        icon: 'flaticon-two-macarons'

    },
    {
        name: 'Tradicional',
        description: '(Feijoada, Buxada, Baiao)',
        icon: 'flaticon-roast-chicken-on-tray'
    },
    {
        name: 'Saudável',
        icon: 'flaticon-apple-with-a-leaf'
    },
    {
        name: 'Vegetariano', // *
        icon: 'flaticon-big-broccoli'
    },
    {
        name: 'Churrascaria', // *
        description: '(Espetinhos, carnes)',
        icon: 'flaticon-grilled-steak'
    },
    {
        name: 'Bebidas', // *
        icon: 'flaticon-ketchup-and-mustard'
    },
    {
        name: 'Pizzaria', // *
        icon: 'flaticon-big-pizza-slice'
    },
    {
        name: 'Hamburgueria', // *
        icon: 'flaticon-big-cheeseburger'
    },
    {
        name: 'Pastelaria',
        icon: 'flaticon-slice-of-waterlemmon'
    },
    {
        name: 'Sorveteria',
        description: '(Açaí, sorvetes)',
        icon: 'flaticon-sundae-with-cherry'
    },
    {
        name: 'Doceteria',
        description: '(Bolo, brigadeiro)',
        icon: 'flaticon-birthdaycake-and-candle'
    },
    {
        name: 'Salgaderia',
        icon: 'flaticon-mexican-taco'
    },
    {
        name: 'Massas',
        icon: 'flaticon-spaghetti-plate'
    }
]


export interface IntervalHours {
    start: string,
    end: string,
    open: boolean
}