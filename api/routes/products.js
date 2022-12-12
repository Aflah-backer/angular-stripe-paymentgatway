import express from "express"
import { createProduct, getProduct, getProducts } from "../controllers/products.js";

const router = express.Router();

//post products
router.post("/",createProduct)
//get products
router.get("/", getProducts)
//getproduct
router.get("/:id", getProduct)


export default router