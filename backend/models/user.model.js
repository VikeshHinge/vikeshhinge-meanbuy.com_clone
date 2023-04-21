const express = require('express')

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{type:String},
    avatar:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true},
    address:Array,
    contact:{type:Number}
})

const userModel = mongoose.model('user',userSchema)
module.exports ={userModel}