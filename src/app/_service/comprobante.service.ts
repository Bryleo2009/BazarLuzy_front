import { Comprobante } from './../_model/comprobante';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class ComprobanteService {
    ProductoCambio = new Subject<Comprobante[]>();
    mensajeCambio = new Subject<string>();
    url: string = `${environment.HOST_URL}/ofsystem/Comprobante`; //lo que recibe
    constructor(private http: HttpClient) { }
  
    listar(){
      return this.http.get<Comprobante[]>(this.url);
    }
  
    listarPorId(id_cp: number){
      return this.http.get<Comprobante>(`${this.url}/${id_cp}`);
    }
  
  }