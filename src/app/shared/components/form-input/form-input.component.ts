import { Component, Input, Optional } from '@angular/core';
import { FormControl, ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input() control!: FormControl | any;
  @Input() inputType = 'text';
  @Input() inputLabel = '';
  @Input() inputValue = '';
  @Input() inputClass = '';

  @Input() isLoading = false;
  @Input() isSubmitted = false;

  controlName: string | null = null;

  constructor(@Optional() private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.control && this.controlContainer && this.controlContainer.control) {
      const formGroup = this.controlContainer.control as FormGroup;
      this.controlName = Object.keys(formGroup.controls).find(name => this.control === formGroup.get(name)) || null;
   
    }
  }
}
