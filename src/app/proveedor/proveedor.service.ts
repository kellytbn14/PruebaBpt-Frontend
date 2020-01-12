import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proveedor } from './proveedor';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlEndPoint: string = 'http://localhost:8080/api/proveedor';

  proveedores: Proveedor[];

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Proveedor[]> {
       return this.http.get<Proveedor[]>(this.urlEndPoint)
  }

  getProveedorPorProducto(codigo: string): Observable<Proveedor>{
    return this.http.get<Proveedor>(`${this.urlEndPoint}/getnameproveedorporcod/${codigo}`)
  }
}
