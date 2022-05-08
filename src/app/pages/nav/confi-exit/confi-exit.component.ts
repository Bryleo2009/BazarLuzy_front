import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-confi-exit',
  templateUrl: './confi-exit.component.html',
  styleUrls: ['./confi-exit.component.css']
})
export class ConfiExitComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfiExitComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string) { }

  ngOnInit() {
  }

  onClickNO():void{
    this.dialogRef.close();
  }

}
