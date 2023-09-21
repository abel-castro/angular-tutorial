import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss']
})
export class EmailFieldComponent {

  @Input() formGroup: FormGroup;

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
    this.formGroup.addControl('email', this.emailControl);
  }
}