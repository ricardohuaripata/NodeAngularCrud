import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// modulo necesario para la conexion con el backend
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

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
    LoginComponent,
    SignUpComponent,
    ListarUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
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
  providers: [
    // interceptor token
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
