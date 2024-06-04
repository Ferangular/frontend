import {Component, computed, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {LoginService} from "./pages/auth/services/login.service";
import {AuthStatus} from "./core/interfaces";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container-fluid">
      @if(!finishedAuthCheck()){
        <h1>Loading</h1>
      }

      @if(finishedAuthCheck()){
        <router-outlet></router-outlet>
      }

  </div>
  `,
})
export class AppComponent {
  title = 'frontend';

  private authService = inject( LoginService );
  private router = inject( Router );

  finishedAuthCheck = computed<boolean>(()=>{
    console.log(this.authService.authStatus());
    if ( this.authService.authStatus() === AuthStatus.checking ) {
      return false;
    }

    return true;
  })

}
