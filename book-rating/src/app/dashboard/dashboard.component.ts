import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../book';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent]
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() {}

  ngOnInit() {
    this.books = [new Book('Angular 2', 'Komponentenorientierte Entwicklung'),
                  new Book('Aurelia', 'by Rob Eisenberg')];
  }

}
