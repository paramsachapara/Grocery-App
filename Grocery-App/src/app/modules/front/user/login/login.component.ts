import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/service/api.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/service/user.service';
import { UserDetails } from 'src/app/shared/models/user-details';
import { AllItemService } from 'src/app/shared/service/all-item.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
constructor(private login:FormBuilder, private api:ApiService, private router:Router,private userservice:UserService, private service:AllItemService){}
  ngOnInit(){
    window.scrollTo(0,0);

  }
loginForm=this.login.group({
  username:['',[Validators.required]],
  password:['',[Validators.required]]
})



getlogedin(){
 const userData =this.loginForm.getRawValue();
 this.api.userLogin(userData).subscribe(
  {next:res=>{

    localStorage.setItem("token",res.data.token)
    localStorage.setItem("username",res.data.user.username)
    this.userservice.token=res.data.token
    this.userservice.userName=res.data.user.username
    this.router.navigate(['home']);
    console.log("token",this.userservice.token);
    // get user api

    //get user cart from localstorage
    let previousAllCart=JSON.parse(localStorage.getItem('cartData'))

    let desiredUsername = res.data.user.username;

    let cart = [];

    for (let i = 0; i < previousAllCart.length; i++) {
      if (previousAllCart[i].username === desiredUsername) {
        cart = previousAllCart[i].cart;
        break;
      }
    }

    //set this cart in cartItems of local storage
    localStorage.setItem('cartItems',JSON.stringify(cart));

    //next cartSize in header when user do login
    let cartOfUser=JSON.parse(localStorage.getItem('cartItems'));
    let userCartSizeAtLogin = cartOfUser.length;
    this.service.cartSize.next(userCartSizeAtLogin);

  }
  ,
  error:err=>alert(err.error.message)
});

//user detail api


}

} // export ends here
