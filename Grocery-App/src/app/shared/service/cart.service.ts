import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  address: any;
  push(responce: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  mycart =new BehaviorSubject<any>([])


}
