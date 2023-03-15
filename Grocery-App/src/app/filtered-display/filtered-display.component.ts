import { Component } from '@angular/core';

@Component({
  selector: 'app-filtered-display',
  templateUrl: './filtered-display.component.html',
  styleUrls: ['./filtered-display.component.css']
})
export class FilteredDisplayComponent {
  top_sell:any[]=[
    {
      item_image_path:"../assets/apple.png",
      item_category:"fruit",
      item_name:"apple",
      item_quantity:"20",
      price:"5",
      discount:"2",
      seller:"jio",
      ratting:"3"
    },
    {
      item_image_path:"../assets/carot.png",
      item_category:"vegetable",
      item_name:"carrot",
      item_quantity:"20",
      price:"5",
      discount:"2",
      seller:"jio",
      ratting:"3"
    }]

    top_rated:any[]=[
      {
        item_image_path:"../assets/apple.png",
        item_category:"fruit",
        item_name:"apple",
        item_quantity:"20",
        price:"5",
        discount:"2",
        seller:"jio",
        ratting:"3"
      },
      {
        item_image_path:"../assets/carot.png",
        item_category:"vegetable",
        item_name:"carrot",
        item_quantity:"20",
        price:"5",
        discount:"2",
        seller:"jio",
        ratting:"3"
      }]

      trending:any[]=[
        {
          item_image_path:"../assets/apple.png",
          item_category:"fruit",
          item_name:"apple",
          item_quantity:"20",
          price:"5",
          discount:"2",
          seller:"jio",
          ratting:"3"
        },
        {
          item_image_path:"../assets/carot.png",
          item_category:"vegetable",
          item_name:"carrot",
          item_quantity:"20",
          price:"5",
          discount:"2",
          seller:"jio",
          ratting:"3"
        }]

        recently_added:any[]=[
          {
            item_image_path:"../assets/apple.png",
            item_category:"fruit",
            item_name:"apple",
            item_quantity:"20",
            price:"5",
            discount:"2",
            seller:"jio",
            ratting:"3"
          },
          {
            item_image_path:"../assets/carot.png",
            item_category:"vegetable",
            item_name:"carrot",
            item_quantity:"20",
            price:"5",
            discount:"2",
            seller:"jio",
            ratting:"3"
          }]
}
