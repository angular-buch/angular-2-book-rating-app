// book-rating.ts
import {Component, View, NgFor} from 'angular2/angular2';
import Book from '../models/book';
import BookComponent from './book-component';

@Component({
  selector: 'book-rating'
})
@View({
  directives: [BookComponent, NgFor],
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
     <book *ng-for="#book of books" [book]="book" (rated)="reorderBooks(book)"></book>
   `
})
export default class BookRating {
  books: Array<Book>;

  constructor() {
    this.books = [
      new Book('Angular 2', 'Eine praktische Einführung'),
      new Book('Die Kunst des klugen Handelns', '52 Irrwege die Sie besser anderen überlassen.')
    ];
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
