import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BookCreateComponent } from './book-create.component';
import { BookDataService } from "../book-data.service";
import { By } from '@angular/platform-browser';


const mockBookDataService = jasmine.createSpyObj('BookDataService', ['addBook']);


describe('BookCreateComponent', () => {
  let component: BookCreateComponent;
  let fixture: ComponentFixture<BookCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BookCreateComponent],
      providers: [
        { provide: BookDataService, useValue: mockBookDataService },
      ],
    });
    fixture = TestBed.createComponent(BookCreateComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should add a book when onAddBook is called', () => {
    let titleInput = fixture.debugElement.query(By.css('#newBookTitle')).nativeElement as HTMLInputElement;
    let subtitleInput = fixture.debugElement.query(By.css('#newBookSubstitle')).nativeElement as HTMLInputElement;

    titleInput.value = "Title"
    subtitleInput.value = "Subtitle"

    component.onAddBook(titleInput, subtitleInput);

    expect(mockBookDataService.addBook).toHaveBeenCalledWith('Title', 'Subtitle');
  });
});
