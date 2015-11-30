import Book from '../models/book';

export default class BooksApi {

  all(): Array<Book> {
    return [new Book('Angular 1.x', 'Es war schön'),
            new Book('Angular 2', 'Es wird besser =)')]
  }
}
