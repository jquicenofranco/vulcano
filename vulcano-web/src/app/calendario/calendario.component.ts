import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    locale: esLocale,
    dateClick: (info) => {
      window.open(`https://arcg.is/v8r5O`, "_blank");
    },
    eventClick: (info) => {
      console.log(info);
    },
    events: [
      { title: 'Eventos volcano', start: new Date() }
    ]
  };
  currentEvents: EventApi[] = [];

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
}
