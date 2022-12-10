import { Component } from '@angular/core';
import { CheckoutService } from './services/checkout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularstripeapp';

  paymentHandler: any = null

  // method when component executes

  constructor(private checkout:CheckoutService){}

  ngOnInit() {
    this.invokeStripe()
  }

  makePayment(amount:number){

    const paymentHandler = (<any>window).StripeCheckout.configure({
          key:"pk_test_51LzDYxSGogA8XySWJhoCooj3hqQgP7ZZH8zNz2CYT0keouWW4R2zUErUqprGRcYsrwomNBtEUrWFwnSJ4KxkTFWF00pCY8ftes",
          locale:'auto',
          token:function(stripeToken:any) {
            console.log(stripeToken);

            paymentStripe(stripeToken)
            
          }
    })
    const paymentStripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        
      })
    }

    paymentHandler.open({
      name: "Benefits",
      description: "Test purchase using express and Node",
      amount: amount*100
    })
  }


  invokeStripe() {
    if (!window.document.getElementById("stripe-script")) {
      const script = window.document.createElement('script')
      script.id = 'stripe-script'
      script.type = 'text/javascript'
      script.src = 'https://checkout.stripe.com/checkout.js'
      script.onload =()=> {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key:"pk_test_51LzDYxSGogA8XySWJhoCooj3hqQgP7ZZH8zNz2CYT0keouWW4R2zUErUqprGRcYsrwomNBtEUrWFwnSJ4KxkTFWF00pCY8ftes",
          locale:'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script)
    }
  }
}
