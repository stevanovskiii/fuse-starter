import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassChangeComponent } from './pass-change.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PassChangeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class PassChangeModule { }
