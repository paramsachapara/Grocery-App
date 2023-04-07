import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalougeRoutingModule } from './catalouge-routing.module';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
// import { CartComponent } from './cart/cart.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CartComponent

  ],
  imports: [
    CommonModule,
    CatalougeRoutingModule
  ],
  exports:[CategoryComponent]
})
export class CatalougeModule { }
