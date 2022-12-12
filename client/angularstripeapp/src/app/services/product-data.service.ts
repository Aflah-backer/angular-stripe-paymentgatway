import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { details } from '../comman/checkout/detailes';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

  getProducts() {
    const url = 'http://localhost:5002/api/products';
    return this.http.get(url);
  }

  getSingleProduct(productId:any){
    console.log(productId);
    
    const url = `http://localhost:5002/api/products/${productId}`
    console.log(url);
    
    return this.http.get(url)
  }

  postUserData(detailes:details){
    console.log("start to send");
    console.log(detailes,"in");
    
    
    const url = "http://localhost:5002/api/payment/";

    
    return this.http.post<details>(url,{detailes})
    
  }
  getDetials() {
    const url = 'http://localhost:5002/api/payment/';
    return this.http.get(url);
  }
}
