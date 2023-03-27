import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AllItemService } from '../../service/all-item.service';
import { CartService } from '../../service/cart.service';
import { cartItems } from '../../../cartInterface';


@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit{
  constructor(config: NgbRatingConfig, private items :AllItemService, private cartService:CartService) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
	}
ngOnInit() {



}

  item_list = this.items.item_list;
  categories = this.items.category_name
  // this array is for cart data
  cartData:any=[];
  // funcition in called from html page button: Add to cart

  pushToCartArray(id: number){
    const addedObject = this.item_list.find(row => row.id == id);
    let objectToPush:cartItems={
      id: undefined,
      groceryName: undefined,
      price: undefined,
      category:undefined,
      quantity: undefined,
      subtotal: undefined,
      imageURL: undefined,
      quantityCount: 1,
      seller:undefined
    };
    objectToPush.id=addedObject?.id;
    objectToPush.groceryName=addedObject?.name;
    objectToPush.price=addedObject?.price;
    objectToPush.category=addedObject?.category;
    objectToPush.quantity=addedObject?.quantity;
    objectToPush.subtotal=addedObject?.price;
    objectToPush.imageURL=addedObject?.path;
    objectToPush.seller=addedObject?.seller;

    // if object already in cartData then increase its quantity
    // idExists = products.some(product => product.id === idToCheck);
    let alreadyData=this.cartData.find((x: { id: number | undefined; }) =>x.id== objectToPush.id)
      if(alreadyData){
        alreadyData.quantityCount+=1;
        console.error("total count",alreadyData.quantityCount);
      }else{
        this.cartData.push(objectToPush);

      }

    this.cartService.mycart.next(this.cartData)
    // console.log("cartData fp",this.cartData);
    }




  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 100,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  slickInit() {
    console.log('slick initialized')
  };

  breakpoint() {
    console.log('breakpoint')
  };




}
