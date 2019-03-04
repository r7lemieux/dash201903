import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MembersComponent} from './members/members.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: MembersComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MeetupRoutingModule {
}
