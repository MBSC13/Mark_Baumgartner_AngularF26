import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const colorValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const color = String(group.get('color')?.value ?? '').toUpperCase();
  const manaCost = String(group.get('manaCost')?.value ?? '').toUpperCase();

  //Only take the color letter from the cost
  const costColors = manaCost.match(/[WUBRG]/g) ?? [];

  //Returns true if any element passes the test
  const mismatch = costColors.some(c => !color.includes(c));

  return mismatch ? { colorMismatch: true } : null;



  // const colorControl = group.get('color');
  // const costControl = group.get('manaCost');
  //
  // let colorValue = '';
  // if (colorControl !== null && colorControl.value !== null && colorControl.value !== undefined) {
  //   colorValue = String(colorControl.value);
  // }
  //
  // let costValue = '';
  // if (costControl !== null && costControl.value !== null && costControl.value !== undefined) {
  //   costValue = String(costControl.value);
  // }
  //
  // const color = colorValue.toUpperCase();
  // const manaCost = costValue.toUpperCase();
  //
  // const matches = manaCost.match(/[WUBRG]/g);
  // const costColors = matches !== null ? matches : [];
};
