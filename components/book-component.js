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
var BookComponent = (function () {
    function BookComponent() {
        this.rated = new angular2_1.EventEmitter();
    }
    ;
    BookComponent.prototype.rateUp = function () {
        this.book.rating++;
        this.rated.next(this.book);
    };
    BookComponent.prototype.rateDown = function () {
        this.book.rating--;
        this.rated.next(this.book);
    };
    BookComponent = __decorate([
        angular2_1.Component({
            selector: 'book',
            inputs: ['book'],
            outputs: ['rated']
        }),
        angular2_1.View({
            template: "\n    <div class=\"well\">\n      <div class=\"thumbnail pull-right\">\n        <img src=\"//gravatar.com/avatar/{{ book.rating }}?s=80&default=wavatar\"/>\n      </div>\n      <h2>{{ book.title }} <small>Stars {{ book.rating }}</small></h2>\n      <p>{{ book.comment }}</p>\n\n      <button (click)=\"rateUp()\" class=\"btn btn-default glyphicon glyphicon-thumbs-up\"></button>\n      <button (click)=\"rateDown()\" class=\"btn btn-default glyphicon glyphicon-thumbs-down\"></button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BookComponent);
    return BookComponent;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookComponent;
//# sourceMappingURL=book-component.js.map