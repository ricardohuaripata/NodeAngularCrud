import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { ReactiveFormsModule } from '@angular/forms';
// modulo necesario para la conexion con el backend
import { HttpClientModule } from '@angular/common/http';
// modulo para toastr
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarProductosComponent,
    AddEditProductComponent,
    PaginaNoEncontradaComponent,
    PaginaInicioComponent,
    ProgressBarComponent,
    ResultadoBusquedaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // modulo necesario para la conexion con el backend
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    // importar y configurar libreria toastr
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
