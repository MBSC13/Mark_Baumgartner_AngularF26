import { ValidatorFn } from '@angular/forms';

export const manaCostValidator: ValidatorFn = (control)=> {
  const validMana = /^[0-9WUBRGC]+$/.test(String(control.value));
  return validMana ? null : { manaCost: true };
}
