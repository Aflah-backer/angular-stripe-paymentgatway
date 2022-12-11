import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductDataService } from 'src/app/services/product-data.service';
import { details } from './detailes';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  xx: string = 'payment pending'
  details!: details



  async add(form: NgForm) {
    let obj: details = {
      fullName: form.value.name,
      mobile: form.value.mobile,
      email: form.value.email,
      address: form.value.address,
      product: this.singlePro.name,
      price: this.singlePro.price,
      tax: this.singlePro.price * 3 / 100,
      status: this.xx
    }

    this.details = obj
    await this.makePayment(this.singlePro.price)
    this.details.status = this.xx
  }

  title = 'angularstripeapp';

  success: boolean = false

  failure: boolean = false

  paymentHandler: any = null

  // method when component executes
  singlePro: any = []


  constructor(private checkout: CheckoutService, private singleProduct: ProductDataService, private route: ActivatedRoute) { }

  id: any

  ngOnInit() {
    this.id = this.route.snapshot.params['_id']
    this.singleProduct.getSingleProduct(this.id).subscribe(res => {
      console.log(res);

      this.singlePro = res
    })
    this.invokeStripe()
  }

  async makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: "pk_test_51LzDYxSGogA8XySWJhoCooj3hqQgP7ZZH8zNz2CYT0keouWW4R2zUErUqprGRcYsrwomNBtEUrWFwnSJ4KxkTFWF00pCY8ftes",
      locale: 'auto',

      token: function (stripeToken: any) {
        console.log(stripeToken);

        paymentStripe(stripeToken, amount)

      }
    })
    const paymentStripe = async (stripeToken: any, amount: number) => {
      this.checkout.makePayment(stripeToken, amount)
        .subscribe((data: any) => {
          if (data.data == 'success') {
            this.success = true
            this.details.status = "success"
          } else {
            this.failure = true

          }

        })
    }


    paymentHandler.open({
      name: "Benefits",
      description: "Test purchase using express and Node",
      amount: amount * 100
    })
  }


  invokeStripe() {
    if (!window.document.getElementById("stripe-script")) {
      const script = window.document.createElement('script')
      script.id = 'stripe-script'
      script.type = 'text/javascript'
      script.src = 'https://checkout.stripe.com/checkout.js'
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: "pk_test_51LzDYxSGogA8XySWJhoCooj3hqQgP7ZZH8zNz2CYT0keouWW4R2zUErUqprGRcYsrwomNBtEUrWFwnSJ4KxkTFWF00pCY8ftes",
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script)
    }

    
    
  }
  sendAllData (data:details){
    this.singleProduct.postUserData(data).subscribe((result) => {
      console.log(result);
      
    })
    this.sendAllData(this.details)
  }





}
