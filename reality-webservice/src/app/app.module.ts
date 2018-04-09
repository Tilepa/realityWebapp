import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { LosnummerComponent } from './losnummer/losnummer.component';
import { BewertungComponent } from './bewertung/bewertung.component';
import { UnternehmenService } from "./_services/unternehmen.service";

const routes: Routes = [
  { path: 'losnummer', component: LosnummerComponent },
  { path: 'bewertung', component: BewertungComponent },
  { path: '**', component: LosnummerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LosnummerComponent,
    BewertungComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UnternehmenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
