import { AbstractControl, ValidationErrors } from '@angular/forms';

export function DateValidator(ctrl: AbstractControl): ValidationErrors | null {
  const date = new Date(ctrl.value);
  if (isNaN(date.getTime())) return { invalidDate: { source: ctrl.value } };
  return null;
}