import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {BookRatingApp} from '../app/book-rating';

beforeEachProviders(() => [BookRatingApp]);

describe('App: BookRating', () => {
  it('should have the `defaultMeaning` as 42', inject([BookRatingApp], (app: BookRatingApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([BookRatingApp], (app: BookRatingApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

