/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BookStoreService } from './book-store.service';

describe('BookStore Service', () => {
  beforeEachProviders(() => [BookStoreService]);

  it('should ...',
      inject([BookStoreService], (service: BookStoreService) => {
    expect(service).toBeTruthy();
  }));
});
