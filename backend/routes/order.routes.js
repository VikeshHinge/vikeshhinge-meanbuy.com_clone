const express = require("express")
const orderRoute = express.Router()
const {orderModel} = require('../models/order.model.js')
const {productModel} = require('../models/product.model.js')
const {cartModel} = require('../models/cart.model.js')
const {OrderAuthantication} = require('../middleware/OrderAuth.js')

// Get_________________
orderRoute.get('/myorders',OrderAuthantication,async(req,res)=>{
    console.log(req.body)
    try{
        let orders = await orderModel.find({user:req.body.user})
        res.send(orders)
    }
    catch(err){
        res.send({msg:err.message})
    }
})

//Get admin side --------------------------
orderRoute.get('/getallorder',OrderAuthantication,async(req,res)=>{
    let query = req.query
    try{
        let orders = await orderModel.find(query)
        res.send(orders)
    }
    catch(err){
        res.send({msg:err.message})
    }
})


//cancel my order ---------------------------
orderRoute.delete('/cancel',OrderAuthantication,(req,res)=>{
    res.send('cancel')
})


//BuyNow------------------------------------
orderRoute.post('/buynow',OrderAuthantication,async(req,res)=>{
   let product = req.body;
//    console.log(product)
        let qty = req.body.product_quantity - req.body.quantity
    try{
         let data = new orderModel(product)
         await data.save()
         let item = await productModel.findOneAndUpdate({title:req.body.title},{product_quantity:qty})
          let cart = await cartModel.deleteOne({title:req.body.title},{user:req.body.user})
         res.send({msg:'Checkout Success !'})
    }
    catch(err){
        res.send({msg:err.message})
    }
})

//Mini Foldable Keyboard"-55-1
//Spider-Man Black Swing Model-45-4
//Disney Foldable Trampoline For Kids-40-1

//checkout _________________________________
orderRoute.post('/checkout',OrderAuthantication,async(req,res)=>{
  let products = req.body;
  console.log(products)
  try{
    let data = await orderModel.insertMany(products)
  
    products.map(async(ele)=>{
        let qty = ele.product_quantity - ele.quantity
        let item = await productModel.findOneAndUpdate({title:ele.title},{product_quantity:qty})
        let cart = await cartModel.deleteOne({title:ele.title},{user:ele.user})
    })
    res.send({msg:'Checkout Success !'})
   }
   catch(err){
   res.send({msg:err.message})
  }
})

module.exports = {orderRoute}
