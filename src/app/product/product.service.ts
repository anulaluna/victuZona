import { Product } from './index';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products = [new Product(1, 'Pomidor', 1, null, 18, 1, 3, 0, 0.2)];
  getProducts() {
    return this.products.slice();
  }
}
