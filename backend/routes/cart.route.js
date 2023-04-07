
const express = require('express')
const cartRoute = express.Router()
const {cartModel} = require('../models/cart.model.js')

//get___________________
cartRoute.get('/',async(req,res)=>{
    let cartuser = req.body.user
    try{
        let data = await cartModel.find({user:cartuser})
        res.send(data)
    }catch(err){
        res.send({'err':err.message})
    }
})

//addtocart______________________
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

//update___________________________
cartRoute.patch('/updatecart/:id',async(req,res)=>{
    let id = req.params.id
    //console.log(req.body)
    try{
     await cartModel.findOneAndUpdate({_id:id,user:req.body.user},{quantity:req.body.count})
        res.send('updated!')
    }catch(err){
        res.send({'err':err.message})
    }
})


//delete________________________________
cartRoute.delete('/deletecart/:id',async(req,res)=>{
    let id = req.params.id
    let user = req.body.user
    try{
        await cartModel.findOneAndDelete({_id:id,user})
        res.send('product removed prom cart')
    }catch(err){
        res.send({'err':err.message})
    }
})


module.exports={cartRoute}