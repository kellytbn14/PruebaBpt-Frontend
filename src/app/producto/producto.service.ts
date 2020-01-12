import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint: string = 'http://localhost:8080/api/producto';
  productos: Producto[];


  constructor(private http: HttpClient) { }

  getProductosPorNit(nit: string): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.urlEndPoint}/getproductospornit/${nit}`)
  }
}
