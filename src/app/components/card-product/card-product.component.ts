import { Component, AfterContentInit, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { Filial } from '../../../models/filial';
import { Entry } from '../../../models/order';

@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements AfterContentInit {

  @Input() product?: Product;

  @Input() filial?: Filial;

  @Input() entry?: Entry;

  public newPrice: number;

  constructor() { }

  ngAfterContentInit() {
    if (this.product.promotionActive) {
      if (this.product.promotionPrice) {
        this.newPrice = this.product.minimumPrice - this.product.promotionPrice;
      }
      else {
        this.newPrice = ((100 - this.product.promotionPercentage) / 100) * this.product.minimumPrice;
      }
    }
    else {
      this.newPrice = undefined;
    }
  }
}
