import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookDataService } from './book-data.service';
import { Book } from './book.model';


describe('BookDataService', () => {
  let service: BookDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BookDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getBooks', () => {
    it('expects that getBooks return an exmpty array when there is no data', () => {
      service.getBooks().subscribe((books: Book[]) => {
        expect(books).toEqual([]);
      });
    });

    it('expects that getBooks returns a book', () => {
      const newBook: Book = {
        title: 'Sample Title',
        subtitle: 'Sample Subtitle',
      };

      const otherBook: Book = {
        title: 'Other Title',
        subtitle: 'Other Subtitle',
      };

      service.manuallyCreatedBooks = [newBook];

      service.getBooks().subscribe((books: Book[]) => {
        expect(books).toBe([otherBook]);
      });
    });
  });

  describe('addBook', () => {
    const newBook: Book = {
      title: 'Sample Title',
      subtitle: 'Sample Subtitle',
    };
    const expectedBooks: Book[] = [newBook]

    it('creates a new book', () => {
      expect(service.addBook(newBook.title, newBook.subtitle)).toEqual(expectedBooks);
    });
  });
});
