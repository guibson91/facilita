import { Location } from '../../models/utils/location';
import { Injectable } from '@angular/core';
import { STATES, isFunction, elementIsInsideArray } from '../util/util';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SharedService } from './shared.service';
import { User } from '../../models/user';
import { Observable, of, from } from 'rxjs';
import { map, flatMap, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  api_key: string = 'AIzaSyAeqZ9FNMotxy5XObStKYuhXApi7Je305g';

  stateSelected: any;
  fullPlaces: any;
  placesByState: any = [];
  placesByCity: any = [];

  states: {
    value: string,
    title: string
  }[] = STATES;

  cities: {
    value: string, // cidade (Estado)
    title: string
  }[] = [];

  districts: {
    value: string,
    title: string,
    fullName: string
  }[] = [];

  constructor(public http: HttpClient,
    private geolocation: Geolocation,
    private shared: SharedService) {
  }

  getAddressByCoords(lat: string, long: string): Observable<any> {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${this.api_key}`);
  }

  /**
   * Muda apenas a rua, complemento e referencias
   * @param location Nova localização
   */
  editCurrentLocation(location: Location) {
    return this.shared.user$.pipe(first()).pipe(flatMap((user: User) => {
      if (!user) {
        return of(null);
      }
      user.location = location;
      return User.update(user.id, user)
    }));
  }

  saveLocationHistory(location: Location): Observable<any> {
    return this.shared.user$.pipe(first()).pipe(flatMap((user: User) => {
      if (!user) {
        return of(null);
      }
      if (!user.locations_history) {
        user.locations_history = []
      }
      if (user.location) {
        user.locations_history.push(user.location);
      }
      user.location = location;
      return User.update(user.id, user)
    }));
  }

  /**
   * Transformar uma localização do Google em objeto Location
   * @param place Objeto place provido pelo Google (padrão de toda API do Google Maps)
   */
  placeToLocation(place: any): Location {

    let location: Location = {
      isGps: true
    };

    //Obter latitude e longitude
    if (place.geometry) {
      if (isFunction(place.geometry.location.lat)) {
        location.latitude = place.geometry.location.lat();
        location.longitude = place.geometry.location.lng();
      }
      else {
        location.latitude = place.geometry.location.lat;
        location.longitude = place.geometry.location.lng;
      }
    }

    for (let j = 0; j < place.address_components.length; j++) {

      //Obter número
      if (elementIsInsideArray('street_number', place.address_components[j].types)) {
        location.number = place.address_components[j].long_name;
      }
      //Obter rua
      if (elementIsInsideArray('route', place.address_components[j].types)) {
        location.street = place.address_components[j].long_name;
      }
      //Obter bairro
      if (elementIsInsideArray('sublocality', place.address_components[j].types) && elementIsInsideArray('political', place.address_components[j].types)) {
        location.district = place.address_components[j].short_name;
      }
      //Obter cidade
      else if (elementIsInsideArray('administrative_area_level_2', place.address_components[j].types) && elementIsInsideArray('political', place.address_components[j].types)) {
        location.city = place.address_components[j].short_name;
      }
      //Obter estado
      else if (elementIsInsideArray('administrative_area_level_1', place.address_components[j].types) && elementIsInsideArray('political', place.address_components[j].types)) {
        location.state = place.address_components[j].long_name;
        location.state_short = place.address_components[j].short_name;
      }
      //Obter país
      else if (elementIsInsideArray('country', place.address_components[j].types)) {
        location.country = place.address_components[j].long_name;
        location.country_short = place.address_components[j].short_name;
      }
      //Obter CEP
      else if (elementIsInsideArray('postal_code', place.address_components[j].types)) {
        location.cep = place.address_components[j].long_name;
      }

    }
    return location;

  }

  getCurrentLocation(): Observable<Location> {
    return from(this.geolocation.getCurrentPosition({
      timeout: 7000
    })).pipe(first()).pipe(flatMap((res: any) => {
      let lat = res.coords.latitude.toString();
      let long = res.coords.longitude.toString();
      return this.getAddressByCoords(lat, long).pipe(first()).pipe(map(res => {
        return this.placeToLocation(res.results[0]);
      }))
    }))
  }

  selectState(stateSelected: string) {
    var stateValue = `(${stateSelected})`; //Ex: (CE)
    var citiesFound = []; //Auxiliar para não repetir cidades a cada bairro encontrado
    this.cities = []; //Todas cidades de um determinado estado
    this.fullPlaces.forEach(place => {
      var fullNamePlace: string = place.properties.Field2;
      var index = fullNamePlace.search(stateValue);
      //O lugar pertence ao estado selecionado
      if (index >= 0) {
        this.placesByState.push(place);
        let cityValue: string = fullNamePlace.split('-')[1].trim();
        let cityName: string = cityValue.split('(')[0].trim();
        if (!elementIsInsideArray(cityName, citiesFound)) {
          this.cities.push({
            title: cityName,
            value: cityValue
          });
          citiesFound.push(cityName);
        }
      }
    });
  }

  selectCity(citySelected: string) {
    let city = citySelected; // Ex: Fortaleza (CE)
    this.districts = [];
    this.placesByCity = [];
    this.placesByState.forEach(place => {
      var fullNamePlace: string = place.properties.Field2;
      var index = fullNamePlace.indexOf(city);
      //Bairro encontrado referente a cidade e estado selecionado
      if (index >= 0) {
        this.placesByCity.push(place);
        let districtName = fullNamePlace.split('-')[0].trim();
        this.districts.push({
          value: place.properties.Field1,
          title: districtName,
          fullName: fullNamePlace
        });
      }
    });
  }

  // getLocation(): Observable<Location> {
  //   var location: Location = {};
  //   return Observable.fromPromise(this.geolocation.getCurrentPosition()).flatMap((res) => {
  //     let lat = res.coords.latitude.toString();
  //     let long = res.coords.longitude.toString();
  //     console.log("Latitude: ", res.coords.latitude);
  //     console.log("Longitude: ", res.coords.longitude);
  //     return this.getAddressByCoords(lat, long).map(res => {

  //       let places = res.results;
  //       let stop = false;
  //       console.log("Places: ", places);

  //       for (let i = 0; i < places.length; i++) {

  //         //Encontrado o componente a nível do bairro
  //         if (elementIsInsideArray('sublocality', places[i].types) && elementIsInsideArray('political', places[i].types)) {
  //           stop = true;
  //           let place = places[i];
  //           console.log("Esse é local correto");
  //           console.log(place);

  //           for (let j = 0; j < place.address_components.length; j++) {

  //             //Obter bairro da geolocalização do usuário
  //             if (elementIsInsideArray('sublocality', place.address_components[j].types) && elementIsInsideArray('political', place.address_components[j].types)) {
  //               console.log("Bairro: ", place.address_components[j].short_name);
  //               location.district = place.address_components[j].short_name;
  //             }
  //             //Obter cidade da geolocalização do usuário
  //             else if (elementIsInsideArray('locality', place.address_components[j].types) && elementIsInsideArray('political', place.address_components[j].types)) {
  //               console.log("Cidade: ", place.address_components[j].short_name);
  //               location.city = place.address_components[j].short_name;
  //             }
  //             //Obter estado da geolocalização do usuário
  //             else if (elementIsInsideArray('administrative_area_level_1', place.address_components[j].types) && elementIsInsideArray('political', place.address_components[j].types)) {
  //               console.log("Estado: ", place.address_components[j].short_name);
  //               location.state = place.address_components[j].long_name;
  //               location.state_short = place.address_components[j].short_name;
  //             }
  //             //Obter país da geolocalização do usuário
  //             else if (elementIsInsideArray('country', place.address_components[j].types) && elementIsInsideArray('political', place.address_components[j].types)) {
  //               console.log("País: ", place.address_components[j].short_name);
  //               location.country = place.address_components[j].long_name;
  //               location.country_short = place.address_components[j].short_name;
  //             }

  //           }

  //         }
  //         if (stop) break;
  //       }
  //       location.isGps = true
  //       return location;
  //     })
  //   })
  // }

  changeLocationCurrent(location: Location): Observable<void> {
    let user: User = this.shared.user;

    if (!user.locations_history) {
      user.locations_history = []
    }
    if (user.location) {
      user.locations_history.unshift(this.shared.user.location);
    }

    user.location = location;

    // Remove localização do array
    let index = this.shared.user.locations_history.indexOf(location)
    if (index > -1) {
      this.shared.user.locations_history.splice(index, 1);
    }

    return User.update(this.shared.user.id, {
      location: location,
      locations_history: this.shared.user.locations_history
    })
  }

}