import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailFieldComponent } from './email-field.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


describe('EmailFieldComponent', () => {
  let component: EmailFieldComponent;
  let fixture: ComponentFixture<EmailFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailFieldComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFieldComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup([])
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form control for email', () => {
    expect(component.emailControl).toBeTruthy();
  });

  it('should mark email control as invalid if empty', () => {
    let emailControl = component.emailControl;
    emailControl.setValue('');
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.hasError('required')).toBeTruthy();
  });

  it('should mark email control as invalid if invalid email format', () => {
    let emailControl = component.emailControl;
    emailControl.setValue('invalid-email');
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.hasError('email')).toBeTruthy();
  });

  it('should mark email control as valid if valid email format', () => {
    let emailControl = component.emailControl;
    emailControl.setValue('valid@example.com');
    expect(emailControl.valid).toBeTruthy();
  });

});