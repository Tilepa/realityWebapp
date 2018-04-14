import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {LosnummerComponent} from './losnummer/losnummer.component';
import {BewertungComponent} from './bewertung/bewertung.component';
import {UnternehmenService} from "./_services/unternehmen.service";
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthGuard} from './auth.service';
import {routes} from './app.routes';
import { LoginEmailComponent } from './login-email/login-email.component';
import {AngularFireAuthModule} from "angularfire2/auth";

// Initialize Firebase
export const firebaseConfig = {
	apiKey: 'AIzaSyBc2fw6juv-Q7DaWuJ1Cdkirp2Nvfh7a9g',
	authDomain: 'realitywebapp.firebaseapp.com',
	databaseURL: 'https://realitywebapp.firebaseio.com',
	projectId: 'realitywebapp',
	storageBucket: 'realitywebapp.appspot.com',
	messagingSenderId: '262487866539'
};

@NgModule({
	declarations: [
		AppComponent,
		LosnummerComponent,
		BewertungComponent,
		LoginComponent,
		SignupComponent,
		LoginEmailComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		routes
	],
	providers: [AuthGuard, UnternehmenService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
