import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllItemService } from 'src/app/shared/service/all-item.service';
import { ApiService } from 'src/app/shared/service/api.service';
import { CartService } from 'src/app/shared/service/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent implements OnInit {

  address:any;
  encryption_data!: string;
  constructor(private service:AllItemService, private router:Router, private api:ApiService,private toastr: ToastrService){ }
  ngOnInit() {
      this.getAllAddress();
  }

  addAddress(){
    this.router.navigate(['userprofile/profile/add-address'])
  }

  deleteAddress(id: any) {
    this.encryption(id);
    // location.reload();
  }

  editAddress(id: number) {
    this.router.navigate(['userprofile/profile/edit-address', id]);
  }
  encryption(id: any) {
    this.api.encryptdata(JSON.stringify(id)).subscribe({
      next: (encryption_res:any) => {
        console.log('hello');
        console.log('encryption_res', encryption_res);
        this.encryption_data = encryption_res.data;
        console.log('encryption_data', this.encryption_data);
        console.log(this.encryption_data);
        this.api.deleteAddress(this.encryption_data).subscribe(() => {
          this.toastr.success('Address Deleted', 'Success');
        });
      },
      error: (encryption_error) => {
        console.log('encryption_error', encryption_error);
      },
    });
  }

  getAllAddress(){
    this.api.userDetails().subscribe({
      next:(res:any)=>{
        this.address=res.data.addresses;
        
        console.log("all address",this.address);

      },
      error:(err:any)=>{
        this.toastr.error('Fail to load address', err);
      }
    })
  }

}
