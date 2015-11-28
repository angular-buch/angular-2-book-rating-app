// book.ts
export default class Book {
  title: string;
  comment: string;
  rating: number = 0;

  constructor(title, comment) {
    this.title = title;
    this.comment = comment;
  }
}
