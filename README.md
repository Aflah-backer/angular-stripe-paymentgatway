Stripe Payment Gateway Integration for Angular
This package provides an Angular service and components for integrating Stripe's payment gateway into your Angular application.

Installation
To install the package, run the following command in your Angular project:

Copy code
npm install angular-stripe-payment-gateway
Usage
Import the StripePaymentGatewayModule in your app module or any other module where you want to use the Stripe payment gateway.
Copy code
import { StripePaymentGatewayModule } from 'angular-stripe-payment-gateway';

@NgModule({
  imports: [
    StripePaymentGatewayModule
  ]
})
export class AppModule { }
Inject the StripePaymentGatewayService in the component where you want to use the Stripe payment gateway.
Copy code
import { StripePaymentGatewayService } from 'angular-stripe-payment-gateway';

export class MyComponent {
  constructor(private stripePaymentGatewayService: StripePaymentGatewayService) { }
}
Use the stripePaymentGatewayService.createPaymentIntent() method to create a PaymentIntent on the server. This method returns a promise that resolves with the PaymentIntent client secret, which you will need in the next step.
Copy code
this.stripePaymentGatewayService.createPaymentIntent(amount)
  .then(clientSecret => {
    // Use the client secret to complete the payment
  });
Use the stripePaymentGatewayService.completePayment() method to complete the payment. This method returns a promise that resolves with the payment status.
Copy code
this.stripePaymentGatewayService.completePayment(clientSecret, paymentMethod)
  .then(status => {
    // Handle the payment status
  });
Use the stripe-payment-form component to create a payment form. This component provides a pre-built form that includes inputs for the card number, expiration date, and CVC.
Copy code
<stripe-payment-form [clientSecret]="clientSecret" (paymentSuccess)="handlePaymentSuccess($event)" (paymentError)="handlePaymentError($event)"></stripe-payment-form>
The clientSecret input is required and should be set to the PaymentIntent client secret obtained in step 3. The paymentSuccess and paymentError outputs emit events when the payment is successful or encounters an error, respectively.

Examples
You can find examples of how to use this package in the /examples folder of this package.

Note
You need to have stripe account and api key to use this package.

Support
If you have any issues or questions, please open an issue on the GitHub repository or contact the maintainer.
