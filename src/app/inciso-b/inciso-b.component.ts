import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto/producto.service';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-inciso-b',
  templateUrl: './inciso-b.component.html',
  styleUrls: ['./inciso-b.component.css']
})
export class IncisoBComponent implements OnInit {

  title = "Nombre de los productos del proveedor con Nit 123456";
  valorPred = "123456";

  private producto: Producto = new Producto();
  productos: Producto[]; 

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductosPorNit(this.valorPred).subscribe((producto) => {
      this.productos = producto
    });
  }

  consultarPorNit(): void {
    this.productoService.getProductosPorNit(this.producto.nitProveedor).subscribe((producto) => {
      this.productos = producto

    });
  }

}
