import {useContext} from "react"
import Authcontext from "./Authcontext"

import {Navigate} from 'react-router-dom'

const Privateroute = ({children}) => {
   
    const {isAuth} = useContext(Authcontext)

    console.log("entry",isAuth)

   if(isAuth === false){
    console.log('navigate',"isAuth:",isAuth)
     return <Navigate to='/login'/>
   }

    return children

}

export default Privateroute;