
import {createContext, useState } from "react";

let Authcontext = createContext()

const AuthcontextProvider = ({children}) => {
 
const [isAuth,setAuth] = useState(false)
console.log("isAuth-Authantication",isAuth)

let loginAuth = () => {
   setAuth(true)
   localStorage.setItem('User','true')
}

let logoutAuth = () => {
    setAuth(false)
    console.log("user REmove")
    localStorage.removeItem('User')
    localStorage.removeItem('userInfo')
}
    return(
     <Authcontext.Provider value={{isAuth,loginAuth,logoutAuth}}>{children}</Authcontext.Provider>
    )
}

export default Authcontext;
export {AuthcontextProvider}

