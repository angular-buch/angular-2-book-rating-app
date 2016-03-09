import {Component} from 'angular2/core';

@Component({
  selector: 'dashboard',
  directives: [], // later: BookComponent
  template: `
    <h1>Bücher</h1>
    <p>{{ books }}</p>
   `
})
export class Dashboard {
  books: string[];

  constructor() {
    this.books = ['Angular 2', 'Aurelia'];
  }
}
