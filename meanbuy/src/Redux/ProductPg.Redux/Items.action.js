
import {GET_ITEMS_SUCESS,GET_ITEMS_LOADING,GET_ITEMS_ERROR} from './pg.type.js';

import {GetByID} from '../Products.Redux/productAPI.js';


export const GetProductbyId = async(dispatch,cat) => {
   
    dispatch({type:GET_ITEMS_LOADING})
    try{
     let data = await GetByID(cat)
       dispatch({type:GET_ITEMS_SUCESS,payload:data})
    }
    catch(err){
        dispatch({type:GET_ITEMS_ERROR,payload:err.message})
    }
}



