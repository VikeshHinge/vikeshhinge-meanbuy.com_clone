const express = require('express')
const cors = require('cors')
const { connection } = require('./connection/db.js')
const {userRouter} = require('./routes/auth.routes.js')
const {productRoute} = require('./routes/product.route.js')
const{cartRoute} = require('./routes/cart.route.js')
const {orderRoute} = require ('./routes/order.routes.js')
const {CartAuthantication} = require('./middleware/cartAuth.js')


const app = express()
app.use(cors({ origin: "*" }))
app.use(express.json())


app.use('/user',userRouter)
app.use('/product',productRoute)

// app.use(CartAuthantication)
app.use('/cart',cartRoute)

app.use('/order',orderRoute)


app.listen(4040,async()=>{
   try{
    await connection
    console.log('connected to Dbs')
   }catch(err){
    console.log(err)
   }
   console.log('server running on 4040')
})