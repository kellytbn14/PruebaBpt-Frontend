import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProveedorService } from './proveedor/proveedor.service';
import { ProductoComponent } from './producto/producto.component';
import { ProductoService } from './producto/producto.service';
import { IncisoAComponent } from './inciso-a/inciso-a.component';
import { HeaderComponent } from './header/header.component';
import { IncisoBComponent } from './inciso-b/inciso-b.component';
import { IncisoCComponent } from './inciso-c/inciso-c.component';
import { IncisoDComponent } from './inciso-d/inciso-d.component';

const routes: Routes= [
  {path: '', redirectTo: '/proveedor', pathMatch: 'full'},
  {path: 'proveedor', component: ProveedorComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'inciso-a', component: IncisoAComponent},
  {path: 'inciso-b', component: IncisoBComponent},
  {path: 'inciso-c', component: IncisoCComponent},
  {path: 'inciso-d', component: IncisoDComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent,
    ProductoComponent,
    HeaderComponent,
    IncisoAComponent,
    IncisoBComponent,
    IncisoCComponent,
    IncisoDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedorService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
