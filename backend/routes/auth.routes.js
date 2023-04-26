const express = require('express')
const {userModel} = require('../models/user.model.js')
const userRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { CartAuthantication } = require('../middleware/cartAuth.js')


//GetProfile_________________________
userRouter.get('/profile',CartAuthantication, async(req,res)=>{
    try{
        let userdata = await userModel.find({_id:req.body.user})
        res.send(userdata)
    }catch(err){
        res.send({"err":err.message})
    }
})


//admin get _____________________________
userRouter.get('/allusers', async(req,res)=>{
   let query = req.body
    try{
        let userdata = await userModel.find(query)
        res.send(userdata)
    }catch(err){
        res.send({"err":err.message})
    }
})

//Register_________________________________
userRouter.post('/register',async(req,res)=>{
    let {name,email,password,contact}=req.body
    try{
        let check = await userModel.find({email:email})
        if(check.length>0){
            res.send({msg:"user already exist with this ID"})
        }else{
            bcrypt.hash(password, 3, async(err, hash) => {
               if(err){
                res.send({'msg':err.message},'user not able to register')
               }else{
                let user = new userModel({name,email,password:hash,contact})
                await user.save()
                res.send({'msg':'user register sucess !!!'})
               }
            })
        }
    }catch(err){
        res.send({'msg':err.message})
    }
})


// Login_______________________________
userRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;
   try{
      let user = await userModel.find({email})
       if(user.length>0){
        bcrypt.compare(password, user[0].password, (err, result)=>{
            if(result){
                let token = jwt.sign({ userId:user[0]._id }, 'meanbuy');
                res.send({msg:'User Login Sucess!','name':user[0].name,"token":token})
                }
                else{
                  console.log('wrong pw')
                  res.send({'err':'wrong password'})
                }
        })
       }else{
        res.send({sug:'User not exist, Signup first'})
       }
   }catch(err){
        res.send({msg:err.message})
    }
})


//update____________________
userRouter.patch('/updateuser',CartAuthantication,async(req,res)=>{
    let id = req.body.user;
     let data = req.body
    try{
        let user = await userModel.findByIdAndUpdate({_id:id},data)
        res.send("user updated")
    }catch(err){
        res.send({'msg':err.message})
    }

})


module.exports = {userRouter}