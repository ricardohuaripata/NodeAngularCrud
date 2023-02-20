// AQUI ES DONDE SE HACE LA CONEXION EL BACKEND, ESPECIFICAMENTE PARA EL ENDPOINT "Producto"

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ProductoService {
  private serverUrl: string;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // URL del servidor backend
    this.serverUrl = 'http://localhost:3000/';
    this.apiUrl = 'api/productos/';
  }

  getListProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.serverUrl + this.apiUrl);
  }

  deleteProductById(id: number): Observable<void> {
    // ejemplo: http://localhost:3000/api/productos/1
    return this.http.delete<void>(this.serverUrl + this.apiUrl + id);
  }

  saveProduct(product: Producto): Observable<void> {
    return this.http.post<void>(this.serverUrl + this.apiUrl, product);

  }

  getProduct(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.serverUrl + this.apiUrl + id);
  }

  updateProduct(id: number, product: Producto): Observable<void> {
    return this.http.put<void>(this.serverUrl + this.apiUrl + id, product);
  }


}
