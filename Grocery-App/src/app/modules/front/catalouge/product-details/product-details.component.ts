import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllItemService } from 'src/app/shared/service/all-item.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit
  {
  constructor(private activated:ActivatedRoute, private service:AllItemService){}

 ngOnInit(): void {
     this.productId=this.activated.snapshot.paramMap.get('productId');
     this.getProductDetails();

     this.productName=this.productDetails[0].name;
     this.productImagePath=this.productDetails[0].path;
     this.productCategory=this.productDetails[0].category;
     this.productQuantity=this.productDetails[0].quantity;
     this.productRatting=this.productDetails[0].ratting;
     this.productSeller=this.productDetails[0].seller;
     this.productPrice=this.productDetails[0].price;
     this.productTotalPrice=this.productPrice
     console.log(this.productPrice)


 };
 productDetails:any;
  productCount:any=1;
  productName:any;
  productId:any;
  productImagePath:any;
  productCategory:any;
  productPrice:any;
  productSeller:any;
  productRatting:any;
  productQuantity:any;
  productTotalPrice:any;


getProductDetails(){

  this.productDetails =this.service.item_list.filter((value:any)=>{
    if(value.id==this.productId){
      return value;
  }
} )


}
//  increase && decrease product count
 inceraseCount(){
  this.productCount+=1;
  this.productTotalPrice=this.productCount*this.productPrice;
 }
 decreaseCount(){
  if(this.productCount>0){
    this.productCount-=1;
  }else{
    this.productCount=0;
  }
  this.productTotalPrice=this.productCount*this.productPrice;
 }


}
