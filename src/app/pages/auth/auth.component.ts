import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet

  ],
  template: `
    <h1> Auth   </h1>
<router-outlet/>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {

}
