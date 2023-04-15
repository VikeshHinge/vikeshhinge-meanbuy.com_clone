import axios from "axios";


//GetCart________________________________
export const GetCartItem = async ()=> {
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
    let {data} = await axios.get(`http://localhost:4040/cart`,config)
    return data;
}


//AddtoCart________________________________
export const AddToCart = async(item) => {
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
    let data = await axios.post('http://localhost:4040/cart/addtocart',item,config)
    return data
}


//DeleteCart_________________________________
export const DeleteCart = async(id)=>{
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
  let {data} =  await axios.delete(`http://localhost:4040/cart/deletecart/${id}`,config)
  console.log(data)
}