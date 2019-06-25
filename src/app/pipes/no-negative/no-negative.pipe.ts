import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noNegative',
})
export class NoNegativePipe implements PipeTransform {
  transform(value: number, ...args) {
    return Number(value) < 0 ? 0 : Number(value);
  }
}
