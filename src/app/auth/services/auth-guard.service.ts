import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;

    // return this.authService.isAuthenticated();

    
    // return this.authService.isLoggedin();

    // if (this.authService.isLoggedin()) {
    //   return true;
    // }

    // console.log('Route blocked by AuthGuardService');
    // this.router.navigate(['/auth']);
    // return false;
  }
}
