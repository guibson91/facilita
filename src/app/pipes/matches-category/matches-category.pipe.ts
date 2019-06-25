import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../models/product';
import { elementIsInsideArray } from '../../util/util';

@Pipe({
  name: 'matchesCategory',
})
export class MatchesCategoryPipe implements PipeTransform {

  transform(products: Product[], categories: string[]): Array<any> {

    if (!categories || categories.length == 0) {
      return products;
    }
    return products.filter(product => elementIsInsideArray(product.category.id, categories));
  }
}