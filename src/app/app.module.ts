import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent as BookCreateComponent } from './book-create/book-create.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { NameFieldComponent } from './name-field/name-field.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    EmailFieldComponent,
    NameFieldComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
