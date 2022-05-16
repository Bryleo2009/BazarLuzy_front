import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ConfiExitComponent } from './confi-exit/confi-exit.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog():void{
    const dialogRef = this.dialog.open(ConfiExitComponent,{
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