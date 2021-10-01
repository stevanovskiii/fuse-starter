import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataTableComponent } from 'app/modules/admin/Zadaci/data-table/data-table.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommentsComponent } from '../comments/comments.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { WorkComponent } from '../work/work.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
data:any
  constructor(public dialogRef: MatDialogRef<DataTableComponent>,private dialog: MatDialog,@Inject(MAT_DIALOG_DATA) data) {
    this.data=data;
   }

  ngOnInit(): void {
  }

  Close(): void {
    this.dialogRef.close();
    
  }

  End(): void {
    this.dialogRef.close();
    
  }
  ClientDatabool : boolean = false;
  OpenClientData(){
    if(this.ClientDatabool==false){ /* Ako ne e prikazano prikazigo*/
      let a = window.document.getElementById('ClientDataHidden')!;
      a.style.display='block';
      this.ClientDatabool = true;
    }
    else if (this.ClientDatabool==true){ /* Скриго инаку*/
      let a = window.document.getElementById('ClientDataHidden')!;
      a.style.display='none';
      this.ClientDatabool = false;
    }
  }
  OtherDatabool : boolean = false;
  OpenOtherData(){
    if(this.OtherDatabool==false){ /* Ako ne e prikazano prikazigo*/
      let a = window.document.getElementById('OtherDataHidden')!;
      a.style.display='block';
      this.OtherDatabool = true;
    }
    else if (this.OtherDatabool==true){ /* Скриго инаку*/
      let a = window.document.getElementById('OtherDataHidden')!;
      a.style.display='none';
      this.OtherDatabool = false;
    }
  }

  OpenComments(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "350px";
        dialogConfig.height = "490px";
        dialogConfig.minWidth = "295px";
        this.dialog.open(CommentsComponent,dialogConfig)
  }

  OpenWork(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "350px";
        dialogConfig.height = "640px";
        dialogConfig.minWidth = "295px";
        this.dialog.open(WorkComponent,dialogConfig)
  }

  OpenUploadFile(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "350px";
        dialogConfig.height = "460px";
        dialogConfig.minWidth = "295px";
        this.dialog.open(UploadFileComponent,dialogConfig)
  }

  OpenGallery(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "350px";
        dialogConfig.height = "460px";
        dialogConfig.minWidth = "295px";
        this.dialog.open(GalleryComponent,dialogConfig)
  }
}
