import axios from "axios"
export const GetData = () => {
    return axios.get(`http://localhost:4000/product`)
}

export const GetproductbyID= (id) => {
   
    return axios.get(`http://localhost:4000/product`,{params:{id}}
    )
}