import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlaceOrder } from '../models/place-order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSize: any;
  push(responce: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  mycart =new BehaviorSubject<any>([])
  cartTotal = new BehaviorSubject<number>(0)

  checkout:PlaceOrder ;

}
