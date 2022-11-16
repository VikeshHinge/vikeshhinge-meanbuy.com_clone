
import { useContext,createContext, useState } from "react";

let Authcontext = createContext()

const AuthcontextProvider = ({children}) => {

const [isAuth,setAuth] = useState(false)

let toggleAuth = () => {
   setAuth(true)
   alert(isAuth)
}

    return(
     <Authcontext.Provider value={{isAuth,toggleAuth}}>{children}</Authcontext.Provider>
    )
}

export default Authcontext;
export {AuthcontextProvider}

