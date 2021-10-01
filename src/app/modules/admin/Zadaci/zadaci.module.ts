import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZadaciComponent } from 'app/modules/admin/zadaci/zadaci.component'
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



const zadaciRoutes: Route[] = [
  {
      path     : '',
      component: ZadaciComponent
  }
];

@NgModule({
  declarations: [
      ZadaciComponent,
      DataTableComponent
  ],
  imports     : [
      RouterModule.forChild(zadaciRoutes),
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      CommonModule
  ]
})
export class ZadaciModule { }
