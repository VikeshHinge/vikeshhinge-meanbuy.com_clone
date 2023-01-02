import axios from "axios"
export const GetData = () => { 
    return axios.get(`https://twisty-silly-ring.glitch.me/product`)
}

export const GetproductbyID= (id) => {
   
    return axios.get(`https://twisty-silly-ring.glitch.me/product`,{params:{id}}
    )
}

export const GetproductbyCategory = async(categories) => {
   
    let {data} =await axios.get(`https://twisty-silly-ring.glitch.me/product`)
    let Data = data.filter((ele)=>ele.categories === categories)
    return Data
}