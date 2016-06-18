export class Book {
  id: String; 
  
  constructor(public title: string,
              public description: string,
              public rating: number = 0) {
    this.id = Math.random().toString(36).substr(2, 9);  
  }

  rateUp() {
    this.rating++;
  }

  rateDown() {
    if(this.rating - 1 < 0) return;
    this.rating--;
  }
}
