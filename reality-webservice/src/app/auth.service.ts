import {CanActivate, Router} from '@angular/router';
import {AngularFireAuth} from "angularfire2/auth";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import * as firebase from "firebase";

interface User {
	uid: string;
	email: string;
	displayName?: string;
}

@Injectable()
export class AuthGuard implements CanActivate {

	user: Observable<User>

	constructor(public af: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
		//// Get auth data, then get firestore user document || null
		this.user = this.af.authState
			.switchMap(user => {
				if (user) {
					return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
				} else {
					return Observable.of(null)
				}
			})
	}

	canActivate(): Observable<boolean> {
		return Observable.from(this.af.authState)
			.take(1)
			.map(authState => authState != null)
			.do(authenticated => {
				if(!authenticated) this.router.navigate(['/login']);
			})
	}

	googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider()
		return this.oAuthLogin(provider);
	}

	facebookLogin() {
		const provider = new firebase.auth.FacebookAuthProvider()
		return this.oAuthLogin(provider)
	}

	loginWithEmailAndPassword(email: string, password: string) {
		return this.af.auth.signInWithEmailAndPassword(email, password);
	}

	private oAuthLogin(provider) {
		return this.af.auth.signInWithPopup(provider)
			.then((credential) => {
				this.updateUserData(credential.user)
			})
	}

	createUserByEmailAndPassword(email: string, password: string) {
		return this.af.auth.createUserWithEmailAndPassword(email, password)
			.then((credential) => {
				const updatedValues: User = {
					uid: credential.user.uid,
					email: credential.user.email,
					displayName: credential.user.displayName
				}
				this.updateUserData(updatedValues)
			})
	}


	private updateUserData(user) {
		// Sets user data to firestore on login

		const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

		const data: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName
		}

		return userRef.set(data, { merge: true })

	}

	logout(): void {
		this.af.auth.signOut().then(succeeded => {
			this.router.navigate(['/']);
		})
	}

}