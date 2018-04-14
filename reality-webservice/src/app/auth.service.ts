import {CanActivate, Router} from '@angular/router';
import {AngularFireAuth} from "angularfire2/auth";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(public af: AngularFireAuth, private router: Router) {
	}

	canActivate(): Observable<boolean> {
		return Observable.from(this.af.authState)
			.take(1)
			.map(authState => authState != null)
			.do(authenticated => {
				if(!authenticated) this.router.navigate(['/login']);
			})
	}

	logout(): void {
		this.af.auth.signOut().then(succeeded => {
			this.router.navigate(['/']);
		})
	}

}