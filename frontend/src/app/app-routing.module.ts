import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

// guards, proteger las rutas que requieran de iniciar sesion, osea de tener un token en local storage)
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  {path: 'account/login', component: LoginComponent},
  {path: 'account/register', component: SignUpComponent},
  {path: '', component: PaginaInicioComponent, canActivate: [AuthGuard]},
  {path: 'usuarios', component: ListarUsuariosComponent, canActivate: [AuthGuard]},
  {path: 'productos', component: ListarProductosComponent, canActivate: [AuthGuard]},
  {path: 'productos/add', component: AddEditProductComponent, canActivate: [AuthGuard]},
  {path: 'productos/edit/:id', component: AddEditProductComponent, canActivate: [AuthGuard]},
  {path: 'productos/buscar/:nombre', component: ResultadoBusquedaComponent, canActivate: [AuthGuard]},
  //controlar pagina no encontrada
  {path: '**', component: PaginaNoEncontradaComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
