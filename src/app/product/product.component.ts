// product.component.ts

import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
})
export class ProductComponent {
  products: any[] = []; // Assuming you have a products array

  addProduct() {
    // Implement the logic to add a product
    // For example, you can push a new product to the 'products' array
    this.products.push({
      name: 'New Product',
      price: 10,
    });
  }
}










// import { Component, OnInit } from '@angular/core';
// import { ProductService } from './product.service';
// import { Product } from './product.modal';

// @Component({
//   selector: 'app-product',
//   templateUrl: 'product.component.html',
//   styleUrls: ['product.component.scss'],
// })
// export class ProductComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private productService: ProductService) {}

//   ngOnInit() {
//     this.products = this.productService.getProducts();
//   }
// }
