import { Component, View} from 'angular2/angular2';
import { Control } from 'angular2/angular2';
import BookComponent from '../book-component/book-component';
import Book from '../../models/book';

@Component({
  selector: 'book-rating'
})
@View({
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
   <book *ng-for="#book of books" [buch]="book"></book>
  `,
  directives: [BookComponent]
})
export default class BookRating {
  books: Array<Book>;

  constructor() {
    this.books = [
      new Book('Angular 1.x', 'Es war schön'),
      new Book('Angular 2', 'Es wird besser =)')];
  }

  add(title: Control, comment: Control) {
    this.books.push(
      new Book(title.value, comment.value)
    );

    title.value = '';
    comment.value = '';
  }
}
