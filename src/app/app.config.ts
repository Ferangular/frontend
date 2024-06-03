import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {CoreProvider} from "./core/providers/core.provider";



export const appConfig: ApplicationConfig = {
  providers:
  [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    // CoreProvider()
  ]
};
