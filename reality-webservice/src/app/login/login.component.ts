import { Component, OnInit } from '@angular/core';
import { LoginService } from "../_services/login-service/login.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService,
               private routerService: Router,
               private activatedRoute: ActivatedRoute ) {
  }

  ngOnInit() {
  }

  logIn( username: string, password: string ) {
    const result = this.loginService.logIn( username, password );
    if( result ) {
      const queryParams = this.activatedRoute.snapshot.queryParams;
      const redirect = queryParams[ 'redirect' ] || '/';
      this.routerService.navigateByUrl( decodeURI( redirect ) );
    }
  }

}
