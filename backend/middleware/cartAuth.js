const jwt = require('jsonwebtoken')

const CartAuthantication = (req,res,next) => {

    const token = req.headers.authorization;

    if(token){
       jwt.verify(token,'meanbuy',(err,decoded)=>{
        //console.log(decoded)
        if(decoded){
           req.body.user = decoded.userId
           req.body.quantity=1
           next()
        }else{
            req.send({'err':err})
        }
       })
    }else{
        res.send({'msg':'Please Login for Cart !'})
    }

}

module.exports = {CartAuthantication}