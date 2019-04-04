import { Injectable } from '@angular/core';
import { CalendarEvent } from '../models/event.model';

@Injectable()
export class CalendarService {
  constructor() {}

  groupEvents(calendarEvents: CalendarEvent[]) {
    const groupedEvents = [];
    let eventsWithCollision = [calendarEvents[0]];
    let eventWithMaxEnd = calendarEvents[0];

    for (let i = 1; i < calendarEvents.length; i++) {
         // check there is no collision
      if (calendarEvents[i].start >= eventWithMaxEnd.end) {
        if (eventsWithCollision.length > 0) {
          groupedEvents.push(eventsWithCollision);
        }
        eventsWithCollision = [];
      }

      eventsWithCollision.push(calendarEvents[i]);
      if (eventWithMaxEnd.end < calendarEvents[i].end) {
        eventWithMaxEnd = calendarEvents[i];
      }
    }

    if (eventsWithCollision.length > 0) {
      groupedEvents.push(eventsWithCollision);
    }

    return groupedEvents;
  }

}
