import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventComponent} from './event/event.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/group'
  },
  {
    path: 'events', component: EventComponent
  },
  {
    path: 'members', loadChildren: './lazyLoader/meetup-lazy-loader.module#MeetupLazyLoaderModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
