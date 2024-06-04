import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "../../pages/auth/services/login.service";
import {AuthStatus} from "../interfaces";

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject( LoginService );
  const router      = inject( Router );

  if ( authService.authStatus() === AuthStatus.authenticated ) {
    router.navigateByUrl('/dashboard');
    return false;
  }

  return true;
};
