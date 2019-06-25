import { Collection } from '../modules/firestore/collection';
import "firebase/firestore";
import { RelationshipField } from '../modules/firestore/collection-relationship';
import { CompanyInvoices } from './relationships/company-invoice';
import { Company } from './company';
import { FilialInvoices } from './relationships/filial-invoice';

export class Invoice extends Collection {

    public static get company() {
        return new CompanyInvoices<Company>(Invoice)
    }

    public static get filial() {
        return new FilialInvoices<Company>(Invoice)
    }

    // Propriedades da entidade.
    static path = "invoices"

    // Dados persistentes no banco de dados
    month: string // 2018-01, 2018-02 ...

    sales: number // Quantidade vendida

    days: number // Porcentagem dos dias do mês (DIAS USADOS)/(DIAS DO MÊS)

    fee: number // Porcentagem do valor das vendas a ser pago para o facilita.

    monthly_payment: number // Mensalidade

    total: number // Valor a ser pago máximo entre sales*fee e monthly_payment*days

    company?: RelationshipField
    filial?: RelationshipField
}