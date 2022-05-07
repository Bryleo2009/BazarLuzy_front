import { ProductoService } from './../../../_service/producto.service';
import { Producto } from './../../../_model/producto';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-producto-edicion',
  templateUrl: './producto-edicion.component.html',
  styleUrls: ['./producto-edicion.component.css']
})
export class ProductoEdicionComponent implements OnInit {

  Producto: Producto = new Producto;
  edicion: boolean = true;
  id: number = 0;
  form!: FormGroup;
  constructor(private ProductoService: ProductoService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(){
    this.form = new FormGroup({
      'id_Producto': new FormControl(0),
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

    this.Producto = new Producto();

    if(this.edicion){
      //cargar la data del servicio hacia el form
      this.ProductoService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id_Producto': new FormControl(data.id_Producto),
          'userName': new FormControl(data.userName),
          'password': new FormControl(data.password),
          'nombre_cargo': new FormControl(data.nombre_cargo),
          'estado': new FormControl(data.estado)
        });
      });
    }
  }

  operar(){
    this.Producto.id_Producto = this.form.value['id_Producto'];
    this.Producto.userName = this.form.value['userName'];
    this.Producto.password = this.form.value['password'];
    this.Producto.nombre_cargo = this.form.value['nombre_cargo'];
    this.Producto.estado = this.form.value['estado'];

    if(this.edicion){
      this.ProductoService.modificar(this.Producto).subscribe(()=>{
        this.ProductoService.listar().subscribe(data =>{
          this.ProductoService.ProductoCambio.next(data);
          this.ProductoService.mensajeCambio.next('SE MODIFICÓ DATO');
        })
      });
    }else{
      //inserción
      this.ProductoService.registar(this.Producto).subscribe(()=>{
        this.ProductoService.listar().subscribe(data =>{
          this.ProductoService.ProductoCambio.next(data);
          this.ProductoService.mensajeCambio.next('SE REGISTRÓ DATO');
        })
      });
    }
    this.router.navigate(['/BL/home_admin/Productos']); //link a donde se dirige
  }

}
