import { ComprobanteService } from './../../../../_service/comprobante.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Comprobante } from 'src/app/_model/comprobante';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  displayedColumns = ['id_cp','id_tc','id_tp','fecha','monto_total'];
  dataSources: MatTableDataSource<Comprobante> = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private ComprobanteService: ComprobanteService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
