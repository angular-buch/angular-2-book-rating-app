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

  book: Book;

  constructor() {}

  ngOnInit() {
    this.book = new Book('Angular 2', 'Komponentenorientierte Entwicklung');
  }

}
