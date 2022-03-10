import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ManagmentServiceService } from './managment-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private _loginService: ManagmentServiceService, private router: Router) {

  }
  canActivate(): boolean {
    if(this._loginService.loggedIn()){
      return true;
    }
    else {
      this.router.navigate(['']);
      return false;
    }
  }
  
}
