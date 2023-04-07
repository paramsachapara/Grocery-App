import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'catalouge',
    loadChildren: () => import('./catalouge/catalouge.module').then(m => m.CatalougeModule)
  },
  {
    path:'checkout',component:CheckoutComponent
  },{
    path:'orderPlaced', component:OrderPlacedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
