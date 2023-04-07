import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllItemService } from 'src/app/shared/service/all-item.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit{
  constructor(private service:AllItemService,private router:Router){}
  ngOnInit() {

    window.scrollTo(0,0)

  this.service.cartSize.next(0)
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 5000);
  }

}
