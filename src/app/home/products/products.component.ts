// products.component.ts

import { Component, EventEmitter, OnInit } from '@angular/core';
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

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async handleAddProductControlClick() {

    const modal = await this.modalController.create({
      component: ProductDetailModalComponent,
      componentProps: {
        onAddProductEvent: new EventEmitter<any>()
      }
    });

    await modal.present().then((result: any) => {

      modal.componentProps?.['onAddProductEvent'].subscribe({
        next: (product: any) => {
          this.products.unshift(product);
          console.log(this.products);
        }
      });

    });
  }

  // products.component.ts

async handleEditProductControlClick(product: any) {
  const modal = await this.modalController.create({
    component: ProductDetailModalComponent,
    componentProps: {
      onAddProductEvent: new EventEmitter<any>(),
      productToEdit: product, // Pass the product to edit
    },
  });

  await modal.present().then((result: any) => {
    modal.componentProps?.['onAddProductEvent'].subscribe({
      next: (editedProduct: any) => {
        // Update the product in the card
        const index = this.products.findIndex(p => p === product);
        if (index !== -1) {
          this.products[index] = editedProduct;
        }
        console.log(this.products);
      },
    });
  });
}


}