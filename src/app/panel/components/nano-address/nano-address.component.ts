import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { elementIsInsideArray } from '../../../../modules/firestore/utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nano-address',
  templateUrl: './nano-address.component.html',
  styleUrls: ['./nano-address.component.scss']
})
export class NanoAddressComponent {

  /**
   * Instância do formulário para efetuar as alterações
   * do escopo de endereço
   */
  @Input() form: FormGroup;

  /**
   * Strings que representam os campos da Interface Location
   * que serão visíveis no formulário
   */
  @Input() fields: string[];

  /**
   * Define por padrão todos os campos do Location visíveis no formulário
   */
  input_show: VisibleLocation = {
    street: true,
    number: true,
    complement: true,
    cep: true,
    //latitude: true,
    //longitude: true,
    district: true,
    city: true,
    state: true,
    country: true,
  }

  /**
   * variavel auxiliar para guardar o cep anterior e evitar comportamentos 
   * indesejados na view e recalculos desnecessarios.
   */
  previousCep: string;

  constructor(public http: HttpClient) { }

  /**
   * Inicializando quais campos serão mostrados.
   */
  ngAfterContentInit() {
    this.previousCep = this.form.value.cep;
    //Se instanciado o campo fields como input do component,
    //mostrar apenas os campos expressos
    if (this.fields) {
      this.input_show.country = elementIsInsideArray('country', this.fields);
      this.input_show.state = elementIsInsideArray('state', this.fields);
      this.input_show.city = elementIsInsideArray('city', this.fields);
      this.input_show.street = elementIsInsideArray('street', this.fields);
      this.input_show.cep = elementIsInsideArray('cep', this.fields);
      this.input_show.latitude = elementIsInsideArray('latitude', this.fields);
      this.input_show.longitude = elementIsInsideArray('longitude', this.fields);
    }
  }

  /**
   * Verificar o CEP digitado e requisitar  preenchimento
   * de cidade e estado da API dos correios
   * @param e conteúdo digita no campo de CEP
   */
  handleCepChange(e) {
    let cep: string = e.target.value;
    // substitui tudo que não for digito por ''
    cep = cep.replace(/[^0-9]/g, '');
    while (cep.length > 8) cep = cep.slice(0, 8);
    e.target.value = cep;
    if (cep != this.previousCep && cep.length === 8) {
      this.previousCep = cep;
      // https://viacep.com.br/
      this.http.get(`https://viacep.com.br/ws/${cep}/json/unicode/`).subscribe((data: any) => {
        this.form.patchValue({
          country: data.erro ? '' : "Brasil",
          state: data.uf ? data.uf : '',
          city: data.localidade ? data.localidade : '',
          district: data.bairro ? data.bairro : '',
          street: data.logradouro ? data.logradouro : '',
          number: '',
          complement: ''
        });
      })
    }
  }

}

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
  isGps?: boolean
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