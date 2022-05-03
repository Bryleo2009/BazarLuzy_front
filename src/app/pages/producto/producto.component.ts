import { ProductoService } from './../../_service/producto.service';
import { Producto } from './../../_model/producto';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  displayedColumns = ['id_Producto','userName','nombre_cargo','estado','acciones'];
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private ProductoService: ProductoService, private snackBar: MatSnackBar) { }
  

  ngOnInit() {
    this.ProductoService.ProductoCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.ProductoService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'INFO',{duration: 2000});
    });

    this.ProductoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminar(id_Producto: number){
    this.ProductoService.eliminar(id_Producto).subscribe(()=>{
      this.ProductoService.listar().subscribe(data => {
        this.ProductoService.ProductoCambio.next(data);
        this.ProductoService.mensajeCambio.next('SE ELIMINÓ DATO');
      });
    });
  }
}
