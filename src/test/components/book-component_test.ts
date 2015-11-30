import { describe, it, inject, expect, beforeEach, beforeEachProviders} from 'angular2/testing';
import { fakeAsync, tick } from 'angular2/testing';
import BooksComponent from '../../app/components/book-component/book-component';
import Book from '../../app/models/book';

describe('Running BookComponent', () => {
  var booksComponent: BooksComponent;
  var book: Book;

  beforeEachProviders(() => [BooksComponent]);
  beforeEach(inject([BooksComponent], (component:BooksComponent) => {
    booksComponent = component;
    book = new Book('Bald ist es vorbei :-(', 'Bald sehen wir uns wieder =)');

    booksComponent.buch = book;
  }));

  describe('Rating up a book', () => {
    it('should increase the rating by 1', () => {
      booksComponent.rateUp();
      expect(booksComponent.buch.rating).toBe(1);
    });

    it('should raise rated event', inject([], fakeAsync(() => {
      var ratedWasCalled: boolean;

      booksComponent.rated.subscribe(() =>
        ratedWasCalled = true);

      booksComponent.rateUp();
      tick();
      
      expect(ratedWasCalled).toBeTruthy();
    }))); // it
  }); // describe


});
