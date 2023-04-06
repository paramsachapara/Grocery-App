import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  constructor(private api:ApiService,private toastr: ToastrService, private router:Router){}
  allOrder:any[];
  ngOnInit()
  {
    this.api.allOrders().subscribe({
    next:(res:any)=>{
      this.allOrder=res.data.orders
      console.log("all orders",this.allOrder);
    },//end next
    error:(err:any)=>{
      this.toastr.error("failure",err.message)
      console.log("all order eoor",err);

    }//end error
    })//end allOrderapi call


  }//end onInit
  getOrderDetails(id:any){
    this.router.navigate(['userprofile/profile/order-details', id])
  }

} //end export
