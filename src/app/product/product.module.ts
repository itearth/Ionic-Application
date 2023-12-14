// product.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    IonicModule, // Add IonicModule to the imports array
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule {}
