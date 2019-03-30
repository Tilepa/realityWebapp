import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListnotificationsComponent } from './mongodbtest/listnotifications/listnotifications.component';
import { BreadcrumbtitleComponent } from './utils/breadcrumbtitle/breadcrumbtitle.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ListnotificationsComponent,
    BreadcrumbtitleComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
