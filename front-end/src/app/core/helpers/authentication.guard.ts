import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private _storage: StorageService, private _router: Router) {
  }

  canActivate(): boolean {
    if (!this._storage.existUser()) {
      this._router.navigateByUrl('/login')
    }
    return true;
  }

}
