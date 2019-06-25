import { Collection } from '../modules/firestore/collection';
import { firestore } from "firebase"
import "firebase/firestore";

export class Blacklist extends Collection {

    // Propriedades da entidade.
    static path = "blacklist"

    // Dados persistentes no banco de dados
    user_id?: string
    date?: firestore.Timestamp
    comments?: string
    reason?: string
    push_notification?: {
        userId: string,
        pushToken: string
    }
}