var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var book_1 = require('../models/book');
var book_component_1 = require('./book-component');
var BookRating = (function () {
    function BookRating() {
        this.books = [
            new book_1.default('Angular 2', 'Eine praktische Einführung'),
            new book_1.default('Die Kunst des klugen Handelns', '52 Irrwege die Sie besser anderen überlassen.')
        ];
    }
    BookRating.prototype.add = function (title, comment) {
        var newBook = new book_1.default(title.value, comment.value);
        this.books.push(newBook);
        title.value = '';
        comment.value = '';
    };
    BookRating.prototype.reorderBooks = function (book) {
        this.books.sort(function (a, b) { return b.rating - a.rating; });
    };
    BookRating = __decorate([
        angular2_1.Component({
            selector: 'book-rating'
        }),
        angular2_1.View({
            directives: [book_component_1.default, angular2_1.NgFor],
            template: "\n     <div class=\"form\">\n       <div class=\"form-group\">\n         <div><label for=\"title\">Title</label></div>\n         <div><input class=\"form-control\" name=\"title\" #title></div>\n       </div>\n       <div class=\"form-group\">\n         <div><label for=\"link\">Comment</label></div>\n         <div><textarea class=\"form-control\" name=\"comment\" #comment></textarea></div>\n       </div>\n       <div class=\"form-group\">\n        <button (click)=\"add(title, comment)\" class=\"btn btn-danger\">Submit</button>\n       </div>\n     </div>\n\n     <hr>\n     <book *ng-for=\"#book of books\" [book]=\"book\" (rated)=\"reorderBooks(book)\"></book>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], BookRating);
    return BookRating;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookRating;
//# sourceMappingURL=book-rating.js.map