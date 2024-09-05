import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;

    if (!value) {
      return null; // No validation error if value is empty
    }

    // Check if the phone number starts with "50"
    const startsWith50 = value.startsWith('50');

    return startsWith50 ? null : { invalidPhone: true };
  };
}
