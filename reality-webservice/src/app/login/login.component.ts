import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {moveIn} from '../router.animations';
import {AuthGuard} from "../auth.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [moveIn()],
	host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
	error: any;

	constructor(public af: AngularFireAuth, private router: Router, private authService: AuthGuard) {

		this.af.authState.subscribe(auth => {
			if (auth) {
				this.router.navigateByUrl('/');
			}
		});

	}

	loginFb() {
		this.authService.facebookLogin().then((succeeded) => {
			this.router.navigate(['/']);
		})
	}

	loginGoogle() {
		this.authService.googleLogin().then((succeeded) => {
			this.router.navigate(['/']);
		})
	}

	ngOnInit() {

	}
}
