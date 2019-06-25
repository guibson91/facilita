import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objNgFor',
  pure: false
})
export class ObjectNgForPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}