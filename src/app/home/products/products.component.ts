// products.component.ts

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductDetailModalComponent } from './product-detail-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  selectedCategory: string = '';
  isFormSubmitted: boolean = false; // Declare the property here

  constructor(private modalController: ModalController) {
    // Load products from local storage when the component is initialized
    const storedProducts = localStorage.getItem('products');
    this.products = storedProducts ? JSON.parse(storedProducts) : [];
  }

  ngOnInit() {}

  addProduct(selectedCategory: string) {
    // Open the modal
    this.showCategoryDropdown();
  }

  async showCategoryDropdown() {
    const modal = await this.modalController.create({
      component: ProductDetailModalComponent,
    });

    // Subscribe to the productAdded event emitted by the modal
    modal.onDidDismiss().then((data) => {
      if (data.data && data.data.productAdded) {
        // Add the new product to the array
        this.products.push(data.data.productAdded);

        // Save the updated products array to local storage of the browser
        localStorage.setItem('products', JSON.stringify(this.products));
      }
    });

    // Set the flag to true before opening the modal
    this.isFormSubmitted = true;

    return await modal.present();
  }
}





// // products.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ModalController } from '@ionic/angular';  // Import ModalController
// import { ProductDetailModalComponent } from './product-detail-modal.component';  // Import ProductDetailModalComponent

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.scss'],
// })
// export class ProductsComponent implements OnInit {
//   products: any[] = [];
//   selectedCategory: string = '';

//   constructor(private modalController: ModalController) { }  // Inject ModalController

//   ngOnInit() { }

//   addProduct(selectedCategory: string) {
//     this.products.push({
//       name: `New Product - ${selectedCategory}`,
//       price: 10,
//       category: selectedCategory,
//     });
//   }

//   async showCategoryDropdown() {
//     const modal = await this.modalController.create({
//       component: ProductDetailModalComponent,
//     });
//     return await modal.present();
//   }
// }














