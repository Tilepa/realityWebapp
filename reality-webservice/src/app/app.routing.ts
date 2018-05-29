import { RouterModule, Routes } from "@angular/router";

import { LosnummerComponent } from "./losnummer/losnummer.component";
import { BewertungComponent } from "./bewertung/bewertung.component";
import { LoginComponent } from "./login/login.component";
import { LoginGuard } from "./_guards/login-guard/login.guard";
import { DASHBORD_ROUTES, dashbordRoutingComponents } from "./dashbord/dashbord.routing";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { LoginService } from "./_services/login-service/login.service";
import { InfoComponent } from './info/info.component';

const ROUTE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'losnummer',
    component: LosnummerComponent
  },
  {
    path: 'bewertung',
    component: BewertungComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashbord',
    component: DashbordComponent,
    canActivate: [LoginGuard],
    children: DASHBORD_ROUTES
  },
  {
    path: '**',
    component: LosnummerComponent
  },
];

export const routing = RouterModule.forRoot(ROUTE_CONFIG);
export const routingGuards = [ LoginGuard, LoginService ];
export const routingComponents = [ LosnummerComponent, BewertungComponent, LoginComponent,
                                    InfoComponent, ...dashbordRoutingComponents ];
