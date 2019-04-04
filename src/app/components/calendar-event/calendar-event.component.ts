import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../../models/event.model';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {
  @Input() event: CalendarEvent;
  @Input() width: number;
  @Input() index: number;
  height: number;
  offset: number;

  constructor() { }

  ngOnInit() {
    this.height = this.event.end - this.event.start;
    this.offset = this.index * this.width;
  }

}
