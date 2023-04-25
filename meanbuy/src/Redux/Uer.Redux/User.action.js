import {GET_ERROR,GET_LOADING,GET_USER,GET_Update} from './User.acttype.js';
import { ProfileUpdate ,GetUserInfo} from './User.API.js';

export const getProfile = async(dispatch) => {
    dispatch({type:GET_LOADING})
    try{
        let data = await GetUserInfo()
        dispatch({type:GET_USER,payload:data})
    }catch(err){
        dispatch({type:GET_ERROR,payload:err})
    }
}

export const updateProfile = (body)=> async(dispatch)=> {
    try{
       let data = await ProfileUpdate(body)
       console.log(data)
       dispatch({type:GET_Update,payload:data})
    }catch(err){
        dispatch({type:GET_ERROR,payload:err})
    }
}