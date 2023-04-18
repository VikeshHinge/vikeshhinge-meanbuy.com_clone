const jwt = require('jsonwebtoken')

const OrderAuthantication = (req,res,next) => {
     const token = req.headers.authorization ;
     
    //  delete req.body[_id]  //removing repetative ID

     let dates = []
     let currentDate = new Date();
     let arr = [0,4]
     for (let i = 0; i < arr.length; i++) {
       let nextDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + arr[i]);
       let weekday = nextDayDate.toLocaleDateString('en-US', { weekday: 'long' });
       let month = nextDayDate.toLocaleDateString('en-US', { month: 'long' });
       let year = nextDayDate.getFullYear();
       let day = nextDayDate.getDate();
       let date = `${weekday} ${month} ${year} ${day}`;
         dates.push(date)
     }
     
    if(token){
       jwt.verify(token,'meanbuy',(err,decoded)=>{
        if(decoded){
           if(req.originalUrl==='/order/checkout'){
            req.body.map((ele)=>{
                ele.user = decoded.userId
                ele.orderdate = dates[0]
                ele.deliverydate=dates[1]
                ele.status = 'ordered'
                ele.trackingID = Math.floor(Math.random()*10**7)
                delete ele._id
            })
            next()
           }
           else{
            req.body.user = decoded.userId
            req.body.orderdate = dates[0]
            req.body.deliverydate=dates[1]
            req.body.status = 'ordered'
            req.body.trackingID = Math.floor(Math.random()*10**7)
            delete req.body._id
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