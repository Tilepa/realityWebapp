import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'firebase/auth';
import {Router} from '@angular/router';
import {moveIn, fallIn} from '../router.animations';
import {AngularFireAuth} from "angularfire2/auth";
import {AuthGuard} from ".././auth.service";

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
	animations: [moveIn(), fallIn()],
	host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
	state: string = '';
	error: any;

	constructor(public af: AngularFireAuth, private router: Router, public authService: AuthGuard) {
	}

	onSubmit(formData) {
		if (formData.valid) {
			this.authService.createUserByEmailAndPassword(formData.value.email, formData.value.password).then((credentials) => {
				this.router.navigate(['/'])
			}).catch((error) => {
				this.error = error
			})
		}
	}

	ngOnInit() {
	}

}
