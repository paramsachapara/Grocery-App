import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { CategoryComponent } from './modules/front/catalouge/category/category.component';
import { ProductDetailsComponent } from './modules/front/catalouge/product-details/product-details.component';
import { CartComponent } from './modules/front/catalouge/cart/cart.component';
import { CheckoutComponent } from './modules/front/checkout/checkout.component';
import { OrderPlacedComponent } from './modules/front/order-placed/order-placed.component';
import { FrontModule } from './modules/front/front.module';
import { LoginComponent } from './modules/front/user/login/login.component';
import { RegistrationComponent } from './modules/front/user/registration/registration.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/category/:categoryName', component: CategoryComponent },
  { path: 'category/:categoryName', component: CategoryComponent },
  {path: 'category/:categoryName/product/:productId',component: ProductDetailsComponent},
  {path: 'product/:productId',component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'cart/checkout', component: CheckoutComponent },
  { path: 'cart/checkout/placeOrder', component: OrderPlacedComponent },
  { path: 'login', component: LoginComponent },
  {path:'registration', component:RegistrationComponent},
  {path:'home',component:HomeComponent},

  {
    path: 'userprofile',
    loadChildren: () =>
      import('./modules/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
      canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
