import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatButtonModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {GroupModule} from './group/group.module';
import {EventModule} from './event/event.module';
import {RouterModule} from '@angular/router';
import {EventComponent} from './event/event.component';
import {MeetupModule} from 'meetup';

@NgModule({
  declarations: [
    AppComponent, EventComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    EventModule,
    GroupModule,
    MeetupModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
