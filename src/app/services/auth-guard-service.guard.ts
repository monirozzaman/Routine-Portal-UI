import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      console.log(this.authService.isLoggedIn());
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }

  }


}
