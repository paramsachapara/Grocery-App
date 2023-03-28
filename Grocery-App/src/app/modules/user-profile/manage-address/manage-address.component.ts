import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';


@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent {
  address:any;
  constructor(private cartService:CartService){
    this.address = this.cartService.address;
  }
}
