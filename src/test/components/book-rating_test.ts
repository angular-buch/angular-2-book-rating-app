import { it, describe, expect, inject, beforeEach, beforeEachProviders, } from 'angular2/testing';
import { Control } from 'angular2/common';
import BookRating from '../../app/components/book-rating';
import Book from '../../app/models/book';

describe('BookRating component', () => {
  beforeEachProviders(() => [BookRating]);

    var bookRating;
    beforeEach(inject([BookRating], (_bookRating_: BookRating) => {
      bookRating = _bookRating_;
    }))

    it('should have a predefined list of 2 books', () => {
      expect(bookRating.books.length).toBe(2);
    });

    it('should add books to the internal list', () => {

      var titleInput = new Control('Book title');
      var commentInput = new Control('Book comment');

      bookRating.add(titleInput, commentInput);

      expect(bookRating.books.length).toBe(3);
      expect(bookRating.books[2]).toEqual(new Book('Book title', 'Book comment'));
    });

    it('should reorder books by rating', () => {

      var firstBook = new Book('Book 1', 'Comment 1');
      var secondBook = new Book('Book 2', 'Comment 2');

      firstBook.rating = 3;
      secondBook.rating = 10;

      bookRating.books = new Array<Book>(firstBook, secondBook);
      bookRating.reorderBooks(null);

      expect(bookRating.books[0]).toEqual(secondBook);
      expect(bookRating.books[1]).toEqual(firstBook);
    });
});
