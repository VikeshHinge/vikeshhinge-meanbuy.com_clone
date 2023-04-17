import {GET_ORDER,GET_ERROR,GET_LOADING,DO_BUYNOW,DO_CHECKOUT} from './order.type.js';

const initialvalue = {
     loading:false,
     error:false,
     orders:[]
}


export const orederReducer = (state=initialvalue,{type,payload}) => {

   switch(type){

    case GET_LOADING : {
        return{
          ...state,
          loading:true,
          error:false,
          orders:[]
        }
    }

    case GET_ERROR : {
        return{
            ...state,
            loading:false,
            error:true,
            orders:[]
          }
    }

    case GET_ORDER : {
       // console.log(payload)
        return {
            ...state,
            loading:false,
            error:true,
            orders:payload
        }
    }

    default:{
        return state
    }
   }

}