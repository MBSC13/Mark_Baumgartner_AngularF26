import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rarityStars',
})
export class RarityStarsPipe implements PipeTransform {
  star = String.fromCharCode(9734);
  transform(value: string): string {
    switch (value) {
      case 'common':    return this.star;
      case 'uncommon':  return this.star.repeat(2);
      case 'rare':      return this.star.repeat(3);
      case 'mythic':    return this.star.repeat(4);
      default:          return value;
    }

    // return value.replace('common', this.star);
    // return value.replace('uncommon', this.star.repeat(2));
    // return value.replace('rare', this.star.repeat(3));
    // return value.replace('mythic', this.star.repeat(4));
  }
}
