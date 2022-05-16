import { UsuarioService } from './../../../../_service/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/_model/usuario';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})



export class UsuarioComponent implements OnInit {

  displayedColumns = ['id_usuario','username','cargo','estado','acciones'];
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private UsuarioService: UsuarioService, private snackBar: MatSnackBar) { }
  

  ngOnInit() {
    this.UsuarioService.usuarioCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.UsuarioService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'INFO',{duration: 2000});
    });

    this.UsuarioService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminar(id_usuario: number){
    this.UsuarioService.eliminar(id_usuario).subscribe(()=>{
      this.UsuarioService.listar().subscribe(data => {
        this.UsuarioService.usuarioCambio.next(data);
        this.UsuarioService.mensajeCambio.next('SE ELIMINÓ DATO');
      });
    });
  }
}
