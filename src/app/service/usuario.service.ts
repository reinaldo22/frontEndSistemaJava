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
  /*Deleta usuario pelo id*/
  deletarUsuario(id: number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }
  /*Busca usuario pelo nome*/
  buscaNome(nome: string): Observable<any> {

    return this.http.get(AppConstants.baseUrl + 'buscaNome/' + nome);
  }
  /*Busca usuario pelo id*/
  buscaPorId(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }
  salvarUsuario(user): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, user);
  }
  UpdateUsuario(user): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, user);
  }
}
