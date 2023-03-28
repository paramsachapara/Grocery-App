import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
// import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    // SidebarComponent
    ProfileComponent,
    OrdersComponent,
    ManageAddressComponent,
    ChangePasswordComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
