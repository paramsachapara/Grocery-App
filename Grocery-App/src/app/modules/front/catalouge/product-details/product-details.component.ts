import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllItemService } from 'src/app/shared/service/all-item.service';
import { ApiService } from 'src/app/shared/service/api.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit
  {
  constructor(private activated:ActivatedRoute, private service:AllItemService,private api:ApiService){}

 ngOnInit(): void {
     this.productId=this.activated.snapshot.paramMap.get('productid');
     console.log("Product id",this.productId);

    //  this.getProductDetails(); junu
    this.api.encryptdata(this.productId).subscribe({
      next: (res: any) => {
        this.encryptedId = res.data;
        // console.log("encrypted data",res.data);
        console.log('encrypted data', this.encryptedId);

        this.api.getProductBYId(this.encryptedId).subscribe({
          next: (res: any) => {
            this.productName = res.data.title;
            this.productImagePath = res.data.avatar_image;
            this.productCategory = 'default';
            this.productQuantity = 1;
            this.productRatting = 3;
            this.productSeller = 'default';
            this.productPrice = res.data.amount;
            this.short_description=res.data.short_description
            this.description=res.data.description
            this.productTotalPrice = this.productQuantity * this.productPrice;
            console.log('product');
          },
          error: (err: any) => {},
        }); ///getProduct by id ends here
      },
      error: (err: any) => {
        console.log('encryption problem in product details', err);
      },
    });




    // this.api.getOrderDetailById //junu


    //  console.log(this.productPrice)


 };
  encryptedId:any;
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
  productSlug:any;
  short_description: any;
  description: any;


getProductDetails(){

  this.productDetails =this.service.item_list.filter((value:any)=>{
    if(value.id==this.productId){
      return value;
  }
} )
}

//add product to cart
 add(id:any){
 this.service.pushToCartArray(id);
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
