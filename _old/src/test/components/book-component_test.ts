import { it, describe, expect, inject, beforeEach, beforeEachProviders, fakeAsync, tick } from 'angular2/testing';
import BookComponent from '../../app/components/book-component';
import Book from '../../app/models/book';

describe('Book component', () => {
  beforeEachProviders(() => [BookComponent]);

  var bookComponent:BookComponent;

  beforeEach(inject([BookComponent], (_bookComponent_: BookComponent) => {
    _bookComponent_.book = new Book('Book Title', 'Book Comment');
    bookComponent = _bookComponent_;
  }));

  describe('rateUp', () => {

    it('increases rating', () => {
      expect(bookComponent.book.rating).toBe(0);
      bookComponent.rateUp();
      expect(bookComponent.book.rating).toBe(1);
    });

    it("should call the rated event", inject([], fakeAsync(() => {

      var ratedWasCalled: boolean;
      bookComponent.rated.subscribe((book: Book) => { ratedWasCalled = true });

      bookComponent.rateUp();
      tick();

      expect(ratedWasCalled).toBeTruthy();
    })));
  });

  describe('rateDown', () => {

    it('decreases rating', () => {
      expect(bookComponent.book.rating).toBe(0);
      bookComponent.rateDown();
      expect(bookComponent.book.rating).toBe(-1);
    });

    it("should call the rated event", inject([], fakeAsync(() => {

      var ratedWasCalled: boolean;
      bookComponent.rated.subscribe((book: Book) => { ratedWasCalled = true });

      bookComponent.rateDown();
      tick();

      expect(ratedWasCalled).toBeTruthy();
    })));
  });
});
