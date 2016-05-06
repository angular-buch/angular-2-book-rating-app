import {it, describe, expect, inject, beforeEachProviders} from '@angular/core/testing';
import {BookComponent} from './book-component';
import {Book} from '../../models/book';

describe('BookComponent', () => {
  beforeEachProviders(() => [BookComponent]);

  it('should increase book rating on rateUp()', inject([BookComponent], (bookComponent: BookComponent) => {

    bookComponent.book = new Book('Test Title', 'Test Comment');
    bookComponent.rateUp();

    expect(bookComponent.book.rating).toBe(1);
  }));
});
