import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListnotificationsComponent} from './mongodbtest/listnotifications/listnotifications.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'mongodbtest', component: ListnotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
