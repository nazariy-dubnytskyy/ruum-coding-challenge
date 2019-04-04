import { CalendarActions } from '../actions/calendar.actions';
import { CalendarEvent } from '../models/event.model';
import { BaseAction } from '.';

export interface CalendarState {
  events: CalendarEvent[];
}

const initCalendarState = {
  events: []
};

export function calendarReducer(
  state: CalendarState = initCalendarState,
  action: BaseAction
) {
  switch (action.type) {
    case CalendarActions.SET_EVENTS:
      return {
        ...state,
        events: action.payload.events
      };
    default:
      return state;
  }
}
