import Stripe from 'stripe';
const stripe = new Stripe("sk_test_51LzDYxSGogA8XySWFFZs91ne7aGCzfSw0eDJWRhaKr7qwVCxv7aJCR7A4msCMwyQQTNBFAbOriC6cloA5m3MtlnI004Urz2UKs");
//create
export const paymentPost = async (req,res,next) => {
    try {
        let token = req.body.token;
        const customer = await stripe.customers
          .create({
            email: "geekygautam1999@gmail.com",
            source: token.id,
          })
          .then(async (customer)   => {
            
            const paymentIntent = await stripe.paymentIntents.create({
              customer :customer.id,
              amount: req.body.amount*100,
              currency: 'usd',
              payment_method_types: ['card'],
            });
            return paymentIntent; 
          })
          .then((charge) => {
            res.json({
              data: "success",
            });
          })
          .catch((err) => {
            res.json({
              data: "failure",
            });
          });
          
        return true;
    } catch (error) {
        next(error)
    }
}