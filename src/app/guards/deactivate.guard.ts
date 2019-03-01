import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ICantDeactivate } from '../common/ICanDeactivate';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<ICantDeactivate> {
  canDeactivate(component: ICantDeactivate, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot)
    : boolean | Observable<boolean> | Promise<true> {
    if (!component.canDeactivate()) {
        return confirm('Changes were made. Do you want to exit and lose the changes?');
    }
    return true;
  }
}
