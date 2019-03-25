import { Component, OnInit } from '@angular/core';
import { LoginService } from "./_services/login-service/login.service";
import { Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WILLKOMMEN';
  isLoggendIn: boolean;

  constructor( private loginService: LoginService ) {
  }

  ngOnInit() {
    this.updateLoginStatus();
    // this.loginService.logOut();
  }

  logOut() {
    this.loginService.logOut();
    this.updateLoginStatus();
  }

  private updateLoginStatus(): void {
    // this.loginService.isLoggendIn.subscribe( (value) => {
    //     this.isLoggendIn = value;
    //   }
    // );
    this.isLoggendIn = this.loginService.isLoggedIn();
  }
}
