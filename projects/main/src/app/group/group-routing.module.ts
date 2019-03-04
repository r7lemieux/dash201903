import {NgModule} from '@angular/core';
import {GroupComponent} from './group.component';
import {RouterModule, Routes} from '@angular/router';

const groupRoutes: Routes = [
  {
    path: 'group', component: GroupComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(groupRoutes)
  ],
  exports: [RouterModule]
})
export class GroupRoutingModule {
}
