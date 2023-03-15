import { Component } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent {
  constructor(config: NgbRatingConfig) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
	}
  upper_box="upper_box";

  item_list=[
    {item_image_path:"../assets/apple.png",item_category:"fruit",item_name:"apple",item_quantity:"20",price:"5",discount:"2",seller:"jio",ratting:2 },
    {item_image_path:"../assets/carot.png",item_category:"vegetable",item_name:"carrot",item_quantity:"20",price:"5",discount:"2",seller:"jio",ratting:3},
    // {item_image_path:"../assets/Green Beans 250g.png",item_category:"vegetable",item_name:"Green Beans 250g",item_quantity:"20",price:"5",discount:1,seller:"jio",ratting:"3" },
    {item_image_path:"../assets/oranges.png",item_category:"fruit",item_name:"oranges",item_quantity:"20",price:"5",discount:"2",seller:"jio",ratting:4 },
    {item_image_path:"../assets/palak.png",item_category:"vegetable",item_name:"palak",item_quantity:"20",price:"5",discount:"2",seller:"jio",ratting:2 },
    {item_image_path:"../assets/peaches.png",item_category:"fruit",item_name:"peaches",item_quantity:"20",price:"5",discount:"2",seller:"jio",ratting:5},
    {item_image_path:"../assets/potato.png",item_category:"vegetable",item_name:"apple",item_quantity:"20",price:"5",discount:"2",seller:"jio",ratting:4} ,
    {item_image_path:"../assets/strawberry.png",item_category:"fruit",item_name:"strawberry",item_quantity:"20",price:"5",discount:"2",seller:"jio",ratting:3},
    //   item_image_path:"../assets/tomatos.png",   item_category:"vegetable", item_name:"tomatos",   item_quantity:"20",  price:"5",   discount:"2",   seller:"jio", ratting:"3" },
    // {item_image_path:"../assets/broccoli.png",item_category:"vegetable",item_name:"broccoli",item_quantity:"20",price:"5",discount:"2",seller:"jio",ratting:"3"}
  ]

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};





}
