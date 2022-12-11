import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

  getProducts() {
    const url = 'http://localhost:5000/api/products';
    return this.http.get(url);
  }
}
