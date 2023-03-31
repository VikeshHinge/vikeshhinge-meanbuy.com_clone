import axios from "axios";

export const GetCartItem = async (user)=> {
    //console.log(user)
    let {data} = await axios.get(`http://localhost:4040/cart?user=${user}`)
    return data;
}

export const AddToCart = async(item) => {
    let email= localStorage.getItem('userInfo')||'';
  
    let {title,img1,categories,brand,price,discount,rating,description} =item;
  
    let temp = await axios.get(`http://localhost:4040/cart?user=${email}&&title=${title}`)
 
    if(temp.data.length >0){
        alert('Product Present In Cart Allready !')
        return ;
    }

    let product={title,img1,categories,brand,price,discount,rating,description}
    product.user = email;
   
    
   let res = await axios.post(`http://localhost:4040/cart`,product)
   .then(
    alert('product added in cart!')
   )
   return res.data
}

export const DeleteCart = async(id)=>{
   await axios.delete(`http://localhost:4040/cart/${id}`)
}