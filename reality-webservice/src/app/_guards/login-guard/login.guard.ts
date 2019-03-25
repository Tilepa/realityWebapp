import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from "../../_services/login-service/login.service";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor( private loginService: LoginService,
               private routerService: Router ) {

  }

  canActivate( next: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if( !this.loginService.isLoggedIn() ) {
      const redirect = encodeURI(state.url);
      this.routerService.navigate( ['/login'], {queryParams: {redirect: redirect}} )
    }
    return true;
  }
}
