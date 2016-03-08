export class BookRatingPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('BookRating-app p')).getText(); }
}
