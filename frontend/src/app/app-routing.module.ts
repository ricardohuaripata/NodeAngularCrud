import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';

const routes: Routes = [
  {path: '', component: PaginaInicioComponent},
  {path: 'productos', component: ListarProductosComponent},
  {path: 'productos/add', component: AddEditProductComponent},
  {path: 'productos/edit/:id', component: AddEditProductComponent},
  {path: 'productos/buscar/:nombre', component: ResultadoBusquedaComponent},
  //controlar pagina no encontrada
  {path: '**', component: PaginaNoEncontradaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
