import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllItemService } from 'src/app/shared/service/all-item.service';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(
    private route: ActivatedRoute,
    private items: AllItemService,
    private api:ApiService
  ) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    // this.category = this.activatedroute.snapshot.paramMap.get('categoryName');
    this.route.params.subscribe((params) => {
      this.groceryCategorySlug = params['categoryName'];
      // console.warn("groceryCategorySlug",this.groceryCategorySlug);

      let categories;
      this.api.getAllCategory().subscribe((res: any) => {
        categories = res.data;
        // console.log("all categories",categories);
        let categoryId: any;

        categories.find((category: any) => {
          if (category.slug == this.groceryCategorySlug) {
            categoryId = category.id;
            // console.log("matched category id",categoryId);

            this.api.encryptdata(JSON.stringify(categoryId)).subscribe
            ({
              next: (res_encrypt: any) => {
                categoryId = res_encrypt.data;
                this.api.getProductsByCategories(categoryId)
                  .subscribe((res) => {
                    // console.log("responce of product",res.data);
                    const products = []
                    for (let i = 0; i < res.data.length; i++) {
                      products.push(res.data[i].product);
                    }
                    this.newDisplay=products;
                    // console.log('this.products final list', this.newDisplay);
                  });
              },
              error: (err: any) => {
                console.log(err);
              },
            });//encrypt

          }
        });
      })});
    // this.filteredProductsDuplicate.filteredProducts
    // console.log(this.filteredProductsDuplicate);
    // this.newDisplay = this.filteredProducts;
    // console.log("new products",this.newDisplay);

    // console.log(this.filteredProducts);
    // console.log(this.selectedBrand)
  }
  groceryCategorySlug:any
  category: any;
  all_item: any = this.items.item_list;
  products: any;
  isChanged = false; // used on onDisplay function

  //bellow function is used filter product based on category
  get filteredProducts() {
    if (this.category == 'All') {
      return this.all_item;
    } else {
      return this.all_item.filter(
        (product: { category: any }) => product.category === this.category
      );
    }
  }
  // filteredProductsDuplicate:any;

  // bellow value return name of unique store
  uniqueStores: any = this.all_item.filter(
    (value: { seller: any }, index: any, self: any[]) => {
      return (
        index ===
        self.findIndex((p: { seller: any }) => {
          return p.seller === value.seller;
        })
      );
    }
  );

  //used for displaying filter option
  onDisplay() {
    this.isChanged = !this.isChanged;
  }

  //seller which are checked in filter option
  selectedBrand: any[] = [];

  storeInArr(event: any) {
    const brand = event.target.value;
    if (event.target.checked) {
      this.selectedBrand.push(brand);
    } else {
      const id = this.selectedBrand.indexOf(event.target.value);
      this.selectedBrand.splice(id, 1);
    }
    console.log(this.selectedBrand);
    //call fulction to show value of selected brand
    this.doFilter();
  }
  newDisplay = this.filteredProducts;
  doFilter() {
    if (this.selectedBrand && this.selectedBrand.length > 0) {
      this.newDisplay = this.filteredProducts.filter((value: any) => {
        if (this.selectedBrand.includes(value.seller)) {
          return value;
        }
      });
      console.log(this.newDisplay);
    } else {
      this.newDisplay = this.filteredProducts;
    }
    // console.log(this.newDisplay);
  }

  // add data to cart

  add(id:number){
    this.items.pushToCartArray(id);
  }
}
