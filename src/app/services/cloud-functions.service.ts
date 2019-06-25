import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { BASE_URL } from '../../main';
import { NanoTranslateService } from './nano-translate.service';

@Injectable({
  providedIn: 'root'
})
export class CloudFunctionsService {

  // URL base das functions do firebase
  base_url: string = BASE_URL;

  constructor(public http: HttpClient, public translate: NanoTranslateService) { }

  /**
   * Chama uma function que edita a senha de um usuário.
   * @param token Token do usuário que está efetuando a mudança
   * @param id_user Id do usuário que está sendo editado
   * @param password Nova senha do usuário.
   */
  changePasswordUser(token: string, id_user: string, email: string, password: string): Observable<any> {
    let url = this.base_url + 'changePasswordUser'

    let request = new HttpRequest('POST', url, {
      id_user: id_user,
      email: email,
      password: password
    }, {
        reportProgress: true,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }),
        responseType: 'text'
      })
    console.log("Tentando o request");
    return this.http.request(request)
      .pipe(filter((response: HttpEvent<any>) => response.type === HttpEventType.Response))
      .pipe(catchError((err: HttpErrorResponse) => {
        let error = JSON.parse(err.error)
        console.log("erro no request?")
        throw this.translate.authError(error.code)
      }))
  }

  /**
   * Recebe a hora atual do servidor
   */
  time(): Observable<Date> {
    return this.http.get(this.base_url + 'time')
      .pipe(map((data: any) => new Date(data)))
  }

}
