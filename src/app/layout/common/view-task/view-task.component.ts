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
}
