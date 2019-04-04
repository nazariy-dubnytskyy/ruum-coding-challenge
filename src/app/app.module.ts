import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarEventComponent } from './components/calendar-event/calendar-event.component';
import { CalendarService } from './services/calendar.service';
import { CalendarActions } from './actions/calendar.actions';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarEventComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    CalendarService,
    CalendarActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
