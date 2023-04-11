import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { AllItemService } from '../../service/all-item.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit{
  searchedVal: any;
  resultProducts:any;


  constructor(private route:ActivatedRoute,private api:ApiService,private items:AllItemService){}
  ngOnInit() {
    this.route.params.subscribe((res)=>{
      this.searchedVal=res['val']
      // console.log("aaa",this.searchedVal)

      this.searchProducts(this.searchedVal)

      // console.log(value.val);


    })
  }

  searchProducts(searchTerm: string) {
    const apiUrl = 'https://your-api-url.com/products';

    this.api.getAllProduct().subscribe((data: any) => {
      // this.resultProducts=data
      // console.warn(this.resultProducts);
      let allData =data.data;
      this.resultProducts = allData.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());

      });
      // console.error(this.resultProducts)
    });
  }

  add(id:number){
    this.items.pushToCartArray(id);
  }

}
