import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  template: `
        <h1>DashBoard</h1>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
