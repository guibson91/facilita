import { FormGroup } from '@angular/forms';
import { Location } from '../../models/utils/location';
import { ReplaySubject } from 'rxjs';

/**
 * Gera uma string aleatória com caracteres alfanuméricos maiúsculos e minúsculos
 * @param tam quantidade de caracteres da string que se deseja gerar
 */
export function makeRandomString(tam: number): string {

	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < tam; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}

/**
 * Gera uma string aleatória com caracteres alfanuméricos maiúsculos
 * @param tam quantidade de caracteres da string que se deseja gerar
 */
export function makeRandomAlfaNumber(tam: number): string {

	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	for (var i = 0; i < tam; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}

/**
 * Verifica se um objeto está sem atributos
 * @param obj objeto
 */
export function isObjectEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}


/**
 * Gera uma string aleatória com caracteres numéricos
 * @param tam quantidade de caracteres da string que se deseja gerar
 */
export function makeRandomNumber(tam: number): string {

	var text = "";
	var possible = "0123456789";

	for (var i = 0; i < tam; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}

/**
 * Gera uma string com caracteres alfanuméricos a partir do tempo em milisegundos
 * A ordem alfabética das strings geradas com essa função também mantém ordem cronológica.
 */
export function makeCronologicalString(): string {

	var text = "";
	var possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var time = (new Date()).getTime();
	for (let i = time % 62; time > 0; time = (time - i) / 62, i = time % 62) {
		text = possible.charAt(i) + text;
	}
	for (let i = 0; i < 3; i++) {
		text += possible.charAt(Math.floor(Math.random() * 62));
	}

	return text;
}

/**
 * Verifica se um determinado elemento está contido em um array
 * @param element elemento qualquer
 * @param array coleção de elementos qualquer
 */
export function elementIsInsideArray(element: any, array: any[]): boolean {
	if (array.indexOf(element) >= 0) {
		return true;
	}
	return false;
}


/**
 * Diz se um determinado valor é objeto.
 * @param val Valor que pode ser primitivo ou objeto
 * @author Guibson Martins
 */
export function isObject(val) {
	return val instanceof Object;
}

/**
 * Cria uma cópia de um objeto.
 * @param obj objeto
 */
export function copyObject(obj) {
	return JSON.parse(JSON.stringify(obj));
}

/**
 * Constrói um objeto saudável sem atributos undefined em nenhum nível.
 * Para evitar erros de inserção no Firebase.
 * @param obj Objeto com possibilidade de atributos undefined
 * @author Guibson Martins
 */
export function cleanObject(obj) {
	Object.keys(obj).forEach(key =>
		(obj[key] && typeof obj[key] === 'object') && cleanObject(obj[key]) ||
		(obj[key] === undefined) && delete obj[key]
	);
	return obj;
}

/**
 * Verifica se o email está em formato válido
 * @param email
 */
export function validateEmail(email: string) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

/**
 * Cria uma string de endereço devidamente formatada para ser usada no DistanceMatrixService
 */
export function locationToString(location: Location): string {
	var res: string = "";
	res += location.street + ", ";
	res += location.number + " - ";
	res += location.district + ", ";
	res += location.city + " - ";
	res += location.state + ", ";
	res += location.cep + ", ";
	res += location.country;
	return res;
}

declare var google;

/**
 * Atribui para o formulario valores de longitude e latitude a partir do endereço
 * retorna false caso não tenha conseguido adquirir lat e lng
 */
export function setLongitudeLatitude(form: FormGroup): ReplaySubject<any> {
	let sub = new ReplaySubject(1);
	let search: string = locationToString({
		street: form.value.location.street,
		number: form.value.location.number,
		district: form.value.location.district,
		city: form.value.location.city,
		state: form.value.location.state,
		state_short: form.value.location.state_short,
		cep: form.value.location.cep,
		country: form.value.location.country
	});
	console.log("Latitude longitude");
	(new google.maps.Geocoder()).geocode(
		{ address: search },
		(results, status) => {
			console.log("Uma resposta", results, status)
			if (status == 'OK') {
				var lat = results[0].geometry.location.lat();
				var lng = results[0].geometry.location.lng();
				form.patchValue({
					location: {
						latitude: lat,
						longitude: lng
					}
				});
				sub.next({});
			} else {
				sub.error(new Error('Erro ao carregar o endereço' + status));
			}
		}
	);
	return sub;
}

/**
 * Máscaras para serem usadas com o angular2-text-mask
 */
export const maskDate: (RegExp | string)[] = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
export const maskCPF: (RegExp | string)[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
export const maskHour: (RegExp | string)[] = [/\d/, /\d/, ':', /\d/, /\d/];
export const cepMask: (RegExp | string)[] = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

/**
 * Dias da semana
 */

export const WEEK_ENGLISH: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const WEEK_PORTUGUESE: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
export const WEEK_SPANISH: string[] = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

/**
 * Tradução de UF para o nome do estado. De acordo com a API do viacep.
 */
export const translateUf = {
	"AC": "Acre",
	"AL": "Alagoas",
	"AM": "Amazonas",
	"AP": "Amapá",
	"BA": "Bahia",
	"CE": "Ceará",
	"DF": "Distrito Federal",
	"ES": "Espírito Santo",
	"GO": "Goiás",
	"MA": "Maranhão",
	"MG": "Minas Gerais",
	"MS": "Mato Grosso do Sul",
	"MT": "Mato Grosso",
	"PA": "Pará",
	"PB": "Paraíba",
	"PE": "Pernambuco",
	"PI": "Piauí",
	"PR": "Paraná",
	"RJ": "Rio de Janeiro",
	"RN": "Rio Grande do Norte",
	"RO": "Rondônia",
	"RR": "Roraima",
	"RS": "Rio Grande do Sul",
	"SC": "Santa Catarina",
	"SE": "Sergipe",
	"SP": "São Paulo",
	"TO": "Tocantins"
}

export const STATES = [
	{
		value: 'AC',
		title: 'Acre'
	},
	{
		value: 'AL',
		title: 'Alagoas'
	},
	{
		value: 'AM',
		title: 'Amazonas'
	},
	{
		value: 'AP',
		title: 'Amapá'
	},
	{
		value: 'BA',
		title: 'Bahia'
	},
	{
		value: 'CE',
		title: 'Ceará'
	},
	{
		value: 'DF',
		title: 'Distrito Federal'
	},
	{
		value: 'ES',
		title: 'Espírito Santo'
	},
	{
		value: 'GO',
		title: 'Goiás'
	},
	{
		value: 'MA',
		title: 'Maranhão'
	},
	{
		value: 'MG',
		title: 'Minas Gerais'
	},
	{
		value: 'MS',
		title: 'Mato Grosso do Sul'
	},
	{
		value: 'MT',
		title: 'Mato Grosso'
	},
	{
		value: 'PA',
		title: 'Pará'
	},
	{
		value: 'PB',
		title: 'Paraíba'
	},
	{
		value: 'PE',
		title: 'Pernambuco'
	},
	{
		value: 'PI',
		title: 'Piauí'
	},
	{
		value: 'PR',
		title: 'Paraná'
	},
	{
		value: 'RJ',
		title: 'Rio de Janeiro'
	},
	{
		value: 'RN',
		title: 'Rio Grande do Norte'
	},
	{
		value: 'RO',
		title: 'Rondônia'
	},
	{
		value: 'RR',
		title: 'Roraima'
	},
	{
		value: 'RS',
		title: 'Rio Grande do Sul'
	},
	{
		value: 'SC',
		title: 'Santa Catarina'
	},
	{
		value: 'SE',
		title: 'Sergipe'
	},
	{
		value: 'SP',
		title: 'São Paulo'
	},
	{
		value: 'TO',
		title: 'Tocantins'
	}
]



/**
 * Obter distância entre dois pontos (lat, long) x (lat, long)
 * @param start ponto inicial (lat, lng)
 * @param end ponto final (lat, lng)
 * @return distância em km
 */
export function getDistanceBetweenPoints(start: { lat, lng }, end: { lat, lng }): number {

	let earthRadius = {
		miles: 3958.8,
		km: 6371
	};

	let R = earthRadius['km'];
	let lat1 = Number(start.lat);
	let lon1 = Number(start.lng);
	let lat2 = Number(end.lat);
	let lon2 = Number(end.lng);

	let dLat = toRad((lat2 - lat1));
	let dLon = toRad((lon2 - lon1));
	let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
		Math.sin(dLon / 2) *
		Math.sin(dLon / 2);
	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	let d = R * c;

	return d;

}

//Converter graus em radianos
function toRad(x: number): number {
	return x * Math.PI / 180;
}

/**
 * Verifica se um determinado valor é uma FUNCTION
 * @param functionToCheck valor a ser verificado
 */
export function isFunction(functionToCheck): boolean {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}