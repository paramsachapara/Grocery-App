import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/service/api.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/service/user.service';
import { UserDetails } from 'src/app/shared/models/user-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
constructor(private login:FormBuilder, private api:ApiService, private router:Router,private userservice:UserService){}
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


  }
  ,
  error:err=>alert(err.error.message)
});

//user detail api


}

} // export ends here
