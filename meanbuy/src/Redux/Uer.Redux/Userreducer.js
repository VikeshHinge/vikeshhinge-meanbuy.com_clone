
import {GET_ERROR,GET_LOADING,GET_USER,GET_Update} from './User.acttype.js';

let initialvalue = {
    loading:false,
    error:false,
    user:[]
}

export const UserReducer = (state=initialvalue,{type,payload}) => {
      
    switch(type){

       case GET_LOADING:{
        return{
            ...state,
            loading:true,
            error:false,
            user:[]
        }
       }

       case GET_ERROR:{
        return{
            ...state,
            loading:false,
            error:true,
            user:[]
        }
       }

       case GET_USER :{

        return{
            ...state,
            loading:false,
            error:false,
            user:payload
        }
       }

       case GET_Update:{
        console.log(payload)
        return{
            ...state,
            loading:false,
            error:false,
            user:[...state.user,state.user.address=payload]
        }
       }

        default:{
            return state;
        }
    }
}