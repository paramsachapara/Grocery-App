import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    ManageAddressComponent,
    OrdersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
