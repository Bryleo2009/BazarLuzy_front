import { Producto } from './../_model/producto';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  ProductoCambio = new Subject<Producto[]>();
  mensajeCambio = new Subject<string>();
  url: string = `${environment.HOST_URL}/ofsystem/Productos`; //lo que recibe
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Producto[]>(this.url);
  }

  listarPorId(id_Producto: number){
    return this.http.get<Producto>(`${this.url}/${id_Producto}`);
  }

  registar(Producto: Producto){
    return this.http.post(`${this.url}`,Producto);
  }

  modificar(Producto: Producto){
    return this.http.put(`${this.url}`,Producto);
  }

  eliminar(id_Producto: number){
    return this.http.delete(`${this.url}/${id_Producto}`);
  }
}
