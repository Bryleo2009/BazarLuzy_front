import { Usuario } from './../../../../../_model/usuario';
import { UsuarioService } from './../../../../../_service/usuario.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-edicion',
  templateUrl: './usuario-edicion.component.html',
  styleUrls: ['./usuario-edicion.component.css']
})
export class UsuarioEdicionComponent implements OnInit {

  usuario: Usuario = new Usuario;
  edicion: boolean = true;
  id: number = 0;
  form!: FormGroup;
  constructor(private UsuarioService: UsuarioService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(){
    this.form = new FormGroup({
      'id_usuario': new FormControl(0),
      'username': new FormControl(''),
      'password': new FormControl(''),
      'cargo': new FormControl(''),
      'estado': new FormControl('')
    });

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];//mismo de la url
      this.edicion = this.id != null;

      this.initForm();
    });
  }

  //repoblación del formulario al editar un campo
  initForm(){

    this.usuario = new Usuario();

    if(this.edicion){
      //cargar la data del servicio hacia el form
      this.UsuarioService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id_usuario': new FormControl(data.id_usuario),
          'username': new FormControl(data.username),
          'password': new FormControl(data.password),
          'cargo': new FormControl(data.cargo),
          'estado': new FormControl(data.estado)
        });
      });
    }
  }

  operar(){
    this.usuario.id_usuario = this.form.value['id_usuario'];
    this.usuario.username = this.form.value['username'];
    this.usuario.password = this.form.value['password'];
    this.usuario.cargo = this.form.value['cargo'];
    this.usuario.estado = this.form.value['estado'];

    if(this.edicion){
      this.UsuarioService.modificar(this.usuario).subscribe(()=>{
        this.UsuarioService.listar().subscribe(data =>{
          this.UsuarioService.usuarioCambio.next(data);
          this.UsuarioService.mensajeCambio.next('SE MODIFICÓ DATO');
        })
      });
    }else{
      //inserción
      this.UsuarioService.registar(this.usuario).subscribe(()=>{
        this.UsuarioService.listar().subscribe(data =>{
          this.UsuarioService.usuarioCambio.next(data);
          this.UsuarioService.mensajeCambio.next('SE REGISTRÓ DATO');
        })
      });
    }
    this.router.navigate(['/home_admin/usuarios']); //link a donde se dirige
  }

}
