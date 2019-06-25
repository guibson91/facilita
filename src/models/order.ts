import { FilialOrders } from './relationships/filial-orders';
import { Location } from './utils/location';
import {
    Product,
    Complement,
    ComplementOption,
    ComplementType
} from './product';
import { UserOrders } from './relationships/user-orders';
import { Collection } from '../modules/firestore/collection';
import { RelationshipField } from '../modules/firestore/collection-relationship';
import { Filial, CardType, CardFoodType } from './filial';
import { User } from './user';
import { firestore } from "firebase"
import "firebase/firestore";
import { CouponOrder } from './coupon';
import { Company } from './company';
import { CompanyOrders } from './relationships/company-orders';


/**
 * ORDER (Pedido)
 * Composto por uma lista de itens + informações extras do pedido
 */
export class Order extends Collection {

    static path = "orders"

    // Propriedades de TODOS os relacionamento da entidade
    public static get company() {
        return new CompanyOrders<Company>(Order)
    }

    public static get filial() {
        return new FilialOrders<Filial>(Order)
    }

    public static get user() {
        return new UserOrders<User>(Order)
    }

    entries?: Entry[]
    observation?: string

    //Código único exibido no painel administrativo
    code?: string;

    //Cupom utilizado no pedido
    coupon?: CouponOrder;

    //Momento de cada processo
    created_at?: firestore.Timestamp | firestore.FieldValue
    accepted_at?: firestore.Timestamp | firestore.FieldValue
    doing_at?: firestore.Timestamp | firestore.FieldValue
    delivery_at?: firestore.Timestamp | firestore.FieldValue
    done_at?: firestore.Timestamp | firestore.FieldValue
    refused_at?: firestore.Timestamp | firestore.FieldValue
    away_at?: firestore.Timestamp | firestore.FieldValue
    incomplete_at?: firestore.Timestamp | firestore.FieldValue
    cancellation_reason?: string

    payment_method?: PaymentMethod
    payment_cardType?: CardType | CardFoodType
    change?: string
    status?: OrderStatus
    location?: Location

    price?: {
        delivery?: number //taxa de entrega
        subtotal?: number //Soma do valor de todos os produtos
        discounts?: number,
        total?: number //delivery + subtotal (o que o consumidor efetivamente deve pagar a empresa)
    }

    company?: RelationshipField
    filial?: RelationshipField
    user?: RelationshipField

    // Não persistentes no DB
    filial_full?: Filial
    user_full?: User

    //Avaliação do usuário do pedido
    evaluate?: {
        rate?: number; //Nota de satisfação do pedido fornecida por um usuário (1 a 5)
        comment?: string;
        created_at?: firestore.Timestamp;
    }
}


/**
 * Item do carrinho composto de um produto + informações extra do item
 */
export class Entry {

    //Produto referente ao item
    product?: Product;

    //Quantidade da entrada
    quantity?: number;

    //Complementos referente à entry
    complements?: Complement[];

    //Preço real da entrada, incluindo os complementos
    price?: number;

    // Ex: 2x Bacon, R$ 2,90
    complement_resume?: string[];

    //Verifica se todos complementos obrigatórios foram escolhidos (frontend)
    valid?: boolean;

    //Observações do pedido
    observation?: string


