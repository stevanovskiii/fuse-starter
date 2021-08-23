import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataTableComponent } from 'app/modules/admin/Zadaci/data-table/data-table.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DataTableComponent>,) { } 

  ngOnInit(): void {
  }

  Close(): void {
    this.dialogRef.close();
    
  }

  End(): void {
    this.dialogRef.close();
    
  }
}
