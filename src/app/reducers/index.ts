import { Action } from '@ngrx/store';
import { calendarReducer, CalendarState } from './calendar.reducer';

export interface BaseAction extends Action {
  payload?: any;
}

export interface AppState {
  calendar: CalendarState;
}

export const reducers = {
  calendar: calendarReducer
};
