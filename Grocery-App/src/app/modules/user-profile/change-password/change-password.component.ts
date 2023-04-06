import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { ToastrService } from 'ngx-toastr';

//for toast
// import { AngularToastService } from "angular-toasts";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private formbuilder:FormBuilder, private api:ApiService,private router:Router,private toastr: ToastrService){}
  formData:any; //this variable stores the value of changePasswordForm :)

  passwordMatched:boolean=true;//this variable is true if newPassword and oldPassword is same :)

  changePasswordForm=this.formbuilder.group({
    oldPassword : [''] ,
    newPassword : [''],
    confirmPassword:['']
  })

  changePassword(){ // this function is called from template :)
    this.formData=this.changePasswordForm.getRawValue()
    if(this.formData.newPassword==this.formData.confirmPassword){
      const data:object={
        oldPassword:this.formData.oldPassword,
        newPassword: this.formData.newPassword
      }
      this.changePasswordApi(data); //password matches so this api from APIService is called :)
    }
    else{ // if password not matches then error will be displayed on browser :)
      this.passwordMatched=false;
      this.toastr.error('failure');
      //console.log("matche fail");

    }
  }

  changePasswordApi(data:any){ // this functtion will be called from changePassword function if both new and old pass matched :)
    this.api.changeUserPassword(data).subscribe({
      next:res=>{
          alert(res.message);
          console.log("password change success",res);
          this.passwordMatched=true;
          this.router.navigate(['home'])


      },
      error:err=>{
        alert(err.error.message);
        console.log("password change failure",err);

      }
    })

  }
}
