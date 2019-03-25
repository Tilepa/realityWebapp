import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatTabsModule, MatTooltipModule, MatButtonModule, MatFormFieldModule,
  MatInputModule, MatTableModule, MatSortModule
} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { routing, routingComponents, routingGuards } from "./app.routing";
import { UnternehmenService } from "./_services/unternehmen-service/unternehmen.service";
import { LosnummerService } from "./_services/losnummer-service/losnummer.service";

@NgModule({
  declarations: [
    ...routingComponents,
    AppComponent
  ],
  imports: [
    routing,
    MatTabsModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    ...routingGuards,
    Title,
    UnternehmenService,
    LosnummerService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
