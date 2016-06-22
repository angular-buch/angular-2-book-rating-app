import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent, environment, AppRoutes } from './app/';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, 
  provideRouter(AppRoutes)
]);

