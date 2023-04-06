import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  token:string | undefined;
  userName:any;
  userDetails:UserDetails | undefined;
}
