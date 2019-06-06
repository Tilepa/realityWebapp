import {Injectable} from '@angular/core';
import {Benutzer} from '../../_models/benutzer';
import {Observable} from 'rxjs/internal/Observable';
import {Observer} from 'rxjs/internal/types';

const CURRENT_USER = null;

@Injectable()
export class LoginService {
  USERS: Benutzer[] = [
    new Benutzer('admin', 'reality'),
    new Benutzer('gast', '1234')
  ];

  loggedIn: Observable<boolean>;

  constructor() {
    this.updateLoggedInObservable();
  }

  logIn(username, password): boolean {
    const [user] = this.USERS.filter(user_ => user_.userName === username);
    if (user && user.password === password) {
      localStorage.setItem(CURRENT_USER, JSON.stringify(user));
      this.updateLoggedInObservable();
      return true;
    }
  }

  logOut() {
    localStorage.removeItem(CURRENT_USER);
    this.updateLoggedInObservable();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(CURRENT_USER) != null;
  }

  updateLoggedInObservable(): void {
    this.loggedIn = Observable.create((observer: Observer<boolean>) => {
      observer.next(this.isLoggedIn());
    })
  }
}
