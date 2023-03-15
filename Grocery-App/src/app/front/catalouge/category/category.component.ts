import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllItemService } from 'src/app/service/all-item.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
upper_box: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;



 category: any;

  groceryCategory: any=this.items.item_list;
  products: any;

 constructor( private activatedroute:ActivatedRoute,    private items :AllItemService){};
 ngOnInit(): void {
  window.scrollTo(0,0)
    this.category=this.activatedroute.snapshot.paramMap.get('x');

 };

get filteredProducts() {
  if (this.category == 'All') {
    return this.groceryCategory;
  } else {
    return this.groceryCategory.filter(
      (product: { category: any }) => product.category === this.category
    );
  }
}

uniqueStores = this.groceryCategory.filter((value: { store: any; }, index: any, self: any[]) => {
  return (
    index ===
    self.findIndex((p: { store: any; }) => {
      return p.store === value.store;
    })
  );
});


isChanged = false;
onDisplay() {
  this.isChanged = !this.isChanged;
}
}
