import { Component, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book-response.model';

@Component({
  selector: 'search-table-view',
  templateUrl: './search-table-view.component.html',
  styleUrls: ['./search-table-view.component.scss'],
})
export class SearchTableViewComponent {
  @Input() booksList: Book[] = [];
  @Input() subjectName: string = '';
}
