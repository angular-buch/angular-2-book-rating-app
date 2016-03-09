import {Component} from 'angular2/core';
import {Dashboard} from './components/dashboard/dashboard';

@Component({
  selector: 'book-rating-app',
  template: `<dashboard></dashboard>`,
  directives: [Dashboard]
})
export class BookRatingApp {}
