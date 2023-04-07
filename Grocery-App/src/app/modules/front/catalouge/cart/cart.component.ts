import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';

import { cartItems } from 'src/app/shared/models/cartInterface';
import { AllItemService } from 'src/app/shared/service/all-item.service';
import { CartService } from 'src/app/shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartarray: any;
  constructor(private cartService:CartService,private service:AllItemService, private router:Router,private toastr: ToastrService){

  }
  ngOnInit() {
    this.cartData();

    // LETS CREATE ARRAY FOR EVERY AVAILABLE CAREGORY
    this.getItemsByCategory()
    //  console.warn("::",this.itemsByCategories);
    this.finalBill();

    //sending total price to behavioursubject
    this.cartService.cartTotal.next(this.totalPrice)

    //getting all ordered items
    this.getallorders();

    window.scrollTo(0,0);

  }
  //DECLARED VARIABLE

  itemsByCategories: { [key: string]: { items: any[], total: number } } = {};
  total:any;
  categories:any = {};
  totalPrice:number=0;
  // taxAmount:number =100;
  taxAmount:number=20;
  discountAmount:number=10;
  grandTotal:number|undefined;
  allOrder:any;

  cartData(){
    //  this.cartService.mycart.subscribe((res)=>{
    //   this.cartarray=res})

      // data from local storage
      if(localStorage.getItem('cartItems')!==null)

     {
      let localData=localStorage.getItem('cartItems')
       this.cartarray=localData && JSON.parse(localData)
      //  console.log("cart",this.cartarray);

      }

    }


  getItemsByCategory() {
    this.itemsByCategories = {};
      this.cartarray.forEach((item:any) => {
        if (!this.itemsByCategories.hasOwnProperty(item?.category)) {
          this.itemsByCategories[item?.category] = { items: [item], total: item.subtotal };
        } else {
          this.itemsByCategories[item.category].items.push(item);
          this.itemsByCategories[item.category].total += item.subtotal;
        }
      });
    ;
  }




  findProductById(id:any){
    return this.cartarray.find((x: { id: number | undefined; }) =>x.id== id)
  }
  subTotal(numberOfItems:any,price:any)
  {
    return numberOfItems*price
  }
  inceraseCount(id:any){

    let itemToIncrease= this.findProductById(id)
    itemToIncrease.quantityCount+=1;
    itemToIncrease.subtotal= this.subTotal(itemToIncrease.quantityCount,itemToIncrease.price)
    // update data in local storage
    localStorage.setItem("cartItems",JSON.stringify(this.cartarray))
    this.getItemsByCategory()
    this.finalBill()
  }
   decreaseCount(id:any){
    let itemToDecrease=this.findProductById(id)
    if(itemToDecrease.quantityCount>1){
      itemToDecrease.quantityCount-=1;
    }else{
      this.removeItem(id)
      itemToDecrease.quantityCount=0;
      itemToDecrease.subtotal=0
    }
    itemToDecrease.subtotal= this.subTotal(itemToDecrease.quantityCount,itemToDecrease.price);
    // updata in loalstorage
    localStorage.setItem("cartItems",JSON.stringify(this.cartarray))
    this.getItemsByCategory()
    this.finalBill()

    //send cartsize to behaviour subject in allservive service
    let cartlength=JSON.parse(localStorage.getItem('cartItems')).length;
    this.service.cartSize.next(cartlength);
   }

  finalBill(){

    // let total = this.itemsByCategories.reduce()
    this.totalPrice=0;
    for(const category in this.itemsByCategories){
    //  console.log("category for total", category);
     this.totalPrice+= this.itemsByCategories[category].total;
     }
   this.grandTotal = this.taxAmount +this.totalPrice-this.discountAmount;
   if(this.totalPrice==0){
    this.grandTotal=0;
    this.taxAmount=0;
    this.discountAmount=0;
    // this.getItemsByCategory()
   }
  }
  removeItem(id:any){
    if (this.cartarray){
       this.cartarray=this.cartarray.filter((item:any)=>item.id!==id);

       console.log(this.findProductById(id));
localStorage.setItem("cartItems",JSON.stringify(this.cartarray))
    this.getItemsByCategory()
    this.finalBill()

    //send cartsize to behaviour subject in allservive service
    let cartlength=JSON.parse(localStorage.getItem('cartItems')).length;
    this.service.cartSize.next(cartlength);
      }

  }

  getallorders()
  {
     const allItems = [];
    for (let key in this.itemsByCategories) {
      for (let i = 0; i < this.itemsByCategories[key].items.length; i++) {
        allItems.push(this.itemsByCategories[key].items[i]);
      }
    }
    const finalItems=[];
    for(let i=0;i<allItems.length;i++){
      finalItems.push({

        product_id: allItems[i].id,
        product_name:allItems[i].groceryName,
        qty: allItems[i].quantityCount,
        product_amount: allItems[i].price,
        discount_type: 2,
        discount_amount: allItems[i].discount
      })
    }
    this.allOrder=finalItems;
    //  console.log("fina products",finalItems);

}


date(){
  let date=new Date()
  var getYear = date.toLocaleString("default", { year: "numeric" });
  var getMonth = date.toLocaleString("default", { month: "2-digit" });
var getDay = date.toLocaleString("default", { day: "2-digit" });
var dateFormat = getYear + "-" + getMonth + "-" + getDay;
return dateFormat;
}
  checkout(){
    if(localStorage.getItem('token')){

      this.cartService.checkout={
        order_date:this.date(),
        special_note:"i need super fast delivery, tatkalik",
        estimate_delivery_date:this.date(),
        sub_total:this.totalPrice,
        tax_amount:this.taxAmount,
        discount_amount:this.discountAmount,
        total_amount: this.grandTotal,
        paid_amount:this.grandTotal,
        payment_type:2,

        order_products:this.allOrder
      // console.warn("cart",this.allOrder);
    }
    console.error("heyyyyy",this.cartService.checkout);
    this.router.navigate(['/cart/checkout'])
    this.service.cartGrandTotal.next(this.grandTotal);
    }
    else{
      this.toastr.error('Please do login first :)');

      this.router.navigate(['login'])
    }


}
}
