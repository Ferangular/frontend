import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../../../proxy/model/user';
import { AuthStatus } from '../../../core/interfaces/auth-status.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { catchError, map, Observable, of } from 'rxjs';
import { LoginResponse } from '../../../core/interfaces/login-response.interface';
import {  CheckTokenResponse } from '../../../core/interfaces';
import {AuthService} from "../../../proxy";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly baseUrl: string = environment.basePath;
  private http = inject( HttpClient );
  private authServiceProxy = inject(AuthService);
  private router = inject(Router)

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  //! Al mundo exterior
  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );


  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token:string): boolean {
    this._currentUser.set( user );
    this._authStatus.set( AuthStatus.authenticated );
    localStorage.setItem('token', token);
    return true;
  }

  login(email: string, password: string): Observable<boolean> {
    const body = { email, password };

    return this.authServiceProxy.authControllerLogin(body).pipe(
      map((response: LoginResponse) => {
        this.setAuthentication(response.user, response.token);
        return true;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  checkAuthStatus():Observable<boolean> {

    const url   = `${ this.baseUrl }/auth/check-token`;
    const token = localStorage.getItem('token');

    if ( !token ) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`);


      return this.http.get<CheckTokenResponse>(url, { headers })
        .pipe(
          map( ({ user, token }) => this.setAuthentication( user, token )),
          catchError(() => {
            this._authStatus.set( AuthStatus.notAuthenticated );
            return of(false);
          })
        );


  }

  logout() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set( AuthStatus.notAuthenticated );
  this.router.navigate([''])
  }

}
