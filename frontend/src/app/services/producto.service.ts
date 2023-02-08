// AQUI ES DONDE SE HACE LA CONEXION EL BACKEND, ESPECIFICAMENTE PARA EL ENDPOINT "Producto"

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  
  private serverUrl: string;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // URL del servidor backend
    this.serverUrl = 'http://localhost:3000/';
    this.apiUrl = 'api/productos/'
   }

   getListProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.serverUrl + this.apiUrl)
   }


}
