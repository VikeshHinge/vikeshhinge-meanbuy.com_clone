
import React, { useEffect, useState ,useContext} from 'react';
import {Box,Flex,Text,Image,Table,Tr,Th, Button,Square,Divider,Tbody,Thead} from "@chakra-ui/react";
import {Link,useParams,useLocation,useNavigate} from 'react-router-dom';
import style from './UserPage.module.css'//its working ;
import Myprofile from './UserInfo/Myprofile';
import Myoredr from './UserInfo/Myoredr';
import Authcontext from "../AuthContext/Authcontext";

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

useEffect(()=>{
   //console.log(Param)
   //console.log(Location.pathname)
},[Param,Location.pathname])

  return (
    <Flex gap='20px' pt='200px' w={{base:'96%',md:'70%'}} m='auto' mb='50px' flexDirection={{base:'column',md:'row'}}>
    <Box w={{base:'90%',md:'30%'}} h='210px' textAlign='left' p='10px' boxShadow='base' border="1px solid gray" cursor={'pointer'}>
        <Text onClick={()=>setstatus(false)} as='b'>My Profile</Text>
        <Text>Update profile and details</Text><br />
       <Text onClick={()=>setstatus(true)} as='b'>My Orders</Text><br/>
        <Link to='/cart'><Text as='b'>My Cart</Text></Link><br /><br />
        <Button onClick={handelLogout} bg='#f38f2f' w='100%'>Log Out</Button>
    </Box>
    <Box w={{base:'100%',md:'85%'}}>
      {!status? <Myprofile/> : <Myoredr/>}
    </Box>
</Flex>

  )
}

export default UserPage
