import express from "express"
import { createPayment, getAllPaymentData, updatePaymentData } from "../controllers/payment.js"

const router = express.Router()

router.get("/", getAllPaymentData)

router.post('/', createPayment)

router.put("/:id", updatePaymentData)

export default router