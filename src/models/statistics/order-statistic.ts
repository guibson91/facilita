import { firestore } from "firebase"
import "firebase/firestore";
import { fromQuerySnapshot, fromDocumentSnapshot } from "../../modules/firestore/utils"
import { Observable, Subject } from "rxjs"
import { map } from "rxjs/operators"


// "range-statistics/{filial_id}/order-statistics"
// "range-statistics/{filial_id}/order-statistics/2018"         - type="year"
// "range-statistics/{filial_id}/order-statistics/2018-10"      - type="month"
// "range-statistics/{filial_id}/order-statistics/2018-10-30"   - type="day"
export class OrderStatistics {
    /**
     * Identificador.
     * Se estatística de ano deve ser um ano: 2018, 2019...
     * Se estatística de mês um mês: 2018-01, 2018-02, ..., 2018-10, 2018-11
     * Se estatística de dia um dia: 2018-01-01, 2018-01-02, ..., 2018-01-30, 2018-01-31
     */
    id?: string

    /**
     * Coloca o nome do id
     * Se estatística de ano deve ser um ano: 2018, 2019...
     * Se estatística de mês um mês: Janeiro, Fevereiro, Março, ..., Novembro, Dezembro
     * Se estatística de dia um dia: 1, 2, ..., 30, 31
     */
    id_name?: string

    /**
     * Qual range a atual satistica se refere
     */
    type?: "year" | "month" | "day"

    done?: {
        quantity: number,
        delivery: number //taxa de entrega
        subtotal: number //soma dos itens comprandos com dinheiro
        discounts: number
        discountsFromTeam: number
        //total: number //delivery + subtotal (o que o consumidor efetivamente deve pagar a empresa)
    }

    refused?: {
        quantity: number,
        delivery: number //taxa de entrega
        subtotal: number //soma dos itens comprandos com dinheiro
        discounts: number
        discountsFromTeam: number
        //total: number //delivery + subtotal (o que o consumidor efetivamente deve pagar a empresa)
    }

    incomplete?: {
        quantity: number,
        delivery: number //taxa de entrega
        subtotal: number //soma dos itens comprandos com dinheiro
        discounts: number
        discountsFromTeam: number
        //total: number //delivery + subtotal (o que o consumidor efetivamente deve pagar a empresa)
    }

    duration_accepted_to_done?: number // Duração que um pedido leva desde que foi criado até ser concluído em segundos

    // Quantidade de pedidos criados em cada horário (contabilizados na hora do aceito)
    // indo de 0 a 23 (getHours do date: new Date().getHours())
    // Exemplo: 5 pedidos as 8h hours["8"] == 5
    hours?: {
        [key: string]: number
    }
    /**
     * Cria uma estatística com as informações de duas outras estatísticas somadas
     * @param a estatística
     * @param b estatística (pode ser undefined)
     */
    public static join(a: OrderStatistics, b: OrderStatistics): OrderStatistics {
        const orderStatistics: OrderStatistics = {
            id: (a && a.id ? a.id : b.id),
            type: (a && a.type ? a.type : b.type),
            done: {
                quantity: 0 +
                    (a && a.done && a.done.quantity ? a.done.quantity : 0) +
                    (b && b.done && b.done.quantity ? b.done.quantity : 0),
                delivery: 0 +
                    (a && a.done && a.done.delivery ? a.done.delivery : 0) +
                    (b && b.done && b.done.delivery ? b.done.delivery : 0),
                subtotal: 0 +
                    (a && a.done && a.done.subtotal ? a.done.subtotal : 0) +
                    (b && b.done && b.done.subtotal ? b.done.subtotal : 0),
                discounts: 0 +
                    (a && a.done && a.done.discounts ? a.done.discounts : 0) +
                    (b && b.done && b.done.discounts ? b.done.discounts : 0),
                discountsFromTeam: 0 +
                    (a && a.done && a.done.discountsFromTeam ? a.done.discountsFromTeam : 0) +
                    (b && b.done && b.done.discountsFromTeam ? b.done.discountsFromTeam : 0),
            },

            refused: {
                quantity: 0 +
                    (a && a.refused && a.refused.quantity ? a.refused.quantity : 0) +
                    (b && b.refused && b.refused.quantity ? b.refused.quantity : 0),
                delivery: 0 +
                    (a && a.refused && a.refused.delivery ? a.refused.delivery : 0) +
                    (b && b.refused && b.refused.delivery ? b.refused.delivery : 0),
                subtotal: 0 +
                    (a && a.refused && a.refused.subtotal ? a.refused.subtotal : 0) +
                    (b && b.refused && b.refused.subtotal ? b.refused.subtotal : 0),
                discounts: 0 +
                    (a && a.refused && a.refused.discounts ? a.refused.discounts : 0) +
                    (b && b.refused && b.refused.discounts ? b.refused.discounts : 0),
                discountsFromTeam: 0 +
                    (a && a.refused && a.refused.discountsFromTeam ? a.refused.discountsFromTeam : 0) +
                    (b && b.refused && b.refused.discountsFromTeam ? b.refused.discountsFromTeam : 0),
            },

            incomplete: {
                quantity: 0 +
                    (a && a.incomplete && a.incomplete.quantity ? a.incomplete.quantity : 0) +
                    (b && b.incomplete && b.incomplete.quantity ? b.incomplete.quantity : 0),
                delivery: 0 +
                    (a && a.incomplete && a.incomplete.delivery ? a.incomplete.delivery : 0) +
                    (b && b.incomplete && b.incomplete.delivery ? b.incomplete.delivery : 0),
                subtotal: 0 +
                    (a && a.incomplete && a.incomplete.subtotal ? a.incomplete.subtotal : 0) +
                    (b && b.incomplete && b.incomplete.subtotal ? b.incomplete.subtotal : 0),
                discounts: 0 +
                    (a && a.incomplete && a.incomplete.discounts ? a.incomplete.discounts : 0) +
                    (b && b.incomplete && b.incomplete.discounts ? b.incomplete.discounts : 0),
                discountsFromTeam: 0 +
                    (a && a.incomplete && a.incomplete.discountsFromTeam ? a.incomplete.discountsFromTeam : 0) +
                    (b && b.incomplete && b.incomplete.discountsFromTeam ? b.incomplete.discountsFromTeam : 0),
            },

            duration_accepted_to_done: 0 +
                (a && a.duration_accepted_to_done || 0) +
                (b && b.duration_accepted_to_done || 0),


            hours: {}
        }
        if (a && a.hours) {
            for (let hour in a.hours) {
                orderStatistics.hours[hour] = (orderStatistics.hours[hour] ? orderStatistics.hours[hour] : 0) + a.hours[hour]
            }
        }
        if (b && b.hours) {
            for (let hour in b.hours) {
                orderStatistics.hours[hour] = (orderStatistics.hours[hour] ? orderStatistics.hours[hour] : 0) + b.hours[hour]
            }
        }
        return orderStatistics
    }

