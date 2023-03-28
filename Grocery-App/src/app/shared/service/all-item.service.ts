import { Injectable, OnInit } from '@angular/core';
interface Grocery{
  id:number,
  category:string,
  name:string,
  quantity:string,
  price:number,
  discount:string,
  seller:string,
  ratting:string,
}
@Injectable({
  providedIn: 'root'
})
export class AllItemService implements OnInit{
  category: any;
  find(arg0: (x: any) => any): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  ngOnInit() {
   this.getCategories()
  }
  deliveryAddress=["C-1326, aksharnath, Kalvibid , Bhavnagar","C-1326, aksharnath, Kalvibid , Bhavnagar","C-1326, aksharnath, Kalvibid , Bhavnagar"]
  item_list=[
    {id:1,path:"../assets/apple.png",category:"fruit",name:"apple",quantity:"20",price:5,discount:"2",seller:"jio",ratting:2 },
    {id:2,path:"../assets/carot.png",category:"vegetable",name:"carrot",quantity:"20",price:5,discount:"2",seller:"adani",ratting:3},
    {id:3,path:"../assets/oranges.png",category:"fruit",name:"oranges",quantity:"20",price:5,discount:"2",seller:"jio",ratting:4 },
    {id:4,path:"../assets/palak.png",category:"vegetable",name:"palak",quantity:"20",price:5,discount:"2",seller:"jio",ratting:2 },
    {id:5,path:"../assets/peaches.png",category:"fruit",name:"peaches",quantity:"20",price:5,discount:"2",seller:"jio",ratting:5},
    {id:6,path:"../assets/potato.png",category:"vegetable",name:"apple",quantity:"20",price:5,discount:"2",seller:"jio",ratting:4} ,
    {id:7,path:"../assets/strawberry.png",category:"fruit",name:"strawberry",quantity:"20",price:5,discount:"2",seller:"jio",ratting:3},
    {id:8,path:"../assets/apple.png",category:"fruit",name:"apple",quantity:"20",price:5,discount:"2",seller:"jio",ratting:2 },
    {id:9,path:"../assets/carot.png",category:"vegetable",name:"carrot",quantity:"20",price:5,discount:"2",seller:"jio",ratting:3},
    {id:10,path:"../assets/oranges.png",category:"fruit",name:"oranges",quantity:"20",price:5,discount:"2",seller:"adani",ratting:4 },
    {id:11,path:"../assets/palak.png",category:"vegetable",name:"palak",quantity:"20",price:5,discount:"2",seller:"jio",ratting:2 },
    {id:12,path:"../assets/peaches.png",category:"fruit",name:"peaches",quantity:"20",price:5,discount:"2",seller:"jio",ratting:5},
    {id:13,path:"../assets/potato.png",category:"vegetable",name:"apple",quantity:"20",price:5,discount:"2",seller:"amul",ratting:4} ,
    {id:14,path:"../assets/strawberry.png",category:"fruit",name:"strawberry",quantity:"20",price:5,discount:"2",seller:"jio",ratting:3}
  ];
  category_name=["All","vegetable","fruit","coffee&Tea","meat"];
  x= new Set;
  p:Set<string> = new Set<string>(['All']);
  getCategories():string[] {
    this.item_list.forEach((grocery:any)=>{
      this.p.add(grocery.category);
    })
    return Array.from(this.p);
  }




}
