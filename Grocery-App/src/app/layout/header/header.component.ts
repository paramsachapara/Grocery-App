import { Component, OnInit } from '@angular/core';
import { AllItemService } from '../../shared/service/all-item.service';
import { CartService } from 'src/app/shared/service/cart.service';
import { ApiService } from 'src/app/shared/service/api.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  constructor(private items:AllItemService, private cartService:CartService,private api:ApiService, private userService:UserService){

  }
  cartItemCount = 0;
  cartTotal:any;
  cart:any;
  userName:string | undefined

ngDoCheck(): void {
  if(localStorage.getItem('token')){
    this.isUserLogedIn=true;
  }else{
    this.isUserLogedIn=false;
  }

    //username
  let p =localStorage.getItem('username');
  if (p){
    this.userName =p
  }

}
isUserLogedIn:boolean=false;
ngOnInit() {


//cart size
this.items.cartSize.subscribe((size) => {
  this.cartItemCount = size;
});

}
 doSearch(){

 }
}
