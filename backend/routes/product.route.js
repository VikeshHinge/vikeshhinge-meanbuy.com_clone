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


//update__________________________________
productRoute.patch('/update/:id',async(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    let id = req.params.id;
    try{
       let product = await productModel.findOneAndUpdate({_id:req.params.id},req.body)
         //console.log(product)
        res.send('product get Updated!')
    }catch(err){
        res.send({'msg':err.message})
    }
})


//DeleteProduct___________________________________
productRoute.delete('/deleteproduct/:id',async(req,res)=>{
    let id = req.params.id
    try{
       await productModel.deleteOne({_id:id})
    }catch(err){
        res.send({'msg':err.message})
    }
})


module.exports = {productRoute}

