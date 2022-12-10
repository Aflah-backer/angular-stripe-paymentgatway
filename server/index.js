const express = require("express");

const stripe = require("stripe")(
  "sk_test_51LzDYxSGogA8XySWFFZs91ne7aGCzfSw0eDJWRhaKr7qwVCxv7aJCR7A4msCMwyQQTNBFAbOriC6cloA5m3MtlnI004Urz2UKs"
);

const bodyparser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use(cors());

app.post("/checkout", (req, res) => {
  console.log(req.body); 

  try {
    token = req.body.token;
    const customer = stripe.customers
      .create({
        email: "geekygautam1999@gmail.com",
        source: token.id,
      })
      .then(async (customer)   => {
        
        const paymentIntent = await stripe.paymentIntents.create({
          customer :customer.id,
          amount: 1099*100,
          currency: 'usd',
          payment_method_types: ['card'],
        });
        return paymentIntent; 
      })
      .then((charge) => {
        console.log(charge,11111111111111);
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
    return false;
  }
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
