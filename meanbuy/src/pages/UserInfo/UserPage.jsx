
import React, { useEffect, useState ,useContext} from 'react';
import {Box,Flex,Text,Image, Button} from "@chakra-ui/react";
import {Link,useParams,useLocation,useNavigate} from 'react-router-dom';
import Myprofile from './Myprofile';
import Myoredr from './Myoredr';
import Authcontext from "../../AuthContext/Authcontext";

const UserPage = () => {
const [status,setstatus] = useState(false)
let {logoutAuth,carttotal} = useContext(Authcontext)
let Param = useParams()
let Location = useLocation()
let Navigate = useNavigate()

const handelLogout = () => {
  logoutAuth()
  return Navigate('/login')
}



  return (
    <Flex gap='20px' pt='200px' w={{base:'96%',md:'80%'}} m='auto' mb='50px' flexDirection={{base:'column',md:'row'}}>
    <Box position='sticky' top='180px' w={{base:'90%',md:'40%'}} h='210px' textAlign='left' p='10px' boxShadow='base' border="1px solid gray" cursor={'pointer'} >
        <Text onClick={()=>setstatus(false)} as='b'>My Profile</Text>
        <Text display='block' fontSize={'sm'}>Update profile and details</Text>
        <Text display='block' mt='15px' mb='15px' onClick={()=>setstatus(true)} as='b'>My Orders</Text>
        <Link to='/cart'><Text as='b'>My Cart</Text></Link>
        <Button mt='20px' onClick={handelLogout} bg='#f38f2f' w='100%'>Log Out</Button>
    </Box>
    <Box w={{base:'100%',md:'85%'}}>
      {!status? <Myprofile/> : <Myoredr/>}
    </Box>
</Flex>

  )
}

export default UserPage
