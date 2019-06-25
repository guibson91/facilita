import { firestore } from "firebase"

/**
 * Define a localização de um lugar qualquer
 */
export interface Location {
    //Avenida ou Rua
    street?: string,
    //Número do estabelecimento ou residência
    number?: string,
    //Complemento
    complement?: string,
    //CEP
    cep?: string,
    //Latitude
    latitude?: number,
    //Longitude
    longitude?: number,
    //Bairro
    district?: string,
    //Cidade
    city?: string,
    //Estado
    state?: string, //Ex: Ceará
    state_short?: string, //Ex: CE
    //País
    country?: string, //Ex: Brasil
    country_short?: string, //Ex: BR
    //Ponto de referência
    landmark?: string
    // Verificar se a localização é por meio de gps
    isGps?: boolean,
    // Ponto de tipo específico do Firestore
    geopoint?: firestore.GeoPoint
}


/**
 * Define quais os elementos da Interface Location que são
 * visíveis no formulário
 */
export interface VisibleLocation {
    //Avenida ou Rua
    street?: boolean,
    //Número do estabelecimento ou residência
    number?: boolean,
    //Complemento
    complement?: boolean,
    //CEP
    cep?: boolean,
    //Latitude
    latitude?: boolean,
    //Longitude
    longitude?: boolean,
    //Bairro
    district?: boolean,
    //Cidade
    city?: boolean,
    //Estado
    state?: boolean,
    //País
    country?: boolean,
}

// API  dos  correios retorna (exemplo 60020060)
// "cep": "60020-060",
// "logradouro": "Rua Marechal Deodoro",
// "complemento": "at\u00e9 863/864",
// "bairro": "Benfica",
// "localidade": "Fortaleza",
// "uf": "CE",
// "unidade": "",
// "ibge": "2304400",
// "gia": ""