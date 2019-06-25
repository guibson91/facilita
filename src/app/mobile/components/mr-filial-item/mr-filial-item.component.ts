import { Component, Input } from '@angular/core';
import { Filial } from '../../../../models/filial';
import { ProductStock, ProductService } from '../../../services/product.service';

@Component({
  selector: 'mr-filial-item',
  templateUrl: './mr-filial-item.component.html',
  styleUrls: ['./mr-filial-item.component.scss']
})
export class MrFilialItemComponent {

  @Input() filial: Filial

  bestProduct: ProductStock;

  newPrice: number;

  constructor(private productProvider: ProductService) {

  }

  ngAfterContentInit() {
    this.productProvider.getBestRecomendation(this.filial)
      .subscribe((bestRecomendation: ProductStock) => {
        if (!bestRecomendation) return;
        this.filial.product_recomendated = bestRecomendation;
        if (this.filial.product_recomendated.promotionActive) {
          if (this.filial.product_recomendated.promotionPrice) {
            this.newPrice = this.filial.product_recomendated.minimumPrice - this.filial.product_recomendated.promotionPrice;
          }
          else {
            this.newPrice = ((100 - this.filial.product_recomendated.promotionPercentage) / 100) * this.filial.product_recomendated.minimumPrice;
          }
        }
        else {
          this.newPrice = undefined;
        }
      })
  }

}