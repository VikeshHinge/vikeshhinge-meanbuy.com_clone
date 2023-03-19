
import {GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS} from './product.type.js';

let initialvalue = {
    productData:[],
    loading:false,
    error:false,
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
        //console.log({'reducer':payload})
        return {
            ...state,
            productData:payload,
            loading:false,
            error:false
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
    default : {
        return state;
    }
}

}