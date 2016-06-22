import { Component, OnInit } from '@angular/core';

import { BookComponent } from '../book';
import { CreateBookComponent } from '../create-book';
import { Book } from '../shared';
import { BookStoreService } from '../services/book-store.service';
import { Observable } from 'rxjs/Observable';

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

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.updateBooks();
  }

  add(book: Book) {
    this.bs.create(book)
      .subscribe(params => {
        this.updateBooks();
      })
  }

  delete(isbn: string) {
    this.bs.delete(isbn)     
      .subscribe(params => {
        this.updateBooks();
      })
  }

  sort(book: Book) {
    //this.updateBooks();
    this.updated = book;
    this.books.sort((current, next) => next.rating - current.rating);
  }

  updateBooks() {
    return this.bs.getAll().subscribe(books => {
      this.books = books;
    });
  }
}
