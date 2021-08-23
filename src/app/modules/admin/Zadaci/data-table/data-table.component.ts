import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { parseString } from 'rrule/dist/esm/src/parsestring';/* ova e za funkcijata koja nema nikakva korist za sega, daa so kopcina() */
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['buttons','id', 'name', 'task', 'Почнува',	'Завршува',	'Категории',	'Статус',	'Приоритет'];

  constructor() {
    this.dataSource = new DataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
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
