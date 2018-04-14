import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './auth.service';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {BewertungComponent} from './bewertung/bewertung.component';
import {LosnummerComponent} from './losnummer/losnummer.component';
import {LoginEmailComponent} from "./login-email/login-email.component";

export const router: Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'signup', component: SignupComponent},
	{path: 'email', component: LoginEmailComponent},
	{path: 'losnummer', component: LosnummerComponent, canActivate: [AuthGuard]},
	{path: 'bewertung', component: BewertungComponent, canActivate: [AuthGuard]}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
