import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';

import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { NameFieldComponent } from './name-field/name-field.component';


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    declarations: [AppComponent, BookCreateComponent, BookListComponent, RegisterFormComponent, EmailFieldComponent, NameFieldComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
