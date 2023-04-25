import {GET_ITEMS_SUCESS,GET_ITEMS_LOADING,GET_ITEMS_ERROR} from './pg.type.js';

let initialvalue = {
    productData:[],
    loading:false,
    error:false,
}

export const ProductPgReducer = (state=initialvalue,{type,payload}) =>{

    switch(type){
        case GET_ITEMS_LOADING :{
           return{
            ...state,
            productData:[],
            loading:true,
            error:''
           }
        }
        case GET_ITEMS_SUCESS :{
            return {
                ...state,
                productData:payload,
                loading:false,
                error:false
            }
        }
        case GET_ITEMS_ERROR :{
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