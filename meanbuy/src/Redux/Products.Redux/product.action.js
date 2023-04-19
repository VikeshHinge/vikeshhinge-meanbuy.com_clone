import {Getdata,GetBy_category} from './productAPI.js';

import {GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS,GET_PRODUCTS_CATEGORY} from './product.type.js'

export const GetProducts = async(dispatch) => {
    dispatch({type:GET_PRODUCTS_LOADING})
    try{
        let {data} = await Getdata()
      
        dispatch({type:GET_PRODUCTS_SUCESS,payload:data})
    }
    catch(err){
        dispatch({type:GET_PRODUCTS_ERROR,payload:err.message})
    }
}


export const GetProductBycategory =(category,key) => async(dispatch)=> {
  try{
    let {data,Total} = await GetBy_category(category,key)
    
    dispatch({type:GET_PRODUCTS_CATEGORY,payload:{data,Total}})
  }
  catch(err){
    dispatch({type:GET_PRODUCTS_ERROR,payload:err.message})
  }
}