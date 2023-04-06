import { Component } from '@angular/core';
import { FormBuilder,FormControl ,FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private registration:FormBuilder, private api:ApiService, private router:Router){


  }
  registrationForm=this.registration.group({
    first_name:['',[Validators.required]],
    last_name:['',[Validators.required]],
    username:['',[Validators.required]],
    primary_mobile_number:['',[Validators.required]],
    primary_email:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  getRegistered(){
    const userData= this.registrationForm.getRawValue();
    console.log(userData);

    this.api.userRegistration(userData).subscribe(
      {next:res=>{
        console.log(res)
        this.router.navigate(['login']);
      }
      ,error:err=>alert(err.error.message)
      }
    )
  }


  }
