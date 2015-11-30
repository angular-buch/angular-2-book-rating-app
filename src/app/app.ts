import { bootstrap } from 'angular2/angular2';
import BookRanking from './components/book-rating/book-rating';
import BooksApi from './core/books-api';

bootstrap(BookRanking, [BooksApi]);
