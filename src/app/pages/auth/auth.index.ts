
import { Component } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const AUTH_ROUTES = [
  { path: '' , Component: AuthComponent,
    childre: [
      { path: '',Component:LoginComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
]
