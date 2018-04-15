import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'firebase/auth';
import {Router} from '@angular/router';
import {moveIn, fallIn} from '../router.animations';
import {AngularFireAuth} from "angularfire2/auth";
import {AuthGuard} from "../auth.service";

@Component({
	selector: 'app-login-email',
	templateUrl: './login-email.component.html',
	styleUrls: ['./login-email.component.css'],
	animations: [moveIn(), fallIn()],
	//host: {'[@moveIn]': ''}
})
export class LoginEmailComponent implements OnInit {
	state: string = '';
	error: any;

	constructor(public af: AngularFireAuth, private router: Router, private authService: AuthGuard) {
		this.af.authState.subscribe(auth => {
			if (auth) {
				this.router.navigateByUrl('/');
			}
		});
	}


	onSubmit(formData) {
		if (formData.valid) {
			console.log('try login');
			console.log(formData.value.email)
			this.authService.loginWithEmailAndPassword(formData.value.email, formData.value.password).then((credentials) => {
				console.log('success');
				this.router.navigate(['/']);
			}).catch((error) => {
				// Handle Errors here.
				this.error = error;
				console.log('error')
			});
		}
	}

	ngOnInit() {
	}

}
