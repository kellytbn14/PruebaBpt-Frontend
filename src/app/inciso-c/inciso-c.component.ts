import { Component, OnInit } from '@angular/core';

import { ProveedorService } from '../proveedor/proveedor.service';
import { Proveedor } from '../proveedor/proveedor';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-inciso-c',
  templateUrl: './inciso-c.component.html',
  styleUrls: ['./inciso-c.component.css']
})
export class IncisoCComponent implements OnInit {

  title = "Nombre del proveedor relacionado con el producto PRD1";
  valorPred = "PRD1";

  provee: Proveedor;
  private producto: Producto = new Producto();

  constructor(private proveedorService: ProveedorService) {
   
  }

  ngOnInit() {
    this.proveedorService.getProveedorPorProducto(this.valorPred).subscribe((proveedor) => {
      this.provee = proveedor
    });

  }

  consultarPorCodigo(): void{
    this.proveedorService.getProveedorPorProducto(this.producto.codProducto).subscribe((proveedor) => {
      this.provee = proveedor

    });
  }

}
