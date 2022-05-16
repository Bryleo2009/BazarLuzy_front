import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confi-exit-eco',
  templateUrl: './confi-exit-eco.component.html',
  styleUrls: ['./confi-exit-eco.component.css']
})
export class ConfiExitEcoComponent implements OnInit {
constructor(public dialogRef: MatDialogRef<ConfiExitEcoComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string) { }

  ngOnInit() {
  }

  onClickNO():void{
    this.dialogRef.close();
  }
  }


