import axios from "axios";

export const Getdata = async() => { 
 let data = await axios.get(` http://localhost:4040/product`)
 //console.log({'API':data})
 return data;
}

export const GetByID = async(query,params) => {
    let category = query.cate
    console.log(query,params)
    let {data} = await axios.get(`http://localhost:4040/product?categories=${category}`,params)
    return data;
}