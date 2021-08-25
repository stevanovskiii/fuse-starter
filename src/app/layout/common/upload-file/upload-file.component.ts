import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ViewTaskComponent } from '../view-task/view-task.component';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewTaskComponent>) { }

  ngOnInit(): void {
  }

  Close(): void {
    this.dialogRef.close();
    
  }

}