    /**
     * Retorna as estatísticas de determinado ano de uma empresa
     * @param filial_id filial no qual será feito a consulta
     * @param year Número refente ao ano. Usado a biblioteca date. new Date().getFullYear(). Exemplo: 2018, 2019, ...
     */
    public static getYear(filial_id: string): Observable<OrderStatistics[]> {
        let query: firestore.Query = firestore()
            .collection("filials")
            .doc(filial_id)
            .collection("range-statistics")
            .where('type', '==', 'year')

        let obs: Subject<any> = new Subject()
        query.onSnapshot(obs)
        return obs.pipe(map(fromQuerySnapshot))
    }

    /**
     * Retorna as estatísticas de determinado ano de uma empresa
     * @param filial_id filial no qual será feito a consulta
     * @param date Número refente ao ano. Usado a bibloteca date. new Date().getFullYear(). Exemplo: 2018, 2019, ...
     */
    public static getMonths(filial_id: string): Observable<OrderStatistics[]> {
        let query: firestore.Query = firestore()
            .collection("filials")
            .doc(filial_id)
            .collection("range-statistics")
            .where('type', '==', 'month')

        let obs: Subject<any> = new Subject()
        query.onSnapshot(obs)
        return obs.pipe(map(fromQuerySnapshot))
    }

    /**
     * Retorna as estatísticas dos dias de um determinado mês da empresa
     * @param filial_id filial no qual será feito a consulta
     * @param date Data referente ao mês
     */
    public static getDays(filial_id: string, date: Date): Observable<OrderStatistics[]> {
        let begin = date.toISOString().substr(0, 7)
        let end_date = new Date()
        end_date.setMonth(end_date.getMonth() + 1)
        let end = end_date.toISOString().substr(0, 7)
        let reference: firestore.Query = firestore()
            .collection("filials")
            .doc(filial_id)
            .collection("range-statistics")
            .where('type', '==', 'day')
            .where(firestore.FieldPath.documentId(), '>=', begin)
            .where(firestore.FieldPath.documentId(), '<=', end)
        console.log(filial_id, "range-statistics", begin, end)

        let obs: Subject<any> = new Subject()
        reference.onSnapshot(obs)
        return obs.pipe(map(fromQuerySnapshot))
    }

    /**
     * Retorna as estatísticas de determinado ano de uma empresa
     * @param filial_id filial no qual será feito a consulta
     * @param date Data do dia
     */
    public static getDay(filial_id: string, date: Date): Observable<OrderStatistics> {
        let reference: firestore.DocumentReference = firestore()
            .collection("filials")
            .doc(filial_id)
            .collection("range-statistics")
            .doc(date.toISOString().substr(0, 10))

        let obs: Subject<any> = new Subject()
        reference.onSnapshot(obs)
        return obs.pipe(map(fromDocumentSnapshot))
    }
}