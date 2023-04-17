import {GET_ORDER,GET_ERROR,GET_LOADING,DO_BUYNOW,DO_CHECKOUT} from './order.type.js';
import {GetOrder,PlaceOrder} from './order.api.js'

export const getOrders = async(dispatch) => {
     dispatch({type:GET_LOADING})
     try{
        let data = await GetOrder()
        console.log(data)
        dispatch({type:GET_ORDER,payload:data})
     }
     catch(err){
        dispatch({type:GET_ERROR,payload:err})
     }
}

export const PlaceUrOrder = (products)=>async(dispatch)=> {
    console.log(products)
    dispatch({type:GET_LOADING})
    try{
       let data = await PlaceOrder(products)
       console.log(data)
    }
    catch(err){
      dispatch({type:GET_ERROR,payload:err})
   }
}