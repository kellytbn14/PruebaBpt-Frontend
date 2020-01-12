import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { AppComponent } from './app.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProveedorService } from './proveedor/proveedor.service';
import { ProductoComponent } from './producto/producto.component';
import { ProductoService } from './producto/producto.service';

const routes: Routes= [
  {path: '', redirectTo: '/proveedor', pathMatch: 'full'},
  {path: 'proveedor', component: ProveedorComponent},
  {path: 'producto', component: ProductoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedorService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
