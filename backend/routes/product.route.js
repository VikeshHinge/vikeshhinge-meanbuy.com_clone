const express = require("express")
const productRoute = express.Router()
const {productModel} = require ('../models/product.model.js')

//GET_____________________________________
productRoute.get('/',async(req,res)=>{
    const query = req.query
    try{
      let data = await productModel.find(query)
      res.send(data)
    }catch(err){
        res.send({'msg':err.message})
    }
})


//Addproduct _______________________________________
productRoute.post('/addproduct',async(req,res)=>{
    const payload = req.body
    console.log(payload)
    try{
        let item =await productModel.insertMany(payload)
       // await item.save()
        res.send('product get added')
    }catch(err){
        res.send({'msg':err.message})
    }
})


productRoute.patch(`/update/:id`,(req,res)=>{
    res.send('pro update')
})

productRoute.delete(`/deleteproduct`,async(res,req)=>{
      try{
      res.send('delete')
      }catch(err){
        res.send({'msg':err.message})
    }
})


module.exports = {productRoute}

