import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Book} from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book('a', 'b', 1)).toBeTruthy();
  });

  it('has a rating of 0', () => {
    expect(new Book('a', 'b').rating).toEqual(0);
  });
});
