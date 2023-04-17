import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginInGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    if(!localStorage.getItem('id')){
      return true;
    }else{
    this.router.navigate(['/in']);
    return false;
    }

  }

}
