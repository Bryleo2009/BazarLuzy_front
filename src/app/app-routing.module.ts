import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductoEdicionComponent } from './pages/producto/producto-edicion/producto-edicion.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './pages/nav/nav.component';
import { UsuarioEdicionComponent } from './pages/usuario/usuario-edicion/usuario-edicion.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //ruta que se manejará
  {
    path: 'home_admin',
    component: NavComponent,
    children: [
      {
        path: 'usuarios',
        component: UsuarioComponent,
        children: [
          { path: 'nuevo', component: UsuarioEdicionComponent },
          { path: 'edicion/:id', component: UsuarioEdicionComponent },
        ],
      },
      {
        path: 'productos',
        component: ProductoComponent,
        children: [
          { path: 'nuevo', component: ProductoEdicionComponent },
          { path: 'edicion/:id', component: ProductoEdicionComponent },
        ],
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ],
  }, //menu de vagación
  { path: 'login', component: LoginComponent },
  { path: 'BL', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
