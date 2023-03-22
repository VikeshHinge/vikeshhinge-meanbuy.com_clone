import {GET_CART_ERROR,GET_CART_LOADING,GET_CART_SUCESS,GET_CART_UPDATE,ADD_CART,DELETE_CART} from './cart.type.js';
import {GetCartItem,AddToCart} from './cart.API.js'


export const GetCartData = async(dispatch) => {
     dispatch ({type:GET_CART_LOADING})

     try{
      let email = localStorage.getItem('userInfo')
  
      let cart = await GetCartItem(email)
      let total = 0;
       for(let i=0; i<cart.length; i++){
         total+=cart[i].price;
       }
        console.log(total)
        dispatch ({type:GET_CART_SUCESS,payload:{cart,total}})
     }
     catch(err){
        dispatch({type:GET_CART_ERROR,payload:err.message})
     }
}

export const AddtoCart =async (product,dispatch) => {
 
   let payload = await AddToCart (product)
   //console.log(payload)
       //dispatch({type:ADD_CART,payload:product})
}