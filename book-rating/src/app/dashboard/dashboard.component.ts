import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../book';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  directives: [BookComponent]
})
export class DashboardComponent implements OnInit {

  books: Book[];

  ngOnInit() {
    this.books = [
      new Book('Angular 2', 'Einstieg in die komponentenbasierte Entwicklung'),
      new Book('Bericht DWX 2016', 'Das haben wir erlebt')];
  }

  add(title, comment) {
    var newBook = new Book(title.value, comment.value);
    this.books.push(newBook);
    title.value = comment.value = '';
  }
}
