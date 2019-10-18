import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {HardcodedAuthenticationService} from "./hardcoded-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private  hardcodedAuth : HardcodedAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuth.isUserLoggedIn())
      return true;
    return false;
  }
}
