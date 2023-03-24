
import {GET_CART_ERROR,GET_CART_LOADING,GET_CART_SUCESS,GET_CART_UPDATE,ADD_CART,DELETE_CART} from './cart.type.js';


let initialvalue = {
    cart:[],
    loading:false,
    error:false,
    total:0
}

export const cartReducer = (state=initialvalue,{type,payload}) => {
       
        switch(type){
            case GET_CART_SUCESS :{
                console.log(payload)
                return{
                    ...state,
                    error:false,
                    loading:false,
                    cart:payload.cart,
                    total:payload.total
                }
            }
            case GET_CART_ERROR :{
                return {
                    ...state,
                    error:payload,
                    cart:[],
                    loading:false
                }

            }
            case GET_CART_LOADING :{
                return{
                    ...state,
                    error:'',
                    loading:true,
                    cart:[]
                }
            }
            case ADD_CART :{
                return{
                    ...state,
                    error:false,
                    loading:false,
                    cart:[...state.cart,payload]
                }
            }
            case DELETE_CART :{
                console.log(payload)
                let newcart = state.cart.filter((ele)=>ele.id !== payload)
                let Total = 0;
                for(let i=0; i<newcart.length; i++){
                   Total+=newcart[i].price
                }
                console.log(newcart)
                return{
                    ...state,
                    error:false,
                    loading:false,
                    cart:newcart,
                    total:Total
                }
            }
            default:{
                return state;
            }
        }
}