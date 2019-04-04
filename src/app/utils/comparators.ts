import { CalendarEvent } from '../models/event.model';

export const sortByStart = (
  first: CalendarEvent,
  second: CalendarEvent
) => {
  if (first.start < second.start) {
    return -1;
  }
  if (first.start > second.start) {
    return 1;
  }
  return 0;
};
