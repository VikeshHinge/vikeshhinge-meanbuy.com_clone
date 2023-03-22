import axios from "axios";

export const Getdata = async() => { 
 let data = await axios.get(` http://localhost:4040/product`)
 //console.log({'API':data})
 return data;
}

export const GetByID = async(query) => {
    let category = query.cate
    let {data} = await axios.get(`http://localhost:4040/product?categories=${category}`)
    //console.log(data)
    return data;
}