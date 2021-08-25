import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ViewTaskComponent } from '../view-task/view-task.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

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
