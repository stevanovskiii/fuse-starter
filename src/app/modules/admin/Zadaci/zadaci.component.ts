import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTaskComponent } from 'app/layout/common/create-task/create-task.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
    selector     : 'zadaci',
    templateUrl  : './zadaci.component.html',
    styleUrls: ['./zadaci.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class ZadaciComponent
{

    /**
     * Constructor
     */
    constructor(private dialog: MatDialog) 
    {
        
    }
    onCreate(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "400px";
        dialogConfig.height = "690px";
        dialogConfig.minWidth = "295px";
        this.dialog.open(CreateTaskComponent,dialogConfig)
    }
    OtvoriFiltriBool : boolean = false;
    OtvoriFiltri(){
        if(this.OtvoriFiltriBool==false){ 
          let a = window.document.getElementById('SkrieniKopcina')!;
          a.style.display='block';
          this.OtvoriFiltriBool = true;
        }
        else if (this.OtvoriFiltriBool==true){ 
          let a = window.document.getElementById('SkrieniKopcina')!;
          a.style.display='none';
          this.OtvoriFiltriBool = false;
        }
    }
    selectedProject: string = 'ACME Corp. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    
}
