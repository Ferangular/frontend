import { inject } from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {LoginService} from "../../pages/auth/services/login.service";
import {AuthStatus} from "../interfaces";

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject( LoginService );
  const router      = inject( Router );

  if ( authService.authStatus() === AuthStatus.authenticated ) {
    return true;
  }

  // if ( authService.authStatus() === AuthStatus.checking ) {
  //   return false;
  // }

  // const url = state.url;
  // localStorage.setItem('url', url);
  router.navigateByUrl('/auth/login');
  return false;
};
