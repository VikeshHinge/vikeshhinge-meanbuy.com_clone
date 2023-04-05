
const express = require('express')

const mongoose = require('mongoose')

const cartSchma = mongoose.Schema({
    title:{type:String,required:true},
    img1:{type:String,required:true},
    categories:{type:String,required:true},
    price:{type:Number,required:true},
    discount:{type:Number,required:true},
    rating:{type:Number,required:true},
    description:{type:String},
    user:{type:String,required:true},
    quantity:{type:Number}
})


const cartModel = mongoose.model('cart',cartSchma)

module.exports = {cartModel}