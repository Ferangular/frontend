import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";

import {ApiModule, Configuration} from "./proxy";
import {apiConfigFactory} from "./core/providers/api-config-factory.provider";




export const appConfig: ApplicationConfig = {
  providers:
  [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    Configuration,
    importProvidersFrom(ApiModule.forRoot(apiConfigFactory)),
  ]
};
