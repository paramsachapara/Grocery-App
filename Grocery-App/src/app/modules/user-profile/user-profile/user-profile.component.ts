import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllItemService } from 'src/app/shared/service/all-item.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private router:Router,private service:AllItemService){
  this.username=localStorage.getItem('username');
  this.cart=JSON.parse(localStorage.getItem('cartItems'))
}
  username:any;
  cart:any;
  getLogout(){
    this.router.navigate(['/home']);

    if (localStorage.getItem('cartData')){
      let tempArray=JSON.parse(localStorage.getItem('cartData'));


      this.updateCartData(this.username,this.cart,tempArray);

      localStorage.setItem('cartData',JSON.stringify(tempArray));


    }else{
      localStorage.setItem('cartData',JSON.stringify([]));
      let tempArray=JSON.parse(localStorage.getItem('cartData'));
      let cartObject={
        username:this.username,
        cart:this.cart
      }
      tempArray.push(cartObject)
      localStorage.setItem('cartData',JSON.stringify(tempArray));

    }

    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userDetails');
    // localStorage.removeItem('cartItems')
    localStorage.setItem('cartItems',JSON.stringify([]))

    // once logout cart size should be displayed 0
    this.service.cartSize.next(0);

  }


  updateCartData(username: string, cart: any, cartData:any) {
    const userIndex = cartData.findIndex((cartItem) => cartItem.username === username);
    if (userIndex !== -1) {
      cartData[userIndex].cart = cart;
    } else {
      cartData.push({ username, cart });
    }
  }
}
