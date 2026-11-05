import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//Validator that attaches to the whole FormGroup
//Checks the card's cost vs its manaCost and ensures that the colors present match
export const colorValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  //This is some TypeScript stuff I learned about yesterday
  //?. is called the optional chaining operator. Means, if the value on the left  is null or undefined, give back undefined instead of crashing
  //?? is the nullish coalescing operator. It says, use the right side if the left is null or undefined
  const color = String(group.get('color')?.value ?? '').toUpperCase();
  const manaCost = String(group.get('manaCost')?.value ?? '').toUpperCase();

  //Only take the color letter from the cost. g means don't stop at one match here
  const costColors = manaCost.match(/[WUBRG]/g) ?? [];

  //Returns true if any element passes the test
  const mismatch = costColors.some((c) => !color.includes(c));

  return mismatch ? { colorMismatch: true } : null;
};

  //Old colorValidator function
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

