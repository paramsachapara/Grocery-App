import { Injectable, OnInit } from '@angular/core';
import { cartItems } from 'src/app/shared/models/cartInterface';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';

interface Grocery {
  id: number;
  category: string;
  name: string;
  quantity: string;
  price: number;
  discount: string;
  seller: string;
  ratting: string;
}
@Injectable({
  providedIn: 'root',
})
export class AllItemService implements OnInit {



  cartitems_length=JSON.parse(localStorage.getItem('cartItems'))

  Cart_length=this.cartitems_length.length
  constructor(private api:ApiService,private toastr: ToastrService) {
    this.api.getAllProduct().subscribe({
      next:(res:any)=>{
        this.item_list=res.data;
      },
      error:(err:any)=>{

      }
    })
    if(this.cartitems_length){
      this.cartLength=this.Cart_length
    }else{
      this.cartLength=0
    }
  this.cartSize = new BehaviorSubject<number>(this.cartLength);

  }

  category: any;
  cartLength: number = 0;
  cartSize = new BehaviorSubject<number>(this.cartLength);
  cartGrandTotal = new BehaviorSubject<any>(0);
  alreadyDataExist:boolean=false

  ngOnInit() {console.log("ertytrew",this.item_list)}
  total_category:any;
    // {id:1,path:"../assets/apple.png",category:"All",quantity:"20" },
    // {id:2,path:"../assets/carot.png",category:"vegetable",quantity:"20"},
    // {id:3,path:"../assets/oranges.png",category:"fruit",quantity:"20" },
    // {id:4,path:"../assets/palak.png",category:"Coffee&Tea",quantity:"20" },
    // {id:4,path:"../assets/palak.png",category:"Meat",quantity:"20" },
    // {id:3,path:"../assets/oranges.png",category:"fruit",quantity:"20" },
    // {id:4,path:"../assets/palak.png",category:"Coffee&Tea",quantity:"20" },
    // {id:4,path:"../assets/palak.png",category:"Meat",quantity:"20" }

  // deliveryAddress = [
  //   'C-1326, aksharnath, Kalvibid , Bhavnagar',
  //   'C-1326, aksharnath, Kalvibid , Bhavnagar',
  //   'C-1326, aksharnath, Kalvibid , Bhavnagar',
  // ];
  item_list = [
    // {id: 1,path: '../assets/apple.png',category: 'fruit',name: 'apple',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 2,
    // },
    // {id: 2,path: '../assets/carot.png',category: 'vegetable',name: 'carrot',quantity: '20',price: 5,discount: '2',seller: 'adani',ratting: 3,
    // },
    // {id: 3,path: '../assets/oranges.png',category: 'fruit',name: 'oranges',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 4,
    // },
    // {id: 4,path: '../assets/palak.png',category: 'vegetable',name: 'palak',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 2,
    // },
    // {id: 5,path: '../assets/peaches.png',category: 'fruit',name: 'peaches',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 5,
    // },
    // {id: 6,path: '../assets/potato.png',category: 'vegetable',name: 'apple',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 4,
    // },
    // {id: 7,path: '../assets/strawberry.png',category: 'fruit',name: 'strawberry',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 3,
    // },
    // {id: 8,path: '../assets/apple.png',category: 'fruit',name: 'apple',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 2,
    // },
    // {id: 9,path: '../assets/carot.png',category: 'vegetable',name: 'carrot',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 3,
    // },
    // {id: 10,path: '../assets/oranges.png',category: 'fruit',name: 'oranges',quantity: '20',price: 5,discount: '2',seller: 'adani',ratting: 4,
    // },
    // {id: 11,path: '../assets/palak.png',category: 'vegetable',name: 'palak',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 2,
    // },
    // {id: 12,path: '../assets/peaches.png',category: 'fruit',name: 'peaches',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 5,
    // },
    // {id: 13,path: '../assets/potato.png',category: 'vegetable',name: 'apple',quantity: '20',price: 5,discount: '2',seller: 'amul',ratting: 4,
    // },
    // {id: 14,path: '../assets/strawberry.png',category: 'fruit',name: 'strawberry',quantity: '20',price: 5,discount: '2',seller: 'jio',ratting: 3,
    // },
  ];
  category_name = ['All', 'vegetable', 'fruit', 'coffee&Tea', 'meat'];

  // this array is for cart data

  cartarray: any;
  //function that push data to array of cart
  pushToCartArray(id: number) {
    // console.log("all items from service",this.item_list);

    const addedObject = this.item_list.find((row) => row.id == id);
    // console.log("item clicked",addedObject);

    let objectToPush: cartItems = {
      id: undefined,
      groceryName: undefined,
      price: undefined,
      category: undefined,
      // quantity: undefined,
      subtotal: undefined,
      imageURL: undefined,
      quantityCount: 1,
      seller: undefined,
    };
    objectToPush.id = addedObject?.id;
    objectToPush.groceryName = addedObject?.title;
    objectToPush.price = addedObject?.amount;
    objectToPush.category = addedObject?.category;
    // objectToPush.quantity = addedObject?.quantity;
    objectToPush.subtotal = addedObject?.amount;
    objectToPush.imageURL = addedObject?.avatar_image;
    objectToPush.seller = addedObject?.seller;
    // console.log("onject to push",objectToPush);

    let x= localStorage.getItem('cartItems')
    if(x){
      this.cartarray= JSON.parse(x)
    }
    else{
      this.cartarray=[]
    }
// console.log("cartarray from service",this.cartarray);

      let alreadyData = this.cartarray.find((x: { id: number | undefined }) => x.id == objectToPush.id);
      if(alreadyData){
        this.toastr.success('Already added :)');

      }
      else{
        this.cartarray.push(objectToPush)
        this.alreadyDataExist=true;
        this.toastr.success('product successfully added :)');

      }
      localStorage.setItem('cartItems',JSON.stringify(this.cartarray))



      let cartlength = JSON.parse(localStorage.getItem('cartItems')).length;
      this.cartSize.next(cartlength);
  } //pushToCartArray function ends here



} // ending of export



