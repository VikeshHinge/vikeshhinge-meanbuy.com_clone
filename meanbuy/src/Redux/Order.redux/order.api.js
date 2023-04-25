import axios from "axios";


export const GetOrder = async() => {
    let config = { headers: {"authorization": localStorage.getItem('token') } }

   let {data} = await axios.get('http://localhost:4040/order/myorders',config)
   return data
}

export const GetallOrder = async() => {
  
   let {data} = await axios.get('http://localhost:4040/order/getallorders')
   return data
}


export const PlaceOrder = async(body)=> {
    
    let config = { headers: {"authorization": localStorage.getItem('token') } }
    let {data} = await axios.post('http://localhost:4040/order/checkout',body,config)
    return data
}


export const  updateOrder =async(id,body)=> {
    console.log(id,body)
    let {data} = await axios.patch(`http://localhost:4040/order/updateorder/${id}`,{status:body})
    console.log(data)
}