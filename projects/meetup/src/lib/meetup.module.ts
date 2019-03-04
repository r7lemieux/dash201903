import { NgModule } from '@angular/core';
import { MeetupComponent } from './meetup.component';
import {MemberComponent} from './member/member.component';
import {MembersComponent} from './members/members.component';
import {CommonModule} from '@angular/common';
import {MeetupRoutingModule} from './meetup-routing.module';

@NgModule({
  declarations: [MeetupComponent, MemberComponent, MembersComponent],
  imports: [
    CommonModule,
    MeetupRoutingModule
  ],
  exports: [MeetupComponent, MemberComponent, MembersComponent]
})
export class MeetupModule { }
