import axios from "axios";


export const GetOrder = async() => {
    let config = { headers: {"authorization": localStorage.getItem('token') } }

   let {data} = await axios.get('http://localhost:4040/order/myorders',config)
   return data
}

export const PlaceOrder = async(body)=> {
    
    let config = { headers: {"authorization": localStorage.getItem('token') } }
    let {data} = await axios.post('http://localhost:4040/order/checkout',body,config)
    console.log(data)
    return data
}