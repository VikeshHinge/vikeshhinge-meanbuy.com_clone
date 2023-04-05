
const express = require('express')
const cartRoute = express.Router()
const {cartModel} = require('../models/cart.model.js')


cartRoute.get('/',async(req,res)=>{
    let cartuser = req.body.user
    try{
        let data = await cartModel.find({user:cartuser})
        res.send(data)
    }catch(err){
        res.send({'err':err.message})
    }
})


cartRoute.post('/addtocart',async(req,res)=>{
    let product = req.body;
    try{
       let item = await cartModel.find({title:product.title,user:product.user})
       if(item.length > 0){
        res.send('Product is present in cart already')
       }else{
        let data = new cartModel(product)
        await data.save()
        res.send('product added to cart')
       }
    }catch(err){
        res.send({'err':err.message})
    }
})



module.exports={cartRoute}