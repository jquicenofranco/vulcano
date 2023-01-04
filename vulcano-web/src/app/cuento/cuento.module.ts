import { CommonModule } from '@angular/common';
import { CuentoComponent } from './cuento.component';
import { cuentoRoutes } from './cuento.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CuentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cuentoRoutes),
  ]
})
export class CuentoModule { }
