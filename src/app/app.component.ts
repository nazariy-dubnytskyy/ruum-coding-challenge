import { Component } from '@angular/core';

import { CalendarActions } from './actions/calendar.actions';
import { CalendarEvent } from './models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private calendarActions: CalendarActions) {

    window.layOutDay = (data: CalendarEvent[]) => {
      if (data.length) {
        this.calendarActions.setCalendarEvents(data);
      }
    };

  }
}
