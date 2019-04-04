import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CalendarEvent } from '../models/event.model';
import { CalendarState } from '../reducers/calendar.reducer';

@Injectable()
export class CalendarActions {
  constructor(private store: Store<CalendarState>) { }

  static SET_EVENTS = '[Calendar Events] Set calendar events';


  public setCalendarEvents(events: CalendarEvent[]) {
    this.store.dispatch({
      type: CalendarActions.SET_EVENTS,
      payload: { events }
    });
  }

}
