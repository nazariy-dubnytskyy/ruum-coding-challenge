import { Component, OnInit, OnDestroy } from '@angular/core';
import { sortByStart } from '../../utils/comparators';
import { CalendarEvent } from '../../models/event.model';
import { CalendarService } from '../../services/calendar.service';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {
  appState$: Observable<AppState>;
  groupedEvents: Array<CalendarEvent[]> = [];
  subscription: Subscription;

  constructor(
    private calendarService: CalendarService,
    private store: Store<AppState>
  ) {
    this.appState$ = this.store.select(state => state) as Observable<AppState>;
  }

  ngOnInit() {
    this.appState$.subscribe((state: AppState) => {
      const calendarEvents = state.calendar.events;

      if (calendarEvents.length) {
        const sortedCalendarEvents = calendarEvents.sort(sortByStart);

        this.groupedEvents = this.calendarService.groupEvents(sortedCalendarEvents);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
