import express from 'express'
import { paymentPost } from '../controllers/paymentStart.js';



const router = express.Router()

router.post('/', paymentPost)

export default router