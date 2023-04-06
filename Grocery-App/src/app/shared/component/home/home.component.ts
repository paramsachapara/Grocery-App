import { Component } from '@angular/core';
import { AllItemService } from '../../service/all-item.service';
import { ApiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private service:AllItemService,private api:ApiService,private toastr: ToastrService){


}
}
