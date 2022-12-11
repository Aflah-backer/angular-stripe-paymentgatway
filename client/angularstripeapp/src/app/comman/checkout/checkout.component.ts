import { Component } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  title = 'angularstripeapp';

  success: boolean = false

  failure: boolean = false

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

            paymentStripe(stripeToken, amount)
            
          }
    })
    const paymentStripe = (stripeToken: any, amount: number) => {
      this.checkout.makePayment(stripeToken,amount).subscribe((data: any) => {
        console.log(data);


        if(data.data === 'success') {
          this.success = true
        }else{
         this.failure = true 
        }
        
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
