import { Component, Input } from '@angular/core';
import { Order, OrderStatus } from '../../../../models/order';

@Component({
  selector: 'mr-status-order',
  templateUrl: './mr-status-order.component.html',
  styleUrls: ['./mr-status-order.component.scss']
})
export class MrStatusOrderComponent {

  @Input('order') order: Order;

  public OrderStatus = OrderStatus

  constructor() {

  }

  ngAfterContentInit() {
    console.log("Order: ", this.order);
  }

}