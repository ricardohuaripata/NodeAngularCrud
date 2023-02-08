import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})

export class ListarProductosComponent implements OnInit {

  listaProductos: Producto[] = [];

  constructor(private _productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerListaProductos();
  }

  obtenerListaProductos() {
    
    this._productoService.getListProducts().subscribe((data: Producto[]) => {
      this.listaProductos = data;
    });

  }

}
