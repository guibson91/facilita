import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change',
})
export class ChangePipe implements PipeTransform {

  //Calcular a diferença entre o dinheiro do cliente e o valor total
  transform(value: string, total: number) {
    let valueNumber = Number(value);
    if (valueNumber < 0) valueNumber = 0;
    return valueNumber - total;
  }
}
