import axios from "axios"
export const GetData = () => { 
    return axios.get(`https://twisty-silly-ring.glitch.me/product`)
}

export const GetproductbyID= (id) => {
   
    return axios.get(`https://twisty-silly-ring.glitch.me/product`,{params:{id}}
    )
}