import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZadaciComponent } from 'app/modules/admin/zadaci/zadaci.component'
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



const zadaciRoutes: Route[] = [
  {
      path     : '',
      component: ZadaciComponent
  }
];

@NgModule({
  declarations: [
      ZadaciComponent
  ],
  imports     : [
      RouterModule.forChild(zadaciRoutes),
      MatIconModule
  ]
})
export class ZadaciModule { }
