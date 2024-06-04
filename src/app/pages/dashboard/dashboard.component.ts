import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {LoginService} from "../auth/services/login.service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1 class="m-t-3">Dashboard</h1>
    <hr>

    <h3>User</h3>
    <pre>{{ user() | json }}</pre>


    <br>
    <!-- <span routerLink="/auth/login">Ir a login</span> -->

    <button class="btn-logout" (click)="onLogout()">
      Cerrar Sesión
    </button>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  private authService = inject( LoginService );

  public user = computed(() => this.authService.currentUser() );

  onLogout() {
    this.authService.logout();
  }
}
