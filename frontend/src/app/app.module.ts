import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { ReactiveFormsModule } from '@angular/forms';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarProductosComponent,
    AddEditProductComponent,
    PaginaNoEncontradaComponent,
    PaginaInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
