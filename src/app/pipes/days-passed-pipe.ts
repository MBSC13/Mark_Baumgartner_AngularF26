import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPassed',
})
export class DaysPassedPipe implements PipeTransform {
  transform(value: string): string {
    //Convert releaseDate string into timestamp
    const releaseDate = new Date(value).getTime();
    const now = Date.now();
    const msInDay = 86400000;

    return Math.floor((now - releaseDate) / msInDay).toString();
  }
}
