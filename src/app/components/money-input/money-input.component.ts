import { AbstractControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common'
import { Component, Input, EventEmitter, Output, AfterContentInit, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Money } from '../../util/money';
import { Subscription } from 'rxjs';


@Component({
  selector: 'money-input',
  templateUrl: './money-input.component.html',
  styleUrls: ['./money-input.component.scss']
})
export class MoneyInputComponent implements AfterContentInit, OnInit, OnDestroy {

  //Control do formulário referente ao money-input
  @Input()
  set control(_control: AbstractControl) {
    this._control = _control;
    if (this._control) {
      if (this.controlSubscription) this.controlSubscription.unsubscribe()
      this.controlSubscription = this._control.valueChanges.subscribe((val) => {
        if (val && this.value != new DecimalPipe('pt-br').transform(val.toString(), '1.2-2')) {
          this.value = new DecimalPipe('pt-br').transform(val.toString(), '1.2-2')
        }
      })
    }
  }
  _control?: AbstractControl

  controlSubscription?: Subscription

  //Valor do input do componente
  public value;

  @Output()
  numberChange = new EventEmitter<string>();

  get number() {
    return this.value;
  }
  @Input()
  set number(val) {
    this.value = val;
    this.numberChange.emit(this.value);
  }

  constructor(private money: Money, public ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.controlSubscription) this.controlSubscription.unsubscribe()
  }

  ngAfterContentInit() {
    //Na edição, formatar o número com duas casas decimais
    if (this._control && this._control.value) {
      this.value = new DecimalPipe('pt-br').transform(this._control.value.toString(), '1.2-2')
    }
    else if (this.number && this.number != '') {
      this.value = new DecimalPipe('pt-br').transform(this.number, '1.2-2')
    }
  }


  //Evento que captura o que o usuário digita
  amountChange(value) {
    if (!value || value == "" || value.length < 1) return;

    //Converte o valor digitado pelo usuário em decimal de dinheiro e atribui ao input
    this.value = this.money.detectAmount(value);

    //Atribui o número ao control do formulário
    if (this._control) {
      //Converte a máscara de dinheiro em número
      let _val: string = this.value.replace(',', '.');
      while (_val.indexOf(",") > -1) _val = _val.replace(',', '.')
      let valueNumber = Number(_val)
      this._control.patchValue(valueNumber)
    }
    //Atribui o número ao two way data binding
    else {
      this.number = this.value;
    }

    this.ref.detectChanges()
  }

}
