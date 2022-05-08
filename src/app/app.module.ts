import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioEdicionComponent } from './pages/usuario/usuario-edicion/usuario-edicion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './pages/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductoEdicionComponent } from './pages/producto/producto-edicion/producto-edicion.component';
import { MenuComponent } from './pages/menu/menu.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfiExitComponent } from './pages/nav/confi-exit/confi-exit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioEdicionComponent,
    NavComponent,
    LoginComponent,
    ProductoComponent,
    ProductoEdicionComponent,
    MenuComponent,
    ConfiExitComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  
  entryComponents: [ConfiExitComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
