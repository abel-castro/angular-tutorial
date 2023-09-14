import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from './book.model';


/**
 * This is a service for retrieving book data.
 * You can use it to fetch books from the bookmonkey-api.
 *
 * @see {@link https://github.com/workshops-de/bookmonkey-api}
 * @example
 * // To start the bookmonkey-api server, run:
 * // `npx bookmonkey-api`
 */
@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  manuallyCreatedBooks: Book[] = [];

  constructor(private http: HttpClient) { }

  /**
   * Get a list of books from the API.
   *
   * @returns An Observable that emits the list of books.
   */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:4730/books").pipe(
      catchError((error: any) => {
        console.error("Error fetching books:", error);
        // Return an empty array in case of an error
        return of([] as Book[]);
      }),
      tap((books: Book[]) => {
        // Save the data to manuallyCreatedBooks when the HTTP request succeeds
        this.manuallyCreatedBooks = books;
      })
    );
  }

  addBook(title: string, subtitle: string): Book[] {
    const newBook: Book = {
      title: title,
      subtitle: subtitle
    };
    // Add the new book to the local array
    this.manuallyCreatedBooks.unshift(newBook);
    return this.manuallyCreatedBooks
  }
}




