import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import * as firebase from "firebase";
import {AuthGuard} from "../auth.service";

@Component({
	selector: 'app-reality-menu',
	templateUrl: './reality-menu.component.html',
	styleUrls: ['./reality-menu.component.css']
})
export class RealityMenuComponent implements OnInit {

	constructor(public at: AngularFireAuth, private router: Router, public auth: AuthGuard) {
	}

	ngOnInit() {
	}

	isLoggedIn() {
		return firebase.auth().currentUser !== null
	}

	logOut() {
		this.at.auth.signOut().then(succeeded => {
			this.router.navigateByUrl('/login');
		})

	}

}
