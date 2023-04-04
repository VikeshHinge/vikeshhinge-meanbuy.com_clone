const express = require('express')

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String,require:true},
    password:{type:String,require:true},
    address:Array,
    contact:Number
})

const userModel = mongoose.model('user',userSchema)
module.exports ={userModel}