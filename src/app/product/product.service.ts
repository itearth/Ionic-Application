// to handle product-related operations

import { Injectable } from '@angular/core';
import { Product } from './product.modal';

@Injectable({
  providedIn: 'root',
})
export class ProductService {   
  private products: Product[] = [];

  constructor() {}

  getProducts(): Product[] {
    // Implement logic to fetch products from API or elsewhere
    return this.products;
  }

  addProduct(product: Product): void {
    // Implement logic to add a product
    this.products.push(product);
  }
}
