import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    LayoutComponent, 
    RouterModule
  ]
})
export class LayoutModule { }
