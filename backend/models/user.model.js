const express = require('express')

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true},
    address:Array,
    contact:Number
})

const userModel = mongoose.model('user',userSchema)
module.exports ={userModel}