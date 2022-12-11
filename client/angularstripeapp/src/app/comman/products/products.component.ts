import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  checkout = '/checkout'

  products: any = []

  constructor(private product:ProductDataService){}

  ngOnInit(): void {
    this.product.getProducts().subscribe(res => {
      this.products=res
    })
  }

}
