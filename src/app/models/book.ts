export default class Book {
  title: string;
  comment: string;
  rating: number;

  constructor(title, comment) {
    this.title = title;
    this.comment = comment;
    this.rating = 0;
  }
}
