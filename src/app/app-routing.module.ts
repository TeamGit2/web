import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArticuloComponent } from './lista-articulo/lista-articulo.component';
import { RegistrarArticuloComponent } from './registrar-articulo/registrar-articulo.component';
import { ActualizarArticuloComponent } from './actualizar-articulo/actualizar-articulo.component';
import { ListaVentaarticuloComponent } from './lista-ventaarticulo/lista-ventaarticulo.component';
import { AuthGuard } from './Security/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'articulo', component:ListaArticuloComponent,canActivate:[AuthGuard]},
  {path: '', redirectTo:'/login', pathMatch:'full', },
  {path: 'registrar-articulo', component:RegistrarArticuloComponent,canActivate:[AuthGuard]},
  {path: 'actualizar-articulo/:cod_barras', component:ActualizarArticuloComponent, canActivate:[AuthGuard]},
  {path: 'lista-ventas', component:ListaVentaarticuloComponent, canActivate:[AuthGuard]},
  {path: 'login',component:LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
