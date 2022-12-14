import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    photos: {
        type: [String],
        require: true,
    },
    name: {
        type: String,
        require:true,
    },
    price: {
        type: Number,
        require: true,
    },
},
{ timestamps: true }
)

export default mongoose.model("Product", ProductSchema)