import { UsuarioComponent } from './pages/user/admin/usuario/usuario.component';
import { UsuarioEdicionComponent } from './pages/user/admin/usuario/usuario-edicion/usuario-edicion.component';
import { NavComponent } from './pages/user/admin/nav/nav.component';
import { ProductoComponent } from './pages/user/admin/producto/producto.component';
import { ProductoEdicionComponent } from './pages/user/admin/producto/producto-edicion/producto-edicion.component';
import { ConfiExitComponent } from './pages/user/admin/nav/confi-exit/confi-exit.component';
import { NavEconomistaComponent } from './pages/user/economista/nav-economista/nav-economista.component';
import { ConfiExitEcoComponent } from './pages/user/economista/nav-economista/confi-exit-eco/confi-exit-eco.component';
import { ServicioComponent } from './pages/user/economista/servicio/servicio.component';
import { VentaComponent } from './pages/user/economista/venta/venta.component';
import { CompraComponent } from './pages/user/economista/compra/compra.component';
import { FlujoComponent } from './pages/user/economista/flujo/flujo.component';
import { OrdenReclamoComponent } from './pages/user/admin/orden-reclamo/orden-reclamo.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavCajeroComponent } from './pages/user/cajero/nav-cajero/nav-cajero.component';
import { ComprobanteComponent } from './pages/user/cajero/comprobante/comprobante.component';
import { TipoPagoComponent } from './pages/user/admin/tipo-pago/tipo-pago.component';
import { TipoComprobanteComponent } from './pages/user/admin/tipo-comprobante/tipo-comprobante.component';
import { ComprobanteAdminComponent } from './pages/user/admin/comprobante-admin/comprobante-admin.component';
import { OrdenCompraComponent } from './pages/user/admin/orden-compra/orden-compra.component';
import { FlujoCajaComponent } from './pages/user/admin/flujo-caja/flujo-caja.component';

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
    PageNotFoundComponent,
    NavEconomistaComponent,
    ConfiExitEcoComponent,
    ServicioComponent,
    VentaComponent,
    CompraComponent,
    FlujoComponent,
    OrdenReclamoComponent,
    NavCajeroComponent,
    ComprobanteComponent,
    TipoPagoComponent,
    TipoComprobanteComponent,
    ComprobanteAdminComponent,
    OrdenCompraComponent,
    FlujoCajaComponent,
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
