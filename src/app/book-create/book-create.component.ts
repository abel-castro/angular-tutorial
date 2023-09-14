import { Component } from '@angular/core';
import { BookDataService } from "../book-data.service";


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {
  constructor(private bookDataService: BookDataService) {
    this.bookDataService = bookDataService;
  }
  
  onAddBook(newBookTitleInput: HTMLInputElement, newBookSubtitleInput: HTMLInputElement) {
    const title: string = newBookTitleInput.value
    const subtitle: string = newBookSubtitleInput.value
    this.bookDataService.addBook(title, subtitle)

    newBookTitleInput.value = '';
    newBookSubtitleInput.value = '';
  }
}
