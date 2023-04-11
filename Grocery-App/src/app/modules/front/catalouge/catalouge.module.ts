import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalougeRoutingModule } from './catalouge-routing.module';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { CartComponent } from './cart/cart.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CartComponent

  ],
  imports: [
    CommonModule,
    CatalougeRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  exports:[CategoryComponent]
})
export class CatalougeModule { }
