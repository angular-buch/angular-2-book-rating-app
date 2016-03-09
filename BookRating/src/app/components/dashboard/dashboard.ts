import {Component} from 'angular2/core';
import {Book} from '../../models/book';
import {BookComponent} from '../book-component/book-component';

@Component({
  selector: 'dashboard',
  directives: [BookComponent],
  template: `
     <div class="form">
       <div class="form-group">
         <div><label for="title">Title</label></div>
         <div><input class="form-control" name="title" #title></div>
       </div>
       <div class="form-group">
         <div><label for="link">Comment</label></div>
         <div><textarea class="form-control" name="comment" #comment></textarea></div>
       </div>
       <div class="form-group">
        <button (click)="add(title, comment)" class="btn btn-danger">Submit</button>
       </div>
     </div>

     <hr>
     <book *ngFor="#book of books" [book]="book" (rated)="reorderBooks($event)"></book>`
})
export class Dashboard {
  books: Book[];

  constructor() {
    this.books = [new Book('Angular 2', 'Eine praktische Einführung')];
  }

  add(title, comment) {
    var newBook = new Book(title.value, comment.value);
    this.books.push(newBook);

    title.value = '';
    comment.value = '';
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
