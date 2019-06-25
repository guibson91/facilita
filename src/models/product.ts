import { CategoryProduct } from './relationships/category-product';
import { Collection } from '../modules/firestore/collection';
import { FilialStock } from './relationships/filial-stock';
import { RelationshipField } from '../modules/firestore/collection-relationship';
import { Category } from './category';
import { Filial, FilialType } from './filial';
import { Company } from './company';
import { CompanyProduct } from './relationships/company-product';

export class Product extends Collection {

    static path = "products";

    // Propriedades de TODOS os relacionamento da entidade
    public static get company() {
        return new CompanyProduct<Company>(Product)
    }

    public static get category() {
        return new CategoryProduct<Category>(Product)
    }

    public static get filial() {
        return new FilialStock<Filial>(Product)
    }

    // Relacionamentos One
    company: RelationshipField
    category: RelationshipField
    filial: RelationshipField

    // Persistentes no Firebase
    name?: string;
    description?: string;
    image?: string;
    // Existe apenas em produtos globais
    global?: {
        type?: FilialType
    }
    minimumPrice?: number; //preço base + soma de preço de todos os complementos obrigatórios
    priceBase?: number; //preço inicial do produto (sem considerar complementos)
    promotionActive?: boolean;
    promotionPrice?: number;
    promotionPercentage?: number;
    priority?: number;
    fixedQuantity?: boolean;
    complements?: Complement[];

    /**
     * Calcula o price(preço atual mínimo) de um produto.
     * O preço atual é o preço base mais o preço mínimo gasto em todos os complementos obrigatórios.
     * Logo o price é o mínimo a ser gasto ao comprar esse produto.
     * @param {Product} p Produto no qual será calculado o price(preço atual mínimo)
     */
    static calculatePrice(p: Product): Product {
        p.minimumPrice = p.priceBase || 0;
        p.complements.forEach((complement: Complement) => {
            let minimumPriceComplement = 0;
            if (complement.options && complement.options.length > 0) {
                // Mínimo de opções obrigatórias
                let min: number = 0
                switch (complement.type) {
                    // Se tipo single o mínimo escolhido é 1 apenas se ele for required.
                    case ComplementType.single:
                        min = (complement.required ? 1 : 0)
                        break
                    // Tipo multiple e quantity tem que o mínimo escolhido diretamente.
                    case ComplementType.multiple:
                    case ComplementType.quantity:
                        min = complement.min
                        break
                    default:
                        throw Error("Tipo de complemento inválido")
                }
                // Se não possui opções obrigatórias
                if (min == 0) return

                // Cria uma cópia das opções do complemento para poder editar o array
                let options: ComplementOption[] = JSON.parse(JSON.stringify(complement.options))
                // Ordenar as opções pelo preçoƒ
                options = options.sort((a: ComplementOption, b: ComplementOption) => {
                    return a.price - b.price
                })
                switch (complement.type) {
                    case ComplementType.single:
                    case ComplementType.quantity:
                        // Preço do complemento e multiplica pela quantidade mínima necessária
                        minimumPriceComplement = options[0].price * min
                        break
                    case ComplementType.multiple:
                        // Com a quantidade mínima necessária, soma os min primeiros elementos do array
                        // que está ordenado por preço
                        minimumPriceComplement = options.slice(0, min)
                            .map((a) => a.price)
                            .reduce((a, b) => a + b, 0)
                        break
                    default:
                        throw Error("Tipo de complemento inválido")
                }
            }

            p.minimumPrice += minimumPriceComplement;
        });
        return p;
    }
}

/**
 * Um complemento de algum produto.
 * Pode ser de 3 tipos:
 * 1. Escolher apenas uma opção
 * 2. Escolhar várias opções
 * 3. Escolhar uma quantidade para cada opção(podendo essa quantidade ser 0 ou maior)
 */
export interface Complement {
    // Persistentes no Firebase
    title?: string;
    required?: boolean;
    type?: ComplementType;
    min?: number; //qtd mínima (somente para type quantity)
    max?: number; //qtd máxima (somente para type quantity)
    options?: ComplementOption[]; //se selecionada terá quantity > 0, senão quantity == 0
    resume?: string[];
}

/**
 * Tipos do complemento
 * Pode ser de 3 tipos:
 * 1. single = Escolher apenas uma opção
 * 2. multiple = Escolhar várias opções
 * 3. quantity = Escolhar uma quantidade para cada opção(podendo essa quantidade ser 0 ou maior)
 */
export enum ComplementType {
    single = "single",
    multiple = "multiple",
    quantity = "quantity"
}

/**
 * Uma opção do complemento.
 */
export interface ComplementOption {
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    active?: boolean;
    isChecked?: boolean;
}
