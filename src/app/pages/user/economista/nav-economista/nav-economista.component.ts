import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ConfiExitEcoComponent } from './confi-exit-eco/confi-exit-eco.component';

@Component({
  selector: 'app-nav-economista',
  templateUrl: './nav-economista.component.html',
  styleUrls: ['./nav-economista.component.css']
})
export class NavEconomistaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog():void{
    const dialogRef = this.dialog.open(ConfiExitEcoComponent,{
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
        console.log('Cerrando Sesión');
      }
    })
  }
  
  ngOnInit(){

  }

}
