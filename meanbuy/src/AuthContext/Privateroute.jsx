import {useContext} from "react"
import Authcontext from "./Authcontext"

import {Navigate} from 'react-router-dom'
const Privateroute = ({children}) => {

    const {isAuth} = useContext(Authcontext)

   if(isAuth === false){
     return <Navigate to='/login'/>
   }

    return children

}

export default Privateroute;