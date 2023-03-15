import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllItemService {
  category: any;
  find(arg0: (x: any) => any): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  item_list=[
    {id:1,path:"../assets/apple.png",category:"fruit",name:"apple",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:2 },
    {id:2,path:"../assets/carot.png",category:"vegetable",name:"carrot",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:3},
    {id:3,path:"../assets/oranges.png",category:"fruit",name:"oranges",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:4 },
    {id:4,path:"../assets/palak.png",category:"vegetable",name:"palak",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:2 },
    {id:5,path:"../assets/peaches.png",category:"fruit",name:"peaches",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:5},
    {id:6,path:"../assets/potato.png",category:"vegetable",name:"apple",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:4} ,
    {id:7,path:"../assets/strawberry.png",category:"fruit",name:"strawberry",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:3},
    {id:8,path:"../assets/apple.png",category:"fruit",name:"apple",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:2 },
    {id:9,path:"../assets/carot.png",category:"vegetable",name:"carrot",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:3},
    {id:10,path:"../assets/oranges.png",category:"fruit",name:"oranges",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:4 },
    {id:11,path:"../assets/palak.png",category:"vegetable",name:"palak",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:2 },
    {id:12,path:"../assets/peaches.png",category:"fruit",name:"peaches",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:5},
    {id:13,path:"../assets/potato.png",category:"vegetable",name:"apple",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:4} ,
    {id:14,path:"../assets/strawberry.png",category:"fruit",name:"strawberry",quantity:"20",price:"5",discount:"2",seller:"jio",ratting:3}
  ];
  category_name=["All","Vegetable","fruits","coffee&Tea","meat"]
}
