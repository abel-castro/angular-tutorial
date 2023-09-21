import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
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

    it('should mark email control as invalid if empty', () => {
      let emailControl = component.registerForm.get('email');
      emailControl.setValue('');
      expect(emailControl.valid).toBeFalsy();
      expect(emailControl.hasError('required')).toBeTruthy();
    });

    it('should mark email control as invalid if invalid email format', () => {
      let emailControl = component.registerForm.get('email');
      emailControl.setValue('invalid-email');
      expect(emailControl.valid).toBeFalsy();
      expect(emailControl.hasError('email')).toBeTruthy();
    });

    it('should mark email control as valid if valid email format', () => {
      let emailControl = component.registerForm.get('email');
      emailControl.setValue('valid@example.com');
      expect(emailControl.valid).toBeTruthy();
    });
  });

  describe('Form Submission', () => {
    it('should call onSubmit method when form is submitted', () => {
      spyOn(component, 'onSubmit');
      const submitButton = fixture.debugElement.nativeElement.querySelector('button');
      submitButton.click();
      expect(component.onSubmit).toHaveBeenCalled();
    });

    it('should call onSubmit method with valid email when form is submitted', () => {
      spyOn(component, 'onSubmit');
      let emailControl = component.registerForm.get('email');
      emailControl.setValue('valid@example.com');
      const submitButton = fixture.debugElement.nativeElement.querySelector('button');
      submitButton.click();
      expect(component.onSubmit).toHaveBeenCalledWith();
    });
  });

});


