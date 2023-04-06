import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../models/user-details';
import { addAddress } from '../models/add-address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = environment.baseURl;
  registrationURL = environment.registration;
  loginURL = environment.login;
  getUser = environment.getUserDetails;
  changePassword = environment.changePassword;
  allCategory = environment.allCategory
  addAddress = environment.addAddress
  editUser = environment.editUser
  encryption = environment.encryption
  addOrder = environment.addOrder
  allProduct = environment.allProduct
  allOrder = environment.allOrders
  deleteCustomerAddress = environment.deleteCustomerAddress
  editCustomerAddress = environment.editCustomerAddress
  orderById = environment.getOrderDetailById
  productByCategoryId = environment.productByCategoryId

  constructor(private http: HttpClient) { }

  getAllProduct() {
    return this.http.get(this.baseURL + this.allProduct, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' }) });
  }
  userRegistration(userData: any) {
    return this.http.post(this.baseURL + this.registrationURL, userData);
  }
  userLogin(userData: any) {
    return this.http.post<any>(this.baseURL + this.loginURL, userData);
  }
  userDetails() {
    return this.http.get(this.baseURL + this.getUser, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' }) });
  }
  changeUserPassword(allPassword: any) {
    return this.http.put<any>(this.baseURL + this.changePassword, allPassword)
  }
  getAllCategory() {
    return this.http.get(this.baseURL + this.allCategory, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' }) });
  }
  postAddressData(address: addAddress) {
    return this.http.post<any>(this.baseURL + this.addAddress, address)
  }
  updateUserData(data: any) {
    return this.http.put(this.baseURL + this.editUser, data);
  }
  encryptdata(data: any) {
    return this.http.get(this.baseURL + this.encryption, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*', 'id': data }) })
  }
  addOrders(body: any, delivery_address_id: any, billing_address_id: any, payment_status: any, order_status: any) {
    return this.http.post(this.baseURL + this.addOrder, body, { headers: new HttpHeaders({ 'delivery_address_id': delivery_address_id, 'billing_address_id': billing_address_id, 'payment_status': payment_status, 'order_status': order_status }) })
  }
  deleteAddress(id: string) {
    return this.http.delete(this.baseURL + this.deleteCustomerAddress, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*', 'address_id': id }) })
  }
  editAddress(address: any, id: any) {
    console.log(address);
    return this.http.put(this.baseURL + this.editCustomerAddress, address, { headers: new HttpHeaders({ 'address_id': id }) })
  }
  allOrders() {
    return this.http.get(this.baseURL + this.allOrder, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' }) })
  }
  getOrderDetailById(id: any) {
    return this.http.get(this.baseURL + this.orderById, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*', 'order_id': id }) })
  }
  getProductsByCategories(id:string):Observable<any>{
    return  new Observable((observer) =>{this.http.get(this.baseURL+this.productByCategoryId,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*','category_id':id})
  }) .subscribe({next:(products:any) => {
    observer.next(products);
    observer.complete();
  }, error:(error:any) => {
    observer.error(error);
  }}
  );
  })
  }
}
