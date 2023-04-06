import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  orderID: any;
  encryptedOrderId: string;
  orderDetails: any;
  orderProducts: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe((res) => {
      this.orderID = res['id'];
    });
  }
  ngOnInit() {
    if (this.orderID) {
      this.api.encryptdata(this.orderID).subscribe({
        next: (res: any) => {
          this.encryptedOrderId = res.data;

          this.api.getOrderDetailById(this.encryptedOrderId).subscribe({
            next: (res: any) => {
              this.orderDetails=res
              console.log(this.orderDetails);

            },
            error: (err: any) => {
              this.toastr.error('error in fetching order detail');
            },
          });
        },
        error: (err: any) => {
          this.toastr.error('error');
        },
      });
    }
  }
}
