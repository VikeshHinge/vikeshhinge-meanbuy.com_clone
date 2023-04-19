
import {GET_ITEMS_SUCESS,GET_ITEMS_LOADING,GET_ITEMS_ERROR} from './pg.type.js';

import {GetByID} from '../Products.Redux/productAPI.js';


//GetProductbyId__________________________________
export const GetProductbyId =(id)=>async(dispatch) => {
    //    console.log(id)
      dispatch({type:GET_ITEMS_LOADING})
     try{
     let {data} = await GetByID(id)
    //  console.log(data)
       dispatch({type:GET_ITEMS_SUCESS,payload:data})
    }
    catch(err){
        dispatch({type:GET_ITEMS_ERROR,payload:err.message})
    }
}



