import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../../models/order';
import { Filial } from '../../../../models/filial';

@Component({
  selector: 'mr-card-filial',
  templateUrl: './mr-card-filial.component.html',
  styleUrls: ['./mr-card-filial.component.scss']
})
export class MrCardFilialComponent {

  @Input() order: Order;

  @Input() filial: Filial

  @Input() showDelivery: boolean = true;

  /**
   * Se é para mostrar o telefone ou não
   */
  @Input() phone: boolean = true
  constructor() {
  }

}
