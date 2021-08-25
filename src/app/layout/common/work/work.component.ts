import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ViewTaskComponent } from '../view-task/view-task.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewTaskComponent>) { }

  ngOnInit(): void {
  }

  Close(): void {
    this.dialogRef.close();
    
  }

  Save(): void {
    this.dialogRef.close();
    
  }
}
