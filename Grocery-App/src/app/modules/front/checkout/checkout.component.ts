import { Component, OnInit } from '@angular/core';
import { AllItemService } from 'src/app/shared/service/all-item.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  constructor(private service:AllItemService){}

  ngOnInit(): void {

  }
address:any =this.service.deliveryAddress;
}
