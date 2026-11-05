import { ValidatorFn } from '@angular/forms';

export const manaCostValidator: ValidatorFn = (control)=> {
  const validMana = /^[0-9WUBRG]+$/.test(String(control.value));
  return validMana ? null : { manaCost: true };
}
