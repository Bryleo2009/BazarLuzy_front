import { VentaComponent } from './pages/user/economista/venta/venta.component';
import { NavEconomistaComponent } from './pages/user/economista/nav-economista/nav-economista.component';
import { ProductoEdicionComponent } from './pages/user/admin/producto/producto-edicion/producto-edicion.component';
import { ProductoComponent } from './pages/user/admin/producto/producto.component';
import { UsuarioEdicionComponent } from './pages/user/admin/usuario/usuario-edicion/usuario-edicion.component';
import { UsuarioComponent } from './pages/user/admin/usuario/usuario.component';
import { NavComponent } from './pages/user/admin/nav/nav.component';


import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './pages/menu/menu.component';

import { LoginComponent } from './pages/login/login.component';

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
        path: '',
        component: DashboardComponent
      }
    ],
  }, //menu de vagación
  {
    path: 'home_economista',
    component: NavEconomistaComponent,
    children: [
      {path: 'ventas', component: VentaComponent},
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: MenuComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
