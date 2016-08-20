import { BookRatingWebpackPage } from './app.po';

describe('book-rating-webpack App', function() {
  let page: BookRatingWebpackPage;

  beforeEach(() => {
    page = new BookRatingWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
