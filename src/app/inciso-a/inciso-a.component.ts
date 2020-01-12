import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto/producto.service';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-inciso-a',
  templateUrl: './inciso-a.component.html',
  styleUrls: ['./inciso-a.component.css']
})
export class IncisoAComponent implements OnInit {

  title = "Nombre y precio de los producos cuyo precio sea mayor o igual a 180.000 y orderarlos descendentemente por precio";
  valorPred = 180000;

  private producto: Producto = new Producto();
  productos: Producto[];  

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductosMayorQue(this.valorPred).subscribe((producto) => {
      this.productos = producto
    });
  }

  consultarMayorQue(): void {
    this.productoService.getProductosMayorQue(this.producto.precioProducto).subscribe((producto) => {
      this.productos = producto

    });
  }

}
