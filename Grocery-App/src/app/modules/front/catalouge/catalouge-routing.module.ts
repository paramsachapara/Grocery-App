import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderPlacedComponent } from '../order-placed/order-placed.component';

const routes: Routes = [

 {path:'category/:categoryName',component:CategoryComponent},
 {path:'home/productDetails/:productid',component:ProductDetailsComponent},
 {path:'category/:categoryName/productDetails/:productid',component: ProductDetailsComponent},
 {path:'productDetails/:productid',component: ProductDetailsComponent},

 {path:'cart',component:CartComponent},

 {path:'placeOrder',component:OrderPlacedComponent}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalougeRoutingModule { }
