import {
    it,
    describe,
    expect,
    inject,
    beforeEach,
    beforeEachProviders
} from 'angular2/testing';
import { Control } from 'angular2/common';
import BookRating from '../../app/components/book-rating/book-rating';
import BooksApi from '../../app/core/books-api';
import Book from '../../app/models/book';

describe('Running BookRating', () => {
  // Laden der component
  beforeEachProviders(() => [BookRating, BooksApi]);

  var bookRating:BookRating;

  beforeEach(inject([BookRating], (_bookRating_: BookRating) => {
    bookRating = _bookRating_;
  }));

  it('should contain two books', () => {
    expect(bookRating.books.length).toBe(2);
  });

  it('should be able to add a new book', () => {
    var title = new Control('My Title');
    var comment = new Control('My Comment');
    console.log(bookRating);
    bookRating.add(title, comment);

    expect(bookRating.books.length).toBe(3);
    expect(bookRating.books[2].title).toBe('My Title');
  })

  describe('Reorder th books',  () => {
    var bookRated10 = new Book('10','a');
        bookRated10.rating = 10;

    var bookRated20 = new Book('20','a');
        bookRated20.rating = 20;

    it('should reorder the books with the highes rating first', () => {
      bookRating.books = [bookRated10, bookRated20];

      bookRating.reorderBooks(null);

      // toBe === // toEqual ==
      expect(bookRating.books[0]).toBe(bookRated20);
    })
  })
});
