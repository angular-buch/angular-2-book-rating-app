import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {BookRatingApp, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(BookRatingApp);
