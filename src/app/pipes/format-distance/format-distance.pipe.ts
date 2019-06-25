import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDistance',
})
export class FormatDistancePipe implements PipeTransform {

  transform(value: any, ...args) {
    return Math.floor(Number(value) * 1000);
  }
}
