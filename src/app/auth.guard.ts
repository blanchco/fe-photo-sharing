import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})

// Redirects to login page if the user is not logged in
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn$.pipe(
      tap((isLoggedIn: boolean) => {
        if(!isLoggedIn) {
          this.router.navigate(['login'])
        }
      })
    );
  }
  
}
