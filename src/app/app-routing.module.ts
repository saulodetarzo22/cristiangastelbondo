import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BaseComponent } from './components/base/base.component';
import { ListActividadesComponent } from './components/list-actividades/list-actividades.component';
import { CrearActividadesComponent } from './components/crear-actividades/crear-actividades.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirecciona a login por defecto
  { path: 'login', component: LoginComponent },
  { path: 'base', component: BaseComponent },
  { path: 'crear-actividades', component: CrearActividadesComponent },
  { path: 'list-actividades', component: ListActividadesComponent },

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
