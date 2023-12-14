import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'product',
   
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
