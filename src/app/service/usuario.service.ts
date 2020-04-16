import { AppConstants } from './../app-constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  /*Puxa a lista de usuarios*/
  getUsuarioList(): Observable<any> {

    return this.http.get<any>(AppConstants.baseUrl);
  }

  deletarUsuario(id: number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }

  buscaNome(nome: string): Observable<any> {

    return this.http.get(AppConstants.baseUrl + 'buscaNome/' + nome);
  }
}
