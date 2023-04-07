import { Component, OnInit } from '@angular/core';
import { AllItemService } from 'src/app/shared/service/all-item.service';
import { ApiService } from 'src/app/shared/service/api.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/service/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  constructor(private service:AllItemService, private api:ApiService,private toastr: ToastrService,private cartservice:CartService,private router:Router){
    this.service.cartGrandTotal.subscribe((res)=>{
      this.grandTotal=res;

    })
  } //constructor ends

  grandTotal:any;
  address:any;
  zeroAddress:boolean=false;
  selectedId:any=0;
  activatePlaceOrderButton:boolean=false;
  encryptedAddressId:any;
  delivery_address_id:any;
  billing_address_id:any;
  payment_status:any="W4YV_pkH7OAkvZO4P1gbzA==";
  order_status:any="Nn9l9xhHYQsvNB503C4EAQ==";
  body=this.cartservice.checkout;


  ngOnInit(): void {
 this.api.userDetails().subscribe(
  {
    next:(res:any)=>{
      this.address=res.data.addresses
    },
    error:(err:any)=>{
      console.log("error from placeOrder",err);

      this.toastr.error('Failure:)');

    }
  }
 );

 if(this.selectedId != 0){
  this.activatePlaceOrderButton=true;
 }

 if(!this.zeroAddress){
  this.zeroAddress=true
  console.error("please add one address")
 }

  }//OnInit ends here

  getId(id:number){
    this.selectedId=id
    console.error("selectedId", this.selectedId);
    // console.error("boolean",this.activatePlaceOrderButton);
    this.api.encryptdata(JSON.stringify(id)).subscribe({
      next:(res:any)=>{
          this.encryptedAddressId=res.data;
          this.delivery_address_id=this.encryptedAddressId;
          this.billing_address_id=this.encryptedAddressId
          console.warn("encrypted id",this.encryptedAddressId);



      },
      error:err=>{
        this.toastr.error('Failure:)');
      }
    })


  }
  placeOrder(){
    confirm("confirm , to place order")
    this.api.addOrders(this.body,this.delivery_address_id,this.billing_address_id,this.payment_status,this.order_status).subscribe({
      next:(res:any)=>{
        this.toastr.success(res.message);
        this.router.navigate(["placeOrder"])
        localStorage.removeItem('cartItems') // empty loaclstorage
        this.service.cartarray=[];
        this.router.navigate(['/cart/checkout/placeOrder']);
        localStorage.setItem('cartItems',JSON.stringify([]))
      },
      error:(err:any)=> {
        this.toastr.error('Failure:)');
        this.router.navigate(['cart']);
      }
    })

  }
  cancelOrder(){
    this.toastr.success('Ordered cancelled');
    this.router.navigate(['cart'])
  }
  //guno address
// address:any =this.service.deliveryAddress;

//address using api
}
