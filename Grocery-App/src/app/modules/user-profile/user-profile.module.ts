import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddAddressComponent } from './manage-address/add-address/add-address.component';
import { EditAddressComponent } from './manage-address/edit-address/edit-address.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';

//module for toast
// import { AngularToastModule } from "angular-toasts";

@NgModule({
  declarations: [
    ProfileComponent,
    OrdersComponent,
    ManageAddressComponent,
    ChangePasswordComponent,
    UserProfileComponent,
    AddAddressComponent,
    EditAddressComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    ReactiveFormsModule,
    // AngularToastModule,
    FormsModule
  ],
  exports:[
    ProfileComponent,
    OrdersComponent,
    ManageAddressComponent,
    ChangePasswordComponent,
    UserProfileComponent

  ]
})
export class UserProfileModule { }
