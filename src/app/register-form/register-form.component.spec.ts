import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailFieldComponent } from '../email-field/email-field.component';
import { NameFieldComponent } from '../name-field/name-field.component';


describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent, EmailFieldComponent, NameFieldComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
    });
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Form Initialization and Validation', () => {
    it('should create the form with email control', () => {
      expect(component.registerForm).toBeTruthy();
      expect(component.registerForm.get('email')).toBeTruthy();
    });

    it('should create the form with name control', () => {
      expect(component.registerForm).toBeTruthy();
      expect(component.registerForm.get('name')).toBeTruthy();
    });

    it('will ensure that the for is only valid when name and email are fill', () => {
      let emailControl = component.registerForm.get('email');
      let nameControl = component.registerForm.get('name');
      emailControl.setValue('');
      nameControl.setValue('name');
      expect(component.registerForm.valid).toBeFalsy()
      expect(emailControl.valid).toBeFalsy();
      expect(emailControl.hasError('required')).toBeTruthy();
      expect(nameControl.valid).toBeTruthy()

      emailControl.setValue('a@email.com');
      expect(component.registerForm.valid).toBeTruthy()
      expect(emailControl.valid).toBeTruthy();
      expect(nameControl.valid).toBeTruthy()

      nameControl.setValue('');
      expect(component.registerForm.valid).toBeFalsy()
      expect(nameControl.valid).toBeFalsy();
      expect(nameControl.hasError('required')).toBeTruthy();
      expect(emailControl.valid).toBeTruthy()
    });
  });

});


