import express from "express";
import dotenv from "dotenv"
import mongoose from 'mongoose'
// import logger from "morgan";
import productsRouter from "./routes/products.js"
import paymentRouter from "./routes/payment.js"
import cors from "cors";

const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongodb");
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
})

//middlewares
app.use(cors());
// app.use(logger("dev"));
app.use(express.json());

app.use("/api/products/", productsRouter)
app.use("/api/payment/",paymentRouter)

app.listen(5002, () => {
    connect()
  console.log("Connected to port backend?");
});
