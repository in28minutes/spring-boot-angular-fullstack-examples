import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public auth: AuthenticationService, public router: Router) { }

    canActivate(): boolean {
        if (!this.auth.isUserLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}