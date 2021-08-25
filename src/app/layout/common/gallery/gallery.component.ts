import { Component, OnInit } from '@angular/core';
import { ViewTaskComponent } from '../view-task/view-task.component';
import { MatDialogRef } from '@angular/material/dialog' 

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewTaskComponent>) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialogRef.close();
  }
}
