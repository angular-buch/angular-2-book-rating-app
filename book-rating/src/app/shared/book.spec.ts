import {
  describe,
  ddescribe,
  expect,
  iit,
  it,
  beforeEach
} from '@angular/core/testing';
import {Book} from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book('a', 'b', 1)).toBeTruthy();
  });

  it('has a rating of 0', () => {
    expect(new Book('a', 'b').rating).toEqual(0);
  });

  describe('Rating a book', () => {
    let book: Book;

    beforeEach(() => { book = new Book('Title', 'Description'); });

    it('increases the rating by one when it is rated up', () => {
      book.rateUp();

      expect(book.rating).toEqual(1);
    });

    it('decreases the rating by one when it is rated down', () => {
      book.rateDown();

      expect(book.rating).toEqual(-1);
    });
  });
});
