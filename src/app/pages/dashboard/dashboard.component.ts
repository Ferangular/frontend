import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {AuthService} from "../auth/services/auth.service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1>Dashboard</h1>
    <hr>

    <h3>User</h3>
    <pre>{{ user() | json }}</pre>


    <br>
    <!-- <span routerLink="/auth/login">Ir a login</span> -->

    <button (click)="onLogout()">
      Cerrar Sesión
    </button>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  private authService = inject( AuthService );

  public user = computed(() => this.authService.currentUser() );

  onLogout() {
    this.authService.logout();
  }
}
