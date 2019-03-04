import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventComponent} from './event/event.component';

const appRoutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/group'
  },
  {
    path: 'events', component: EventComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
