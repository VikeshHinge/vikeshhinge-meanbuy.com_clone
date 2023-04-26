import {GET_ORDER,GET_ERROR,GET_LOADING,DO_BUYNOW,DO_CHECKOUT,UPDATE_ORDER} from './order.type.js';
import {GetOrder,PlaceOrder,GetallOrder, updateOrder} from './order.api.js';
import { useToast } from '@chakra-ui/react';

export const getOrders = async(dispatch) => {
     dispatch({type:GET_LOADING})
     try{
        let data = await GetOrder()
        let Total =0;
        for(let i=0; i<data.length; i++){
          if(data[i].status !== 'rejected'){
            Total+=(data[i].quantity*data[i].price)
          }
        }
        dispatch({type:GET_ORDER,payload:{data,Total}})
     }
     catch(err){
        dispatch({type:GET_ERROR,payload:err})
     }
}

export const GetAllOrders = async(dispatch) => {
   dispatch({type:GET_LOADING})
   try{
      let data = await GetallOrder()
      dispatch({type:GET_ORDER,payload:{data}})
   }
   catch(err){
      dispatch({type:GET_ERROR,payload:err})
   }
}

export const PlaceUrOrder = (products)=>async(dispatch)=> {
    
    try{
       let data = await PlaceOrder(products)
    }
    catch(err){
      dispatch({type:GET_ERROR,payload:err})
   }
}

export const UpdateOrsers = (key,status)=> async(dispatch)=>{
  
   console.log(key,status)
   try{
      let data = await updateOrder(key,status)
      dispatch({type:UPDATE_ORDER,payload:{id:key,status}})
   }
   catch(err){
     dispatch({type:GET_ERROR,payload:err})
  }
}
