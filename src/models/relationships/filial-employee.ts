import { CollectionRelationship, RelationshipType } from "../../modules/firestore/collection-relationship"
import { Filial } from "../filial"
import { User } from "../user"

/**
 * Relacionamento que define os funcionários de uma filial (1N)
 * Cada funcionário pertence a somente uma filial
 * Cada filial possui 1 ou mais funcionários
 */
export class FilialEmployee<T> extends CollectionRelationship<T, {}> {

    public get collection1() {
        return {
            collection: Filial,
            name: 'filial_employee',
            required: false
        }
    }

    public get collection2() {
        return {
            collection: User,
            name: 'user_employees',
            required: false
        }
    }

    public type = RelationshipType.OneToMany
    public bidirectional = true

}