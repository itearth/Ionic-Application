// product-detail-modal.component.ts

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
})
export class ProductDetailModalComponent {
  productName: string='';
  productDescription: string='';
  // ! to indicate that it will be initialized during runtime.
  productPrice!: number;

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  addProduct(productDetails: any) {
    // Implement the logic to add a product with the provided details
    // For example, you can push a new product to the 'products' array with the provided details
    // Also, you may want to validate the input data before adding the product

    // For demonstration purposes, let's just log the product details
    console.log('Product Details:', productDetails);

    // Dismiss the modal after adding the product
    this.dismissModal();
  }
}
