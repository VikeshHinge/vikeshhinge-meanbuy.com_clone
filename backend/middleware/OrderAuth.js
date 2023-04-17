const jwt = require('jsonwebtoken')

const OrderAuthantication = (req,res,next) => {
     const token = req.headers.authorization ;
     //console.log(req.originalUrl)

     const date = new Date();
     const DD = date.getDate().toString().padStart(2,'0')
     const MM = (date.getMonth()+1).toString().padStart(2,'0')
     const YY = date.getFullYear()


    if(token){
       jwt.verify(token,'meanbuy',(err,decoded)=>{
        if(decoded){
           if(req.originalUrl==='/order/checkout'){
            req.body.map((ele)=>{
                ele.user = decoded.userId
                ele.orderdate = `${DD}-${MM}-${YY}`
                ele.status = 'ordered'
                ele.trackingID = Math.floor(Math.random()*10**7)
            })
            next()
           }
           else{
            req.body.user = decoded.userId
            req.body.orderdate = `${DD}-${MM}-${YY}`
            req.body.status = 'ordered'
            req.trackingID = Math.floor(Math.random()*10**7)
            next()
           }
          
        }else{
            req.send({'err':err})
        }
       })
    }else{
        res.send({'sug':'Please Login for Cart !'})
    }

}

module.exports = {OrderAuthantication}