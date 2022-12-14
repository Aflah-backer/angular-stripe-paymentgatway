import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  // post request to the server
  
  makePayment (stripeToken: any, amount: number):Observable<any> {
    const url = "http://localhost:5002/api/paymentStart"

    return this.http.post<any>(url,{token:stripeToken , amount:amount})
  }
}
