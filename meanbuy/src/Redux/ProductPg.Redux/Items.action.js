
import {GET_ITEMS_SUCESS,GET_ITEMS_LOADING,GET_ITEMS_ERROR} from './pg.type.js';

import {GetByID} from '../Products.Redux/productAPI.js';


export const GetProductbyId =({Params_cate,paramobj})=>async(dispatch) => {
    console.log(Params_cate,paramobj,666666)
    dispatch({type:GET_ITEMS_LOADING})
    try{
     let data = await GetByID(Params_cate,paramobj)

        let brands ={}
        let brandarr = []
        for(let i=0; i<data.length; i++){
            if(brands[data[i].brand]===undefined){
                brands[data[i].brand]=1
                brandarr.push(data[i].brand)
            }
        }
    
       dispatch({type:GET_ITEMS_SUCESS,payload:[data,brandarr]})
    }
    catch(err){
        dispatch({type:GET_ITEMS_ERROR,payload:err.message})
    }
}



