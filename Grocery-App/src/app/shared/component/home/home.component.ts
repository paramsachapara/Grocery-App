import { Component, OnInit } from '@angular/core';
import { AllItemService } from '../../service/all-item.service';
import { ApiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private service:AllItemService,private api:ApiService,private toastr: ToastrService,private spinner: NgxSpinnerService){

}
ngOnInit() {

  // let cartItems = localStorage.getItem('cartItems')
  // if(cartItems){
  //   console.warn("yesssssssssssssssss");

  // }
  // else{
  //   localStorage.setItem('cartItems',JSON.stringify([]))
  // }
  window.scrollTo(0,0)

     /** spinner starts on init */
     this.spinner.show();

     setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
}
