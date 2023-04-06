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


  constructor(private items:AllItemService, private cartService:CartService,private api:ApiService, private userService:UserService){}
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
  // let x= localStorage.getItem('cartItems');
  // if (x){
  //   this.cart=JSON.parse(x);
  // }

}
isUserLogedIn:boolean=false;
ngOnInit() {
let p =localStorage.getItem('username');
if (p){
  this.userName =p
}

}



// getUserDetails(){
//   this.api.userDetails().subscribe(
//     {
//       next:res=>{
//         console.warn("userDetails api ma control avo");
//         // this.userDetails==res;
//         console.log("user data",res);
//         localStorage.setItem("userDetails",JSON.stringify(res))
//       },
//       error:error=>{console.log(error);
//         console.warn("userDetails api ma control no avo error avi gai");
//         alert(error.message)
//         console.log(error);}

//     }
//   )
// } //get user api ends



 doSearch(){

 }
}
