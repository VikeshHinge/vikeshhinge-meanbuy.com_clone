const express = require('express')
const { connection } = require('./connection/db.js')
const {userRouter} = require('./routes/auth.routes.js')



const app = express()
app.use(express.json())

app.use('/user',userRouter)


app.listen(4040,async()=>{
   try{
    await connection
    console.log('connected to Dbs')
   }catch(err){
    console.log(err)
   }
   console.log('server running on 4040')
})