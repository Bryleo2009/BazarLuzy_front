import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoEdicionComponent } from './pages/producto/producto-edicion/producto-edicion.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './pages/nav/nav.component';
import { UsuarioEdicionComponent } from './pages/usuario/usuario-edicion/usuario-edicion.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //ruta que se manejará
  {
    path: 'BL',
    component: InicioComponent,
    children: [
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
    ],
  }, //menu de vagación
  { path: 'login', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
