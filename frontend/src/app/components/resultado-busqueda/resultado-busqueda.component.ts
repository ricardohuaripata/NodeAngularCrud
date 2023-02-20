import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent {
  loading: boolean = false;
  buscar: string;
  resultadoListaProductos: Producto[] = [];

  constructor(private _productoService: ProductoService, private aRouter: ActivatedRoute) {
    this.buscar = String(aRouter.snapshot.paramMap.get('nombre'));

  }
  // para refrescar la pagina de resultados por cada busqueda
  ngOnInit(): void {
    this.aRouter.paramMap.subscribe(params => {
      this.buscar = params.get('nombre') ?? '';
      this.obtenerListaProductos();
    });    
  }

  obtenerListaProductos() {
    this.loading = true;

    setTimeout(() => {

      this._productoService.getListProductsByName(this.buscar).subscribe((data: Producto[]) => {
        this.resultadoListaProductos = data;
        this.loading = false;

      });

    }, 500);

  }

}
