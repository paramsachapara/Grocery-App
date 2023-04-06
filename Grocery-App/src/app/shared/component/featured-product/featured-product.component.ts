import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AllItemService } from '../../service/all-item.service';
import { CartService } from '../../service/cart.service';
import { cartItems } from '../../models/cartInterface';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit{
  constructor(config: NgbRatingConfig, private items :AllItemService,private toastr: ToastrService,private api:ApiService) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;

    //get all products
    this.api.getAllProduct().subscribe({
      next:(res:any)=>{
      this.items.item_list=res.data
      this.item_list=res.data
      console.warn("all items",res);
      console.log("dfghjkjhgfdfghjkjhgfdsdfghjkjhgfd",this.items.item_list);

      },
      error:(err:any)=>{

      }


    })
    //get all category
    this.api.getAllCategory().subscribe({
      next:(res:any)=>{
        this.categories=res.data;

      },
      error:err=>{
        console.log("all categories error",err)
      }
    })
	}
ngOnInit() {}

  item_list:any
  categories:any



  // funcition in called from html page button: Add to cart
add(id:number){
  this.items.pushToCartArray(id)

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
