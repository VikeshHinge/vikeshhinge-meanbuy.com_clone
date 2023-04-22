import axios from "axios";

export const Getdata = async(params) => { 
    console.log(params)
 let data = await axios.get(`http://localhost:4040/product`)
 //console.log({'API':data})
 return data;
}

export const GetByID = async(query) => {
     let {data} = await axios.get(`http://localhost:4040/product?_id=${query}`)
    return data;
}


export const GetBy_category = async(category,key)=> {
let newkey = key.substring(1,key.length)
   const {data} = await axios.get(`http://localhost:4040/product?categories=${category.cate}&${newkey}`)
   return data
}

//Search____________________________________-
export const GetSearchData = async (key) => {
    let {data} = await axios.get(`http://localhost:4040/product/search/${key}`)
     if(data.sug){
        return [];
     }
    return data;
}