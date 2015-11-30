var testing_1 = require('angular2/testing');
var common_1 = require('angular2/common');
var book_rating_1 = require('../../app/components/book-rating');
var book_1 = require('../../app/models/book');
testing_1.describe('BookRating component', function () {
    var bookRating;
    testing_1.beforeEachProviders(function () { return [book_rating_1.default]; });
    testing_1.beforeEach(testing_1.inject([book_rating_1.default], function (_bookRating_) {
        bookRating = _bookRating_;
    }));
    testing_1.it('should have a predefined list of 2 books', function () {
        testing_1.expect(bookRating.books.length).toBe(2);
    });
    testing_1.it('should add books to the internal list', function () {
        var titleInput = new common_1.Control('Book title');
        var commentInput = new common_1.Control('Book comment');
        bookRating.add(titleInput, commentInput);
        testing_1.expect(bookRating.books.length).toBe(3);
        testing_1.expect(bookRating.books[2]).toEqual(new book_1.default('Book title', 'Book comment'));
    });
    testing_1.it('should reorder books by rating', function () {
        var firstBook = new book_1.default('Book 1', 'Comment 1');
        var secondBook = new book_1.default('Book 2', 'Comment 2');
        firstBook.rating = 3;
        secondBook.rating = 10;
        bookRating.books = new Array(firstBook, secondBook);
        bookRating.reorderBooks(null);
        testing_1.expect(bookRating.books[0]).toEqual(secondBook);
        testing_1.expect(bookRating.books[1]).toEqual(firstBook);
    });
});
//# sourceMappingURL=book-rating_test.js.map