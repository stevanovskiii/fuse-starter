import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTaskComponent } from 'app/layout/common/create-task/create-task.component';


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
        this.dialog.open(CreateTaskComponent,dialogConfig)
    }
}
