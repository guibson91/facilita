import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max_12String',
})
export class Max_12StringPipe implements PipeTransform {

  transform(value: string) {
    console.log("String: ", value);
    console.log("tamanho: ", value.length);
    
    if (value.length <= 12) return value;

    console.log("result: ", value.substring(0,12).concat('.'));

    return value.substring(0,12).concat('.')

  }

}
