import {Getdata,GetBy_category,updateProduct} from './productAPI.js';

import {GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS,GET_PRODUCTS_CATEGORY,GET_UPDATE_PRODUCT} from './product.type.js'

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


export const GetProductBycategory =(category,key,start,end) => async(dispatch)=> {
  dispatch({type:GET_PRODUCTS_LOADING})
  try{
    let {data,Total} = await GetBy_category(category,key)
    data = data.slice(start,end)
    //console.log(data,start,end,Total)
    dispatch({type:GET_PRODUCTS_CATEGORY,payload:{data,Total}})
  }
  catch(err){
    dispatch({type:GET_PRODUCTS_ERROR,payload:err.message})
  }
}

export const UpdateProduct = (body) => async(dispatch)=>{
 
  //console.log(body)
  try{
   let data =  await updateProduct(body)
   if(data.msg){
    dispatch({type:GET_UPDATE_PRODUCT,payload:body})
   }
  }
  catch(err){
    dispatch({type:GET_PRODUCTS_ERROR,payload:err.message})
  }
}