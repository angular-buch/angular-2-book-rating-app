import { it, describe, expect, inject, beforeEachProviders, } from 'angular2/testing';
import BookRating from '../../app/components/book-rating';

describe('BookRating component', () => {
  beforeEachProviders(() => [BookRating]);

    it('should have a predefined list of 2 books', inject([BookRating], (bookRating: BookRating) => {
      expect(bookRating.books.length).toBe(2);
    }));
});
