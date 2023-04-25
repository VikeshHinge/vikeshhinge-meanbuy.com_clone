import {GET_ORDER,GET_ERROR,GET_LOADING,DO_BUYNOW,DO_CHECKOUT,UPDATE_ORDER} from './order.type.js';

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
        console.log(payload)
        return {
            ...state,
            loading:false,
            error:true,
            orders:payload
        }
    }

    case UPDATE_ORDER : {
     
        console.log(payload)
        console.log(state)
        let Updates = state.orders.map((ele)=>{
            if(ele._id === payload.id){
               return{
                ...ele,
                status:payload.status
               }
            }
            return ele
        })
         console.log(Updates)
        return{
            ...state,
            loading:false,
            error:false,
            orders:Updates
        }
     
    }

    default:{
        return state
    }
   }

}