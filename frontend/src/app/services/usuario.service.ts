import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private serverUrl: string;
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.serverUrl = environment.serverURL;
    this.apiUrl = 'api/usuarios'
  }

  signUp(usuario: Usuario): Observable<any> {
    return this.http.post(this.serverUrl + this.apiUrl, usuario);

  }

  login(usuario: Usuario): Observable<string> {
    return this.http.post<string>(this.serverUrl + this.apiUrl + '/login', usuario);
  }

  getListUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.serverUrl + this.apiUrl);
  }

}
