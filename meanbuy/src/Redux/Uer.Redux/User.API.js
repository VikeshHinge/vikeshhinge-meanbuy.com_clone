import axios from "axios"

export const GetUserInfo = async () =>{
    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
     let {data} = await axios.get('https://busy-worm-jewelry.cyclic.app/user/profile',config)
     return data
}


export const ProfileUpdate = async (body) => {

    let config = {
        headers: {
            "authorization": localStorage.getItem('token') 
        }
      }
    let address=[body]
   let {data} = await axios.patch('https://busy-worm-jewelry.cyclic.app/user/updateuser',{address},config)
    return address
}