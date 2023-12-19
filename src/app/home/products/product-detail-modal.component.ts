// product-detail-modal.component.ts
//For adding or editing product information

import { Component, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
})
export class ProductDetailModalComponent {
  product: any = { name: '', description: '', price: null };
  
  // Declare the productAdded property with EventEmitter
  @Output() productAdded = new EventEmitter<any>();

  constructor(private modalController: ModalController) {}

  dismissModal() {
    //The dismissModal() method is used to close the modal when the "Close" button is clicked.
    this.modalController.dismiss();
  }

  addProduct() {
    // Use this.product to access the properties of the product
    const newProduct = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
    };

    // Emit the event to notify the parent component about the added product
    this.productAdded.emit(newProduct);

    // Dismiss the modal after adding the product
    this.dismissModal();
  }
}





// // product-detail-modal.component.ts

// import { Component } from '@angular/core';
// import { ModalController } from '@ionic/angular';

// @Component({
//   selector: 'app-product-detail-modal',
//   templateUrl: './product-detail-modal.component.html',
//   styleUrls: ['./product-detail-modal.component.scss'],
// })
// export class ProductDetailModalComponent {
//   productName: string='';
//   productDescription: string='';
//   // ! to indicate that it will be initialized during runtime.
//   productPrice!: number;

//   constructor(private modalController: ModalController) {}

//   dismissModal() {
//     this.modalController.dismiss();
//   }

//   addProduct(productDetails: any) {
//     // Implement the logic to add a product with the provided details
//     // For example, you can push a new product to the 'products' array with the provided details
//     // Also, you may want to validate the input data before adding the product

//     // For demonstration purposes, let's just log the product details
//     console.log('Product Details:', productDetails);

//     // Dismiss the modal after adding the product
//     this.dismissModal();
//   }
// }
