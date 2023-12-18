// products.component.ts
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';  // Import ModalController
import { ProductDetailModalComponent } from './product-detail-modal.component';  // Import ProductDetailModalComponent

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  selectedCategory: string = '';

  constructor(private modalController: ModalController) { }  // Inject ModalController

  ngOnInit() { }

  addProduct(selectedCategory: string) {
    this.products.push({
      name: `New Product - ${selectedCategory}`,
      price: 10,
      category: selectedCategory,
    });
  }

  async showCategoryDropdown() {
    const modal = await this.modalController.create({
      component: ProductDetailModalComponent,
    });
    return await modal.present();
  }
}














// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.scss'],
// })
// export class ProductsComponent implements OnInit {
//   products: any[] = [];
//   selectedCategory: string = ''; // I added selectedCategory: string; to declare the selectedCategory property.

//   constructor() { }

//   ngOnInit() { }

//   addProduct() {
//     // Implement the logic to add a product based on the selected category
//     // For example, you can push a new product to the 'products' array with the selected category
//     this.products.push({
//       name: `New Product - ${this.selectedCategory}`,
//       price: 10,
//       category: this.selectedCategory,
//     });
//   }

//   showCategoryDropdown() {
//     // Implement any logic you want when the button is clicked
//     console.log('Button clicked');
//   }
// }
