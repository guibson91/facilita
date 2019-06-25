import { Component, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'mr-price',
  templateUrl: './mr-price.component.html',
  styleUrls: ['./mr-price.component.scss']
})
export class MrPriceComponent {

  @Input() price;
  constructor(private cart: CartService) {

  }
  
}