import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Usuario } from '../_model/usuario'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioCambio = new Subject<Usuario[]>();
  mensajeCambio = new Subject<string>();
  url: string = `${environment.HOST_URL}/ofsystem/Usuarios`; //lo que recibe
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Usuario[]>(this.url);
  }

  listarPorId(id_usuario: number){
    return this.http.get<Usuario>(`${this.url}/${id_usuario}`);
  }

  registar(usuario: Usuario){
    return this.http.post(`${this.url}`,usuario);
  }

  modificar(usuario: Usuario){
    return this.http.put(`${this.url}`,usuario);
  }

  eliminar(id_usuario: number){
    return this.http.delete(`${this.url}/${id_usuario}`);
  }

}
