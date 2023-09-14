import { Component } from '@angular/core';
import { BookDataService } from "../book-data.service";
import { Observable } from "rxjs";
import {Book} from "../book.model";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books$: Observable<Book[]>;

 constructor(private bookData: BookDataService) {
   this.books$ = this.bookData.getBooks();
 }
}