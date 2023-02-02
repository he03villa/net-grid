import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthService implements CanActivate {

  constructor(
    private services: ServiceService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user = JSON.parse(localStorage.getItem('dataUser'));
    if (!user) {
      return true;
    }
    let url = 'dashboard';
    this.services.url(url);
    return false;
  }
}
