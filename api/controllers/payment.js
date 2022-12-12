// const stripe = require("stripe")(
//     "sk_test_51LzDYxSGogA8XySWFFZs91ne7aGCzfSw0eDJWRhaKr7qwVCxv7aJCR7A4msCMwyQQTNBFAbOriC6cloA5m3MtlnI004Urz2UKs"
//   );

import mongoose from "mongoose";
import Payment from "../models/Payment.js";

//   const uuid = require("uuid");

// exports.StripePayment = async (req, res) => {
//   console.log(req.body);
//   try {
//     const { product, token } = req.body;
//     const idempontencyKey = uuid();
//     return stripe.customers
//       .create({
//         email: token.email,
//         source: token.id,
//       })
//       .then((customer) => {
//         stripe.charges.create({}, { idempontencyKey });
//       })
//       .then((result) => res.status(200).json(result));
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

export const getAllPaymentData = async (req, res, next) => {
  try {
    const getAllPaymentData = await Payment.find({});
    res.status(200).json(getAllPaymentData);
  } catch (error) {
    next(error);
  }
};

//create
export const createPayment = async (req, res, next) => {
  console.log("holle");
  console.log(req.body);
  const newPayment = new Payment(req.body.detailes);
  try {
    const savedPayment = await newPayment.save();
    res.status(200).json(savedPayment);
  } catch (error) {
    next(error);
  }
};

// update
export const updatePaymentData = async (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  try {
    const updatePaymentData = await Payment.updateOne(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      { $set: req.body },
      { new: true }
    );
    console.log(updatePaymentData);
    res.status(200).json(updatePaymentData);
  } catch (error) {
    next(error);
  }
};
