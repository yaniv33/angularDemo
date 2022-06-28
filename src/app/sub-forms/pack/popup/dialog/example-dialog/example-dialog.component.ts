import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
//import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.css']
})
export class ExampleDialogComponent {

  constructor(public dialogRef: MatDialogRef<ExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('data', data)

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
