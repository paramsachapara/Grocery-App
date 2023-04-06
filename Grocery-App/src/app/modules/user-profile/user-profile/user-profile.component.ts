import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private router:Router){}
  getLogout(){
    this.router.navigate(['/home']);
    localStorage.removeItem('token');
    localStorage.removeItem('username')

  }
}
