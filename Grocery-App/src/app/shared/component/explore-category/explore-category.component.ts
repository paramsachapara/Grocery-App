import { Component, OnInit } from '@angular/core';
import { AllItemService } from 'src/app/shared/service/all-item.service';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-explore-category',
  templateUrl: './explore-category.component.html',
  styleUrls: ['./explore-category.component.css']
})
export class ExploreCategoryComponent implements OnInit{

constructor(private service:AllItemService , private api:ApiService){
  // this.total_category=this.service.total_category
  // console.log("all c ",this.total_category);
  this.api.getAllCategory().subscribe({
    next:(res:any)=>{
      this.total_category=res.data;

    },
    error:err=>{
      console.log("all categories error",err)
    }
  })

}
  ngOnInit() {
  }


  // categories = this.service.category_name;


    total_category:any




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
    // console.log('slick initialized')
  };

  breakpoint() {
    // console.log('breakpoint')
  };




}
