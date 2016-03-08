import {bootstrap} from 'angular2/platform/browser';
import {BookRatingApp} from './app/book-rating';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(BookRatingApp, [
  ROUTER_PROVIDERS
]);
