import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { Proveedor } from './proveedor';
import { ProveedorService } from './proveedor.service';
import { Producto } from '../producto/producto';
import { ProductoService } from '../producto/producto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  proveedores: Proveedor[];
  productos: Producto[];

  constructor(private proveedorService: ProveedorService, private productoService: ProductoService) { }

  ngOnInit() {
    this.proveedorService.getProveedores().subscribe((proveedores) => {
      this.proveedores = proveedores
    });

  }

  verProductos(nit: string): void {
    this.productoService.getProductosPorNit(nit).subscribe((producto) => {
      this.productos = producto
      var htmlPre=''

      this.productos.forEach(function (producto) {
              
        htmlPre+='<tr>'+
         '<th scope="row">' + producto.codProducto + '</th>'+
         '<td>' + producto.precioProducto + '</td>'+
         '<td>' + producto.nomProducto + '</td>'+
        '</tr>'
      });

      Swal.fire({

        title: '<strong>Productos</strong>',
        html:
          '<table class="table table-sm">' +
          '<thead>' +
          ' <tr>' +
          '   <th scope="col">CODIGO</th>' +
          '<th scope="col">PRECIO</th>' +
          ' <th scope="col">NOMBRE</th>' +
          ' </tr>' +
          '  </thead>' +
          '  <tbody>' +   

            htmlPre+

          ' </tbody>' +
          '  </table>',
        showCloseButton: true,
        focusConfirm: false,

      })
    })
  }


}
