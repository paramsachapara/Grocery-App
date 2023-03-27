import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(){}
  cartArray:any;
  currentCartTotal:number|undefined;
  cartSize:number| undefined;
  searchCategory:any;
  searchWord:any
  ngOnInit() {
    // this.cartService.mycart.subscribe((res)=>{
    //   console.log("header",res);
    //   this.cartArray=res;
    //   this.cartSize=this.cartArray.length;
    //   console.log("length",this.cartSize);

    // })

  }


 doSearch(){

 }
}
