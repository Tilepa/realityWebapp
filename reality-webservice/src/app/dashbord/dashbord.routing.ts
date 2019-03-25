import { Routes } from "@angular/router";

import { DashbordComponent } from "./dashbord.component";
import { DashbordListComponent } from "./dashbord-list/dashbord-list.component";
import { DashbordOverviewComponent } from "./dashbord-overview/dashbord-overview.component";
import { DashbordZiehungComponent } from "./dashbord-ziehung/dashbord-ziehung.component";

export const DASHBORD_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashbordOverviewComponent
      },
      {
        path: 'dashbord-list',
        component: DashbordListComponent
      },
      {
        path: 'dashbord-ziehung',
        component: DashbordZiehungComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

export const dashbordRoutingComponents = [ DashbordComponent, DashbordListComponent,
                                            DashbordOverviewComponent, DashbordZiehungComponent ];
