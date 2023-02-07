import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {
  listaProductos: Producto[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      descripcion: 'Bebida azucarada',
      precio: 100,
      existencias: 60
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Bebida azucarada',
      precio: 100,
      existencias: 60
    },
    {
      id: 3,
      nombre: 'Producto 3',
      descripcion: 'Bebida azucarada',
      precio: 100,
      existencias: 60
    }
  ]

}
