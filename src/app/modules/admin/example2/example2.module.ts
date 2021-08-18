import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example2Component } from 'app/modules/admin/example2/example2.component'
import { Route, RouterModule } from '@angular/router';




const exampleRoutes: Route[] = [
  {
      path     : '',
      component: Example2Component
  }
];

@NgModule({
  declarations: [
      Example2Component
  ],
  imports     : [
      RouterModule.forChild(exampleRoutes)
  ]
})
export class Example2Module { }
