import { Injectable } from '@angular/core';
import { CanActivate, 
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  isLoggedIn = false;

  constructor(private router : Router,
    private token: TokenStorageService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

      this.isLoggedIn = !!this.token.getToken();
          
      if(this.isLoggedIn){
        return true;
      }
      else {
        this.router.navigate(['/auth']); //<-- redirige vers /auth
        
      }
    }
        
}
    
  