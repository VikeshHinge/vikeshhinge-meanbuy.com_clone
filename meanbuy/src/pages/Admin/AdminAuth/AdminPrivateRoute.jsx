import {useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const AdminPrivateroute = ({children}) => {
    //const Navigate = useNavigate()
   let token = localStorage.getItem('admin')
    
   if(!token){
    alert('Admin needs to login.')
    return <Navigate to='/adminlogin'/>
   }

    return children
}

export default AdminPrivateroute;

