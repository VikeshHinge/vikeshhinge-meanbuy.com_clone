import axios from "axios"

export const GetUserInfo = async () =>{
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
     let {data} = await axios.get('http://localhost:4040/user/profile',config)
     return data
}


export const ProfileUpdate = async (body) => {

    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
    let address=[body]
   let {data} = await axios.patch('http://localhost:4040/user/updateuser',{address},config)
    return address
}