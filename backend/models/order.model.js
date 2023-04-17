const express = require('express')

const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    title:{type:String,required:true},
    img1:{type:String,required:true},
    categories:{type:String,required:true},
    brand:{type:String},
    price:{type:Number,required:true},
    discount:{type:Number,required:true},
    rating:{type:Number,required:true},
    user:{type:String,required:true},
    product_quantity:{type:Number},
    quantity:{type:Number},
    orderdate:{type:String,required:true},
    deliverydate:{type:String,required:true},
    trackingID:{type:Number,required:true},
    status:{type:String,required:true}
})

const orderModel = mongoose.model('order',orderSchema)

module.exports = {orderModel}