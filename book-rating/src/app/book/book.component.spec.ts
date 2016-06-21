/* tslint:disable:no-unused-variable */

import {
  beforeEachProviders, describe, expect, it
} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {Book} from '../shared';

describe('Rate a book', () => {
  beforeEachProviders(() => [BookComponent]);

  it('should increase the rating by one', () => {
    let component = new BookComponent();
    
    component.book = new Book('title', 'description');
    component.rateUp();

    expect(component.book.rating).toBe(1);
  });
});