    /**
     * Gera uma entry a partir de um produto
     * @param product Produto que será usado para gerar uma entry
     * @todo Não está copiando o objeto produto direito. Logo quando é feita uma edição
     * na quantidade de uma opção de um complemento, ela persiste no objeto original do produto.
     */
    static entryFromProduct(product: Product): Entry {
        let entry: Entry = {}
        entry.product = JSON.parse(JSON.stringify(product))
        entry.quantity = 1
        entry.complements = entry.product.complements
        return entry
    }
    /**
     * Calcula os valores agregados de uma entry basedo nas opções escolhidas dos complementos e valor base.
     * Calcula-se o Preço, Resumo da entry, e se é uma entry válida ou não 
     * @param entry entry que será usada para calcular
     */
    static calculateEntryValues(entry?: Entry): void {

        // Inicializado com o preço base.
        let price: number = entry.product.priceBase;

        // Array de strings no qual cada string representa o resumo de uma opção escolhida do complemento.
        let complement_resume: string[] = [];

        // Todo pedido é válido até que se prove o contrário
        let valid: boolean = true;

        // Para todos os complementos.
        (entry.complements || []).forEach((complement: Complement) => {
            if (complement.type !== ComplementType.single &&
                complement.type !== ComplementType.multiple &&
                complement.type !== ComplementType.quantity) {
                console.error("Tipo de complemento inválido")
                throw Error("Essa entrada possui um tipo de complemento inválido")
            }

            // Inicializa o resumo do complemento.
            complement.resume = [];
            let quantity_sum_options = 0;
            // Para cada opção
            (complement.options || []).forEach((option: ComplementOption) => {
                // Se a opção tiver sido escolhida.
                if (option.quantity && option.quantity > 0) {
                    quantity_sum_options += option.quantity
                    // Preço da opção * quantidade da opção.
                    let price_option = option.price * option.quantity;
                    if (option.price > 0) {
                        // Adiciona no preço do pedido.
                        price += price_option;
                        // Adiciona a string relativa a opção do pedido.
                        complement.resume
                            .push(`${option.quantity}x ${option.name},  R$ ` +
                                price_option.toLocaleString('pt-BR', {
                                    minimumIntegerDigits: 1,
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                    useGrouping: false
                                }));
                    } else {
                        // Adiciona a string relativa a opção do pedido.
                        complement.resume
                            .push(`${option.quantity}x ${option.name}`);
                    }

                }
            });

            switch (complement.type) {
                case ComplementType.single:
                    if (quantity_sum_options == 0 && complement.required) {
                        valid = false
                    }
                    break
                case ComplementType.multiple:
                case ComplementType.quantity: {
                    if (quantity_sum_options < complement.min) valid = false;
                    else if (complement.max == 0) valid = true;
                    else if (quantity_sum_options > complement.max) {
                        valid = false
                    }
                    break
                }
            }
            // Concatena o resumo do complmento com o resumo do pedido.
            complement_resume = complement_resume.concat(complement.resume);
        });

        entry.price = price;

        //Ajustar valor da entrada caso o produto esteja em promoção
        if (entry.product.promotionActive) {
            if (entry.product.promotionPrice) {
                entry.price = entry.price - entry.product.promotionPrice;
            }
            else if (entry.product.promotionPercentage) {
                entry.price = ((100 - entry.product.promotionPercentage) / 100) * entry.price;
            }
        }

        entry.complement_resume = complement_resume;
        entry.valid = valid;
    }
}

/**
 * Tipos do complemento
 * Pode ser de 3 tipos:
 * É usado os números representando o status do pedido no bd pois é usado para ordenar
 * 0. created = Pedido foi solicitado pelo usuário.
 * 1. accepted = Pedido foi aceito pela empresa.
 * 2. doing = Pedido está sendo feito.
 * 3. delivery = Pedido saiu para entrega.
 * 4. done = Pedido foi entregue ao usuário.
 * 5. away = O pedido foi cancelado por falta de resposta.s
 * 6. refused = Pedido foi recusado pela empresa.
 * 7. incomplete = O pedido foi aceito. Mas após isso não foi completado
 */
export enum OrderStatus {
    created,
    accepted,
    doing,
    delivery,
    done,
    away,
    refused,
    incomplete
}

/**
 * Métodos de pagamento
 * 0. auxCard = auxiliar que identifica se foi selecionado cartão de crédito ou débito
 * 1. credit_card = Pagamento realizado via crédito
 * 2. debit_card = Pagamento realizado via débito
 * 3. money = Pagamento realizado em dinheiro
 * 4. food_stamps = Pagamento realizado por vale-alimentação
 */
export enum PaymentMethod {
    auxCard = 'card', //AUXILIAR PARA SABER QUE FOI SELECIONADO CARTÃO
    credit_card = "credit_card", //cartão de crédito
    debit_card = "debit_card", //cartão de débito
    money = "money", //dinheiro
    food_stamps = 'food_stamps' //vale-alimentação
}