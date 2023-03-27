import { Component } from '@angular/core';
import { AllItemService } from 'src/app/shared/service/all-item.service';


@Component({
  selector: 'app-explore-category',
  templateUrl: './explore-category.component.html',
  styleUrls: ['./explore-category.component.css']
})
export class ExploreCategoryComponent {

constructor(private service:AllItemService){

}

  categories = this.service.category_name;

  total_category=[
    {id:1,path:"../assets/apple.png",category:"All",quantity:"20" },
    {id:2,path:"../assets/carot.png",category:"vegetable",quantity:"20"},
    {id:3,path:"../assets/oranges.png",category:"fruit",quantity:"20" },
    {id:4,path:"../assets/palak.png",category:"Coffee&Tea",quantity:"20" },
    {id:4,path:"../assets/palak.png",category:"Meat",quantity:"20" },
    {id:3,path:"../assets/oranges.png",category:"fruit",quantity:"20" },
    {id:4,path:"../assets/palak.png",category:"Coffee&Tea",quantity:"20" },
    {id:4,path:"../assets/palak.png",category:"Meat",quantity:"20" }
  ]

  item_list=this.service.item_list
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
