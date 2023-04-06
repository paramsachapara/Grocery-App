import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddAddressComponent } from './manage-address/add-address/add-address.component';
import { EditAddressComponent } from './manage-address/edit-address/edit-address.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';

const routes: Routes = [
  // {
  //   path:'',component:UserProfileComponent
  // },
  // {
  //   path:'profile', component:ProfileComponent
  // },
  // {
  //   path:'profile/manage-Address', component:ManageAddressComponent
  // },
  // {
  //   path:'profile/change-password', component:ChangePasswordComponent
  // },
  // {
  //   path:'profile/orders', component:OrdersComponent
  // },
 {

  path:'profile', component:UserProfileComponent,


  children:[
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    {
      path:'', component:ProfileComponent
    },
    {
      path:'manage-Address', component:ManageAddressComponent
    },
    {
      path:'change-password', component:ChangePasswordComponent
    },
    {
      path:'orders', component:OrdersComponent
    },
    {
      path:'add-address', component:AddAddressComponent
    },
    {
      path:'edit-address/:id',component:EditAddressComponent
    },
    {
      path:'order-details/:id',component:OrderDetailsComponent
    }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
