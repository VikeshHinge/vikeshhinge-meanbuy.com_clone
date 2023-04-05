
const express = require('express')

const mongoose = require('mongoose')


let productSchema = mongoose.Schema({
    title:{type:String,required:true},
    img1:{type:String,required:true},
    categories:{type:String,required:true},
    price:{type:Number,require:true},
    brand:{type:String,required:true},
    product_quantity:{type:Number,required:true},
    discount:{type:Number,required:true},
    rating:{type:Number,required:true},
    description:{type:String},
    details:{type:String},
})

const productModel = mongoose.model('product',productSchema)

module.exports = {productModel}