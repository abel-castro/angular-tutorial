import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NameFieldComponent } from './name-field.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


describe('NameFieldComponent', () => {
  let component: NameFieldComponent;
  let fixture: ComponentFixture<NameFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameFieldComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameFieldComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup([])
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form control for name', () => {
    expect(component.nameControl).toBeTruthy();
  });

  it('should mark name control as invalid if empty', () => {
    let nameControl = component.nameControl;
    nameControl.setValue('');
    expect(nameControl.valid).toBeFalsy();
    expect(nameControl.hasError('required')).toBeTruthy();
  });

  it('should mark name control as valid with some string', () => {
    let nameControl = component.nameControl;
    nameControl.setValue('Abel');
    expect(nameControl.valid).toBeTruthy();
  });

});
