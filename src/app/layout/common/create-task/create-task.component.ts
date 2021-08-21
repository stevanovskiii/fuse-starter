import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Scroll } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserComponent>,
    ) { 
  }

  ngOnInit(): void {
    
  }

  Close(): void {
    this.dialogRef.close();
    
  }
}
