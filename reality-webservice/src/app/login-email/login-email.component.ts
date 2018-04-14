import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'firebase/auth';
import {Router} from '@angular/router';
import {moveIn, fallIn} from '../router.animations';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
	selector: 'app-login-email',
	templateUrl: './login-email.component.html',
	styleUrls: ['./login-email.component.css'],
	animations: [moveIn(), fallIn()],
	host: {'[@moveIn]': ''}
})
export class LoginEmailComponent implements OnInit {
	state: string = '';
	error: any;

	constructor(public af: AngularFireAuth, private router: Router) {
		this.af.authState.subscribe(auth => {
			if (auth) {
				this.router.navigateByUrl('/losnummer');
			}
		});
	}


	onSubmit(formData) {
		if (formData.valid) {
			console.log(formData.value);
			this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.pasword).then(
				(success) => {
					console.log(success);
					this.router.navigate(['/losnummer']);
				}).catch(
				(err) => {
					console.log(err);
					this.error = err;
				})
		}
	}

	ngOnInit() {
	}

}
