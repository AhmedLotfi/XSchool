import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppSettings } from '../helpers/appSettings';
import { JWTTokenService } from '../services/jwttoken.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {

  constructor(
    private authStorageService: LocalStorageService,
    private jwtService: JWTTokenService,
    private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authStorageService.get(AppSettings.KEY_USER_TOKEN)) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }

    //   if (this.jwtService.getUser()) {
    //   if (this.jwtService.isTokenExpired()) {

    //     this.router.navigateByUrl('/login');
    //     return false;

    //   } else {
    //     return true;
    //   }
    // } else {
    //   this.router.navigateByUrl('/login');
    //   return false;
    // }
  }

}
