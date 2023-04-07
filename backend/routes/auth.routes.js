const express = require('express')
const {userModel} = require('../models/user.model.js')
const userRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { CartAuthantication } = require('../middleware/cartAuth.js')

userRouter.get('/', async(req,res)=>{
    try{
        let userdata = await userModel.find()
        res.send(userdata)
    }catch(err){
        res.send({"err":err.message})
    }
})


//Register_________________________________

userRouter.post('/register',async(req,res)=>{
    let {name,email,password}=req.body
    try{
        let check = await userModel.find({email:email})
        if(check.length>0){
            res.send("user already exist with this ID")
        }else{
            bcrypt.hash(password, 3, async(err, hash) => {
               if(err){
                res.send({'msg':err.message},'user not able to register')
               }else{
                let user = new userModel({name,email,password:hash})
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
    //console.log(email,password)
   try{
      let user = await userModel.find({email})
       if(user.length>0){
        bcrypt.compare(password, user[0].password, (err, result)=>{
            if(result){
                let token = jwt.sign({ userId:user[0]._id }, 'meanbuy');
                res.send({'msg':'User Login Sucess!',"token":token})
                }
                else{
                  console.log('wrong pw')
                  res.send({'err':'wrong password'})
                }
        })
       }else{
        res.send('User not exist, Signup first')
       }
   }catch(err){
        res.send({'msg':err.message})
    }
})


//update____________________

userRouter.post('/updateuser',CartAuthantication,async(req,res)=>{
    let id = req.body.user;
     let data = req.body
    try{
        let user = await userModel.findOneAndUpdate({_id:id},data)
        res.send("user updated")
    }catch(err){
        res.send({'msg':err.message})
    }

})


module.exports = {userRouter}