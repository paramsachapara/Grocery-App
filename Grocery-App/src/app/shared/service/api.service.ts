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
  productById = environment.productById

  constructor(private http: HttpClient) { }

  getAllProduct() {
    try {
      return this.http.get(this.baseURL + this.allProduct, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' }) });
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  userRegistration(userData: any) {
    try {
      return this.http.post(this.baseURL + this.registrationURL, userData);
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  userLogin(userData: any) {

    try {
      return this.http.post<any>(this.baseURL + this.loginURL, userData);
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  userDetails() {

    try {
      return this.http.get(this.baseURL + this.getUser, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' }) });
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  changeUserPassword(allPassword: any) {
    try {
      return this.http.put<any>(this.baseURL + this.changePassword, allPassword)
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  getAllCategory() {
    try {
      return this.http.get(this.baseURL+ this.allCategory, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' }) });
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  postAddressData(address: addAddress) {
    try {
      return this.http.post<any>(this.baseURL + this.addAddress, address)
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  updateUserData(data: any) {
    try {
      return this.http.put(this.baseURL + this.editUser, data);
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  encryptdata(data: any) {
    try {
      return this.http.get(this.baseURL + this.encryption, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*', 'id': data }) })
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  addOrders(body: any, delivery_address_id: any, billing_address_id: any, payment_status: any, order_status: any) {
    try {
      return this.http.post(this.baseURL + this.addOrder, body, { headers: new HttpHeaders({ 'delivery_address_id': delivery_address_id, 'billing_address_id': billing_address_id, 'payment_status': payment_status, 'order_status': order_status }) })
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  deleteAddress(id: string) {
    try {
      return this.http.delete(this.baseURL + this.deleteCustomerAddress, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*', 'address_id': id }) })
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  editAddress(address: any, id: any) {
    try {
      return this.http.put(this.baseURL + this.editCustomerAddress, address, { headers: new HttpHeaders({ 'address_id': id }) })
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  allOrders() {
    try {
      return this.http.get(this.baseURL + this.allOrder, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' }) })
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  getOrderDetailById(id: any) {
    try {
      return this.http.get(this.baseURL + this.orderById, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*', 'order_id': id }) })
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  getProductBYId(id:any){
    try {
      return this.http.get(this.baseURL + this.productById, { headers: new HttpHeaders({ 'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*', 'product_id': id }) })
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  getProductsByCategories(id:string):Observable<any>{
    try {
      return  new Observable((observer) =>{this.http.get(this.baseURL+this.productByCategoryId,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*','category_id':id})
    }) .subscribe({next:(products:any) => {
      observer.next(products);
      observer.complete();
    }, error:(error:any) => {
      observer.error(error);
    }}
    );
    })
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
}
