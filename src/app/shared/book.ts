export class Book {
  
  constructor(public title: string,
              public description: string,
              public rating: number = 0,
              public isbn: string = "") {
    this.isbn = isbn || Math.random().toString(36).substr(2, 9);  
  }

  rateUp() {
    this.rating++;
  }

  rateDown() {
    if(this.rating - 1 < 0) return;
    this.rating--;
  }
}
