import { Usuario } from './../../../_model/usuario';
import { UsuarioService } from './../../../_service/usuario.service';
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
  constructor(private usuarioService: UsuarioService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(){
    this.form = new FormGroup({
      'id_usuario': new FormControl(0),
      'userName': new FormControl(''),
      'password': new FormControl(''),
      'nombre_cargo': new FormControl(''),
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
      this.usuarioService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id_usuario': new FormControl(data.id_usuario),
          'userName': new FormControl(data.userName),
          'password': new FormControl(data.password),
          'nombre_cargo': new FormControl(data.nombre_cargo),
          'estado': new FormControl(data.estado)
        });
      });
    }
  }

  operar(){
    this.usuario.id_usuario = this.form.value['id_usuario'];
    this.usuario.userName = this.form.value['userName'];
    this.usuario.password = this.form.value['password'];
    this.usuario.nombre_cargo = this.form.value['nombre_cargo'];
    this.usuario.estado = this.form.value['estado'];

    if(this.edicion){
      this.usuarioService.modificar(this.usuario).subscribe(()=>{
        this.usuarioService.listar().subscribe(data =>{
          this.usuarioService.usuarioCambio.next(data);
          this.usuarioService.mensajeCambio.next('SE MODIFICÓ DATO');
        })
      });
    }else{
      //inserción
      this.usuarioService.registar(this.usuario).subscribe(()=>{
        this.usuarioService.listar().subscribe(data =>{
          this.usuarioService.usuarioCambio.next(data);
          this.usuarioService.mensajeCambio.next('SE REGISTRÓ DATO');
        })
      });
    }
    this.router.navigate(['/home/usuarios']); //link a donde se dirige
  }

}
