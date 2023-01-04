import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReporteComponent } from './reporte.component';
import { reporteRoutes } from './reporte.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ReporteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(reporteRoutes),
  ]
})
export class ReporteModule { }
