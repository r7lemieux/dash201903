import { NgModule } from '@angular/core';
import {MeetupModule} from 'meetup';

@NgModule({
  imports: [MeetupModule],
  exports: [MeetupModule],
})
export class MeetupLazyLoaderModule { }
