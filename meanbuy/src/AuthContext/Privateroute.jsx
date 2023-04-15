import {useContext} from "react"
import Authcontext from "./Authcontext"
import {useNavigate} from 'react-router-dom'


let user = localStorage.getItem('User')

const Privateroute = ({children}) => {
    const Navigate = useNavigate()
   let token = localStorage.getItem('token')
    
   if(token ==='' || token===undefined || token === null){
    alert('user need to login')
    return Navigate('/login')

   }

  

    return children

}

export default Privateroute;

