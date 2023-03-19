import axios from "axios";

export const Getdata = async() => { 
 let data = await axios.get(` http://localhost:4040/product`)
 //console.log({'API':data})
 return data;
}