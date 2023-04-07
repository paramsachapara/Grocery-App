import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

    constructor(private fb:FormBuilder, private api:ApiService, private toastr: ToastrService){}
  ngOnInit(){
    this.getUserDetails()
  }

  userDataToUpdate:any;
  updateUser(){

    this.userDataToUpdate ={
      first_name:this.profileForm.get("first_name")?.value,
      last_name:this.profileForm.get("first_name")?.value,
      secondary_email:this.profileForm.get("secondary_email")?.value,
      secondary_mobile_number:this.profileForm.get("secondary_mobile_number")?.value,
      // password:this.profileForm.get("password")?.value,
      date_of_birth:this.profileForm.get("date_of_birth")?.value

    }
    console.warn("xxx",this.userDataToUpdate);

    this.api.updateUserData(this.userDataToUpdate).subscribe({
      next:(res:any)=>{
        this.toastr.success(res.message);
      },
      error:(err:any)=>{
        this.toastr.error(err.message);
      }
    })
  }
  getUserDetails(){
    this.api.userDetails().subscribe(
      {
        next:(res:any)=>{
          console.warn("userDetails api ma control avo");
          // this.userDetails==res;
          console.log("user data",res);
          localStorage.setItem("userDetails",JSON.stringify(res))
          this.profileForm.patchValue({
            first_name:res.data.first_name,
            last_name:res.data.last_name,
            primary_email:res.data.primary_email,
            primary_mobile_number:res.data.primary_mobile_number
          })
        },
        error:error=>{console.log(error);
          console.warn("userDetails api ma control no avo error avi gai");
          alert(error.message)
          console.log(error);}

      }
    )
  }
    profileForm = this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      primary_mobile_number:['',[Validators.required]],
      primary_email:['',[Validators.required,Validators.email]],
      secondary_email:['',[Validators.required , Validators.email]],
      secondary_mobile_number:['',[Validators.required]],
      date_of_birth:['',[Validators.required]]
      // password:['',Validators.required]
    })
}
