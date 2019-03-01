import { Observable, of, empty } from 'rxjs';
export interface ICantDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
