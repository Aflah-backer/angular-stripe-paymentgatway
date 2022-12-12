const express = require("express");
// const MongoClient = require("mongodb").MongoClient


// const connect = async (done) => {
//   try{
//     const url = "mongodb+srv://angular-pay:1234@angular-pay.4rwtzik.mongodb.net/?retryWrites=true&w=majority"
//     await MongoClient.connect(url)
//     console.log("conneted to port 3000");
//   } catch (err) {
//     console.log("connection Error" + err);
//   }
// }


const stripe = require("stripe")(
  "sk_test_51LzDYxSGogA8XySWFFZs91ne7aGCzfSw0eDJWRhaKr7qwVCxv7aJCR7A4msCMwyQQTNBFAbOriC6cloA5m3MtlnI004Urz2UKs"
);

const bodyparser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use(cors());

app.post("/checkout", async(req, res) => {

  try {
    token = req.body.token;
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
    return false;
  }
});

app.listen(3071, () => {
  // connect();
  console.log("App is listening on port 3000");
});
