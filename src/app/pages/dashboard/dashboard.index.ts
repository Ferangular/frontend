import { DashboardComponent } from "./dashboard.component";


export const DASHBOARD_ROUTE = [
  { path: '' , Component: DashboardComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent}
    ]
  }
]
