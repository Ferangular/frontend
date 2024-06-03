import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './pages/auth/services/auth.service';
import { AuthStatus } from './core/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template:`
  <h1>app</h1>
<!-- @if(!finishedAuthCheck()){
  <h1 >  ...Loading  </h1>
}

@if(finishedAuthCheck()){
  <router-outlet />
} -->
<router-outlet/>
  `,

})
export class AppComponent {
  title = 'frontend';
  private authService = inject( AuthService );
  private router = inject( Router );

  public finishedAuthCheck = computed<boolean>( () => {
    console.log(this.authService.authStatus() )
    if ( this.authService.authStatus() === AuthStatus.checking ) {
      return false;
    }

    return true;
  });

  // public authStatusChangedEffect = effect(() => {
  //
  //   switch( this.authService.authStatus() ) {
  //
  //     case AuthStatus.checking:
  //       return;
  //
  //     case AuthStatus.authenticated:
  //       this.router.navigateByUrl('/dashboard');
  //       return;
  //
  //     case AuthStatus.notAuthenticated:
  //       this.router.navigateByUrl('/auth/login');
  //       return;
  //
  //   }
  //
  //
  //
  //
  // });
}
