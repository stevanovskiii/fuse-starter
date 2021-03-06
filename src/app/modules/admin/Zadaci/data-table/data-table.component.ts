import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { parseString } from 'rrule/dist/esm/src/parsestring';/* ova e za funkcijata koja nema nikakva korist za sega, daa so kopcina() */
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewTaskComponent } from 'app/layout/common/view-task/view-task.component';
import { AuthService } from 'app/core/auth/auth.service';
import { RouterLinkWithHref } from '@angular/router';
import { CdkRow } from '@angular/cdk/table';

@Component({
  selector: 'app-data-table',/*sleketorov e e bas ko so si mislev to est ne e data-table*/
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;
  response: any
  responseproekt: any

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['buttons','id', 'name', 'task', 'Почнува',	'Завршува',	'Категории',	'status',	'Приоритет'];
  constructor(private dialog: MatDialog, private _authService:AuthService ) {
    //console.log('JAS SUM OD DATATABLE COMPONENT TS')
    //console.log(this._authService.getMessage())
    //console.log('JAS SUM OD DATATABLE COMPONENT TS')
    //this.dataSource = null
    this.response=this._authService.getPodatociUser()
    this.responseproekt=this._authService.getMessage()

    //console.log('this._authService.getMessage()')
    //console.log(this._authService.getMessage())
    //console.log('this._authService.getMessage()')

    //console.log('ove go od auth service so zemat')
    //console.log(this._authService.getMessage())
    //console.log('ove go od auth service so zemat')
    this.dataSource = new DataTableDataSource(this._authService.getMessage());

}

seIzvrsuva="Се извршува"
naCekanje="На чекање"

ZemiPodatoci(){
  fetch('https://estitask.com/api/api/projecttask/GetProjectTasksForUser?languageId=1&isDeleted=false&userId='+this.response.User.Id)
            .then(res=>{
              return res.json()
            })
            .then(data=>{
              this._authService.setMessage(data)
            })
}


Status(){
      console.log('Test Status')
      function StatusZavrsen(){
        console.log('Status zarsen')
      }
    }
  
  ZapocniProekt(ID,event){
    console.log(ID)
    console.log(this.responseproekt.ProjectTasks)
    fetch('https://estitask.com/api/api/projecttask/StartProjectTask?projectTaskId='+this.responseproekt.ProjectTasks[ID].Id+'&reliedTaskId=0')
                      .then(res=>{
                        if (res.status==200){
                          fetch('https://estitask.com/api/api/projecttask/GetProjectTasksForUser?languageId=1&isDeleted=false&userId='+this.response.User.Id)
                              .then(res=>{
                                return res.json()
                              })
                              .then(data=> {
                                //console.log('Eve sto prakjam od fetchot vo Kraj funkcijata so setMessage')
                                this._authService.setMessage(data)
                                this.dataSource.stavigiPodatociteOdGetot(data)
                                event.target.hidden=true;
                                this.dataSource.paginator._changePageSize(this.dataSource.paginator.pageSize);
                                this.responseproekt=data
                                //console.log('Eve sto prakjam od fetchot vo Kraj funkcijata so setMessage')
                                //event.target.parentNode.parentNode.parentNode.parentNode.hidden=true;
                              }) 
                              //var element = <HTMLInputElement> document.getElementById("zapocni");
                              //element.hidden = true;
                              //element.hidden=true;
                              console.log('Tranje kopce ova nad mene')
                        }
                            else{
                              //element.hidden=false;
                            }
                          }
                      )
  }

  Kraj(ID,event){ 
    console.log(ID)
    console.log(this.responseproekt.ProjectTasks)
    fetch('https://estitask.com/api/api/projecttask/FinishProjectTask?projectId='+this.responseproekt.ProjectTasks[ID].ProjectId+'&projectTaskId='+this.responseproekt.ProjectTasks[ID].Id+'&finishedUserEmail='+this.response.User.Email)
    .then(res=>{
      if (res.status==200){
            fetch('https://estitask.com/api/api/projecttask/GetProjectTasksForUser?languageId=1&isDeleted=false&userId='+this.response.User.Id)
            .then(res=>{
              return res.json()
            })
            .then(data=> {
              //console.log('Eve sto prakjam od fetchot vo Kraj funkcijata so setMessage')
              this._authService.setMessage(data)
              this.dataSource.stavigiPodatociteOdGetot(data)
              this.dataSource.paginator._changePageSize(this.dataSource.paginator.pageSize);
              this.responseproekt=data
              //console.log('Eve sto prakjam od fetchot vo Kraj funkcijata so setMessage')
              //event.target.parentNode.parentNode.parentNode.parentNode.hidden=true;
            })  
          }
        }
    )                
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  OtvoriFiltriBool : boolean = false;
    OtvoriFiltri(){
        if(this.OtvoriFiltriBool==false){ 
          let a = window.document.getElementById('SkrieniKopcina')!;
          a.style.display='block';
          this.OtvoriFiltriBool = true;

          let b = window.document.getElementById('data-table')!;
          b.style.marginTop='147px';
        }
        else if (this.OtvoriFiltriBool==true){ 
          let a = window.document.getElementById('SkrieniKopcina')!;
          a.style.display='none';
          this.OtvoriFiltriBool = false;

          let b = window.document.getElementById('data-table')!;
          b.style.marginTop='52px';
        }
    }

  View(ID){
    /*fetch('https://estitask.com/api/api/projecttask/FillCategory?companyId=4')
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    }) 
                      fetch('https://estitask.com/api/api/projecttask/FillPriority?languageId=1')
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    }) 
                      fetch('https://estitask.com/api/api/projecttask/FillUser?companyId=4')
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    }) 
                      fetch('https://estitask.com/api/api/projecttask/FillTask?companyId=4')
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    }) 
                      fetch('https://estitask.com/api/api/projecttask/FillCustomer?companyId=4')
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    }) 
                      fetch('https://estitask.com/api/api/projecttask/FillReliedTask?projectId='+this.responseproekt.ProjectTasks[ID].ProjectId)
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    }) 
                      fetch('https://estitask.com/api/api/projecttask/GetParticipantsByTaskId?projectTaskId='+this.responseproekt.ProjectTasks[ID].Id)
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    }) 
                      fetch('https://estitask.com/api/api/projecttask/GetPredefinedTasksByTaskId?projectTaskId='+this.responseproekt.ProjectTasks[ID].Id)
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    }) 
                      fetch('https://estitask.com/api/api/projecttask/GetEstimationInformationCount?projectTaskId='+this.responseproekt.ProjectTasks[ID].Id)
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    }) 
                      fetch('https://estitask.com/api/api/district/GetDistricts?companyId=4')
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data);
                    })*/
                    fetch('https://estitask.com/api/api/projecttask/GetProjectTasksForUser?languageId=1&isDeleted=false&userId='+this.response.User.Id)
                      .then(res=>{
                        return res.json();
                      })
                      .then(data=> {
                        //console.log(data.ProjectTasks[ID]);
                        const dialogConfig = new MatDialogConfig();
                              dialogConfig.disableClose = true;
                              dialogConfig.autoFocus = true;
                              dialogConfig.width = "400px";
                              dialogConfig.height = "1400px";
                              dialogConfig.minWidth = "295px";
                              dialogConfig.data = data.ProjectTasks[ID];
                              this.dialog.open(ViewTaskComponent,dialogConfig)   
                    })  
  }

  kopcina(){/* ovaa funkcija zasega nema korsit ama neka stoj za sekoj slucaj dane se naj za neso */
    if(true){
      let a = window.document.getElementsByClassName('kopce')!;
      for(let i=0;i<a.length;i++){

        var b = ((a[i] as HTMLElement).style.top);



        var c=parseInt((a[i] as HTMLElement).style.top,10);   
        
      }
      /* so ovaa kje gi praev kopcinata ama na krajot samo styleot trebalo da se meni  */
    }
    
  }
  
}
