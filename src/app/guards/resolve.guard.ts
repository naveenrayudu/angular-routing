import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, empty } from 'rxjs';
import { IUser } from '../common/IUser';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<IUser> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
    const userString = localStorage.getItem('users');
    if (userString) {
      const users: IUser[] = JSON.parse(userString);
      const user = users.find(t => t.id === +route.queryParamMap.get('id'));
      if (user) {
        return of(user).pipe(delay(2000));
      }
    }

    return null;
  }
}
