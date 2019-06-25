import { Collection } from '../modules/firestore/collection';
import { firestore } from "firebase"
import "firebase/firestore";
import { User } from './user';

export class Log extends Collection {

    // Propriedades da entidade.
    static path = "logs"

    // Dados persistentes no banco de dados
    description?: string
    origin?: string
    description_error?: string
    title?: string
    date?: firestore.Timestamp | firestore.FieldValue
    user?: User

}



export const LogOriginTypes = {
    ADDRESS_NOT_FOUND: "address_not_found",
    CITY_NOT_FOUND: "city_not_found",
    DISTRICT_NOT_FOUND: "district_not_found",
    COMPANY_SUGGESTION: "company_suggestion"
}