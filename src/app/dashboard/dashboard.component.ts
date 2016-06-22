import { Component, OnInit } from '@angular/core';

import { BookComponent } from '../book';
import { CreateBookComponent } from '../create-book';
import { Book } from '../shared';
import { BookStoreService } from '../services/book-store.service';
import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent, CreateBookComponent]
})
export class DashboardComponent implements OnInit {

  books: Book[];
  updated: Book;

  constructor(private bs: BookStoreService, private http: Http) {}

  ngOnInit() {
    this.updateBooks();
  }

  add(book: Book) {
    this.bs.addBook(book);
  }

  sort(book: Book) {
    this.updateBooks();
    this.updated = book;
    this.books.sort((current, next) => next.rating - current.rating);
  }

  updateBooks() {
    //this.books = this.bs.getAll();

    this.http
      .get('http://book-monkey2-api.angular2buch.de/books') // PLURAL S!
      .subscribe(response => {
        this.books = response.json();
      });
  }
}
