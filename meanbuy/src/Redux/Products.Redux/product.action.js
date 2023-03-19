import {Getdata} from './productAPI.js';

import {GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS} from './product.type.js'

export const GetProducts = async(dispatch) => {
    dispatch({type:GET_PRODUCTS_LOADING})
    try{
        let data = await Getdata()
    dispatch({type:GET_PRODUCTS_SUCESS,payload:data})
    }
    catch(err){
        dispatch({type:GET_PRODUCTS_ERROR,payload:err.message})
    }
}