import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})

@Injectable()
export class FormatCurrencyPipe {
  /*
    Ex: recebe R$2,233.55 e retorna R$ 2.233,55
   */
  transform(value, args) {
    // value = value.replace(",", "*"); // * auxiliar para substituir por um ponto
    // return ((value.replace("$", "$ ")).replace(".", ",")).replace("*", ".");
    return value.replace("$", "$ ");
  }
}