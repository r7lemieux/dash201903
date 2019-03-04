import {Component, OnInit} from '@angular/core';
import {rsvps} from '../data/meetup/rsvps';

@Component({
  selector: 'mup-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: any[];

  constructor() {
  }

  ngOnInit() {
    this.members = rsvps.map(rsvp => rsvp.member);
  }

}
