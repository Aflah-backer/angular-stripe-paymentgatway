import mongoose from 'mongoose'

const PaymentSchema = new mongoose.Schema({
    fullname:{
        type: String,
        // required: true,
    },
    mobile: {
        type: String,
    },
    email:{
        type: String,
        required: "Email address is required",
        // unique: true,
        // lowercase: true,
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    address: {
        type: String,
        // required: true,
    },
    product:{
        type: String,
        // required: true,
    },
    price: {
        type: Number,
        // required: true,
    },
    tax:{
        type:Number
    },
    status: {
        type: String,
        // required: true
    }
},
    {timestamps: true}
)

export default mongoose.model("Payment", PaymentSchema)