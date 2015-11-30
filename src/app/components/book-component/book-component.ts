import { Component, View, Input } from 'angular2/angular2';
import Book from '../../models/book';

@Component({
  selector: 'book'
})
@View({
  template: `
    <div class="well">
      <div class="thumbnail pull-right">
        <img src="//gravatar.com/avatar/{{ buch.rating }}?s=80&default=wavatar"/>
      </div>
      <h2>{{ buch.title }} <small>Stars {{ buch.rating }}</small></h2>
      <p> {{ buch.comment }} </p>
    </div>
  `
})
export default class BookComponent {
  @Input() buch: Book;
}
