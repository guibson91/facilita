import { Component, EventEmitter, Output, Input } from '@angular/core';
import { IntervalHours } from '../../../../models/filial';

@Component({
  selector: 'card-hour-open',
  templateUrl: './card-hour-open.component.html',
  styleUrls: ['./card-hour-open.component.scss']
})
export class CardHourOpenComponent {

  /**
   * Emite output com o índice do elemento clicado
   */
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();
  @Input() businesshours: IntervalHours[]

  constructor() { }

  /**
   * @param index Índice do elemento clicado no array
   */
  _click(index: number) {
    this.selected.emit(index);
  }

}
