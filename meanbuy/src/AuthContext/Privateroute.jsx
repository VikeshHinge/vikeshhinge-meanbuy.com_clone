import {useContext} from "react"
import Authcontext from "./Authcontext"
import {Navigate} from 'react-router-dom'
import { useEffect } from "react"

let user = localStorage.getItem('User')

const Privateroute = ({children}) => {
   
    const {isAuth} = useContext(Authcontext)

    console.log("privateroute-isAuth",isAuth,'user:',user)
    
   if(!isAuth && !user){
     return <Navigate to='/login'/>
   }

    return children

}

export default Privateroute;

