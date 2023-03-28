import { Component, OnInit } from '@angular/core';

import { cartItems } from 'src/app/cartInterface';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private cartService:CartService){

  }

  ngOnInit() {
    this.cartService.mycart.subscribe((res)=>{
      this.cartarray=res;
    })

  // storing all categories in cartCategory
  this.cartCategory = this.cartarray
  .map((product:any) => product.category)
  .filter((category: any, index: any, categories: string | any[]) => categories.indexOf(category) === index);
  console.warn("categories",this.cartCategory);

  // LETS CREATE ARRAY FOR EVERY AVAILABLE CAREGORY
  this.productsByCategory = this.cartarray.reduce((acc: { [x: string]: any[]; }, product: { category: string | number; }) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
  console.warn(this.productsByCategory)

  //total not working
  this.total = this.cartarray.reduce((acc: { [x: string]: number }, product: { category: string | number, price: number,quantityCount:number }) => {
    if (!acc[product.category]) {
        acc[product.category] = 0;
    }
    acc[product.category] += product.price*product.quantityCount;
    return acc;
}, {});
console.log("total", this.total);

  }

  //DECLARED VARIABLE
  cartCategory:any;
  productCount:any=1;
  productTotalPrice: number|undefined;
  productsByCategory: { [category: string]: cartItems[]; } | undefined;
  total:any;

  // CODE BY SYSTEM ITSELF
  private _cartarray: any;
  public get cartarray(): any {
    return this._cartarray;
  }
  public set cartarray(value: any) {
    this._cartarray = value;
  }




  inceraseCount(id:any){

    let itemToIncrease=this.cartarray.find((x: { id: number | undefined; }) =>x.id== id)
    itemToIncrease.quantityCount+=1;
    itemToIncrease.subtotal= itemToIncrease.quantityCount*itemToIncrease.price;
  }
   decreaseCount(id:any){
    let itemToDecrease=this.cartarray.find((x: { id: number | undefined; }) =>x.id== id)

    if(itemToDecrease.quantityCount>0){
      itemToDecrease.quantityCount-=1;
    }else{
      itemToDecrease.quantityCount=0;
      itemToDecrease.subtotal=0
    }

    itemToDecrease.subtotal= itemToDecrease.quantityCount*itemToDecrease.price;
   }

}
