import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-field',
  templateUrl: './name-field.component.html',
  styleUrls: ['./name-field.component.scss']
})
export class NameFieldComponent {

  @Input() formGroup: FormGroup;

  nameControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.formGroup.addControl('name', this.nameControl);
  }
}
