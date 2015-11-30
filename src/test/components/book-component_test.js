var testing_1 = require('angular2/testing');
var book_component_1 = require('../../app/components/book-component');
var book_1 = require('../../app/models/book');
testing_1.describe('Book component', function () {
    testing_1.beforeEachProviders(function () { return [book_component_1.default]; });
    var bookComponent;
    testing_1.beforeEach(testing_1.inject([book_component_1.default], function (_bookComponent_) {
        _bookComponent_.book = new book_1.default('Book Title', 'Book Comment');
        bookComponent = _bookComponent_;
    }));
    testing_1.describe('rateUp', function () {
        testing_1.it('increases rating', function () {
            testing_1.expect(bookComponent.book.rating).toBe(0);
            bookComponent.rateUp();
            testing_1.expect(bookComponent.book.rating).toBe(1);
        });
        testing_1.it("should call the rated event", testing_1.inject([], testing_1.fakeAsync(function () {
            var ratedWasCalled;
            bookComponent.rated.subscribe(function (book) { ratedWasCalled = true; });
            bookComponent.rateUp();
            testing_1.tick();
            testing_1.expect(ratedWasCalled).toBeTruthy();
        })));
    });
    testing_1.describe('rateDown', function () {
        testing_1.it('decreases rating', function () {
            testing_1.expect(bookComponent.book.rating).toBe(0);
            bookComponent.rateDown();
            testing_1.expect(bookComponent.book.rating).toBe(-1);
        });
        testing_1.it("should call the rated event", testing_1.inject([], testing_1.fakeAsync(function () {
            var ratedWasCalled;
            bookComponent.rated.subscribe(function (book) { ratedWasCalled = true; });
            bookComponent.rateDown();
            testing_1.tick();
            testing_1.expect(ratedWasCalled).toBeTruthy();
        })));
    });
});
//# sourceMappingURL=book-component_test.js.map