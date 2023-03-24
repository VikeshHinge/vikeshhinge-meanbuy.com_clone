
import {createContext, useState } from "react";

let Authcontext = createContext()

const AuthcontextProvider = ({children}) => {
 const [username,setUsername] = useState('')
const [isAuth,setAuth] = useState(false)
const [carttotal,setCarttotal] =useState([])
console.log(carttotal)
// console.log("isAuth-Authantication",isAuth)
// console.log({'username':username})

let loginAuth = (Email) => {
   setAuth(true)
   localStorage.setItem('userInfo',Email)
   localStorage.setItem('User',true)
}

let logoutAuth = () => {
    setAuth(false)
    console.log("user REmove")
    localStorage.removeItem('User')
    localStorage.removeItem('userInfo')
    setUsername('')
}
    return(
     <Authcontext.Provider value={{isAuth,loginAuth,logoutAuth,setUsername,username,setCarttotal,carttotal}}>{children}</Authcontext.Provider>
    )
}

export default Authcontext;
export {AuthcontextProvider}

