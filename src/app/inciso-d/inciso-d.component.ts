import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto/producto.service';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-inciso-d',
  templateUrl: './inciso-d.component.html',
  styleUrls: ['./inciso-d.component.css']
})
export class IncisoDComponent implements OnInit {

  title = "Nombre y precio de los productos que están entre 20.000 y 180.000";
  valorMenor = 20000;
  valorMayor = 180000;
  mayor: number;
  menor: number;

  private producto: Producto = new Producto();
  productos: Producto[]; 

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductosPrecioEntre(this.valorMenor, this.valorMayor).subscribe((producto) => {
      this.productos = producto
    });
  }

  consultarPorPreciosEntre(): void{
    this.productoService.getProductosPrecioEntre(this.menor, this.mayor).subscribe((producto) => {
      this.productos = producto
    });
  }

}
