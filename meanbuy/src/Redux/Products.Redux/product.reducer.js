
import {GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS,GET_PRODUCTS_CATEGORY,GET_UPDATE_PRODUCT} from './product.type.js';


let initialvalue = {
    productData:[],
    loading:false,
    total:0,
    error:false
}

export const productReducer = (state=initialvalue,{type,payload}) =>{

switch(type){
    case GET_PRODUCTS_LOADING :{
       return{
        ...state,
        productData:[],
        loading:true,
        error:''
       }
    }
    case GET_PRODUCTS_SUCESS :{
        return {
            ...state,
            productData:payload.data,
            loading:false,
            error:false,
        }
    }
    case GET_PRODUCTS_CATEGORY:{
        return{
            ...state,
            productData:payload.data,
            total:payload.Total,
            loading:false,
            error:false,
        }
    }
    case GET_PRODUCTS_ERROR :{
        return{
            ...state,
            productData:[],
            loading:false,
            error:payload
        }
    }
    case GET_UPDATE_PRODUCT :{
  
     let update = state.productData.map((ele)=>{
        if(ele._id === payload._id){
             return {
            ...ele,
             ...payload
            }
        }
        return ele
     })

    return{
        ...state,
        productData:update,
        loading:false,
        error:false
    }
    }
    default : {
        return state;
    }
}

}