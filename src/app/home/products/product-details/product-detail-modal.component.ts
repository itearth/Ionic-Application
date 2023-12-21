import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductDetailModalComponent {
  product: any = { name: '', description: '', price: null };

  @Output() onAddProductEvent = new EventEmitter<any>();
  @Input() productToEdit: any;

  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    if (this.productToEdit) {
      this.product = { ...this.productToEdit };
    }
  }

  addOrUpdateProduct() {
    const editedProduct = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
    };

    if (this.productToEdit) {
      this.onAddProductEvent.emit(editedProduct);
    } else {
      this.onAddProductEvent.emit(editedProduct);
    }

    this.dismissModal();
  }

  // Add a method to determine if the modal is in edit mode
  isEditMode(): boolean {
    return !!this.productToEdit;
  }
}


