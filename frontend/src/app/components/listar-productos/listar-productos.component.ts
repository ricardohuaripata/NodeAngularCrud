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
  // BARRA DE CARGA
  loading: boolean = false;

  constructor(private _productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerListaProductos();
  }

  obtenerListaProductos() {
    this.loading = true;

    setTimeout(() => {

      this._productoService.getListProducts().subscribe((data: Producto[]) => {
        this.listaProductos = data;
        this.loading = false;

      });
      
    }, 500);

  }

  eliminarProducto(id : number) {
    this._productoService.deleteProductById(id).subscribe(() =>{
      // cuando se elimina el productos se actualiza la pagina con la lista de productos
      this.obtenerListaProductos();
    });

  }

}
