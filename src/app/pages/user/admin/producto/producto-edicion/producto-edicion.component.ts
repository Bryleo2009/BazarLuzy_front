import { Producto } from './../../../../../_model/producto';
import { ProductoService } from './../../../../../_service/producto.service';


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
          'id_Product': new FormControl(data.id_Product),
          'stock': new FormControl(data.stock),
          'nombre_product': new FormControl(data.nombre_product),
          'precio_unitario': new FormControl(data.precio_unitario)
        });
      });
    }
  }

  operar(){
    this.Producto.id_Product = this.form.value['id_Product'];
    this.Producto.stock = this.form.value['stock'];
    this.Producto.nombre_product = this.form.value['nombre_product'];
    this.Producto.precio_unitario = this.form.value['precio_unitario'];

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
    this.router.navigate(['/home_admin/productos']); //link a donde se dirige
  }

}
