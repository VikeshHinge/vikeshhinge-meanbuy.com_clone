
import { useContext,createContext, useState } from "react";

let Authcontext = createContext()

const AuthcontextProvider = ({children}) => {
 
const [isAuth,setAuth] = useState(false)
console.log(isAuth,1)

let loginAuth = () => {
   setAuth(true)
   localStorage.setItem('User','true')
}

let logoutAuth = () => {
    setAuth(false)
}
    return(
     <Authcontext.Provider value={{isAuth,loginAuth,logoutAuth}}>{children}</Authcontext.Provider>
    )
}

export default Authcontext;
export {AuthcontextProvider}

