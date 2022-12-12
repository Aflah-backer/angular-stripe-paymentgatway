import { Component } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';
import { details } from './details';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  

  paymentDetails!:any

  // det= this.paymentDetails[0]
  arr:details[]=[]

  constructor(private getAllDetails:ProductDataService){}

  ngOnInit(): void {
    this.getAllDetails.getDetials().subscribe(res => {
      this.paymentDetails=res 
      let data:any = res
      console.log(data)
      for(let i=0; i < data.length;i++){
         this.arr.push(this.paymentDetails[i])
         }
    })

    // 
  }
}
