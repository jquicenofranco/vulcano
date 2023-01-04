import { CalendarioComponent } from './calendario.component';
import { calendarioRoutes } from './calendario.routing';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    RouterModule.forChild(calendarioRoutes),
  ]
})
export class CalendarioModule { }
