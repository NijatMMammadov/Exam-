import { model, Schema } from "mongoose";

let ProductSchema=new Schema({
    name:String,
    title:String,
    price:Number,
    image:String
})

export let ProductModel=new model("products",ProductSchema)