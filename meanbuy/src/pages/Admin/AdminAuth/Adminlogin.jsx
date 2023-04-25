import React, { useState } from 'react'
import { Box,Input,Button,Text,Center,Image,useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Adminlogin = () => {
const [userData,setUserData] = useState({email:'',password:''})
const Navigate = useNavigate()
const toast = useToast()

const HAndelchange = (e) => {
   let {name,value} = e.target;
   setUserData({...userData,[name]:value})
}

const GotoLogin = async(user) => {
    if(user.email==='' && user.password===''){
        toast({
            title:'Fill content Properly',
            position: 'top',
            isClosable: true,
          })
          return;
    }
    // const {data} = await axios.get(`https://renderfakeapi.onrender.com/users?email=${user.email}&&password=${user.password}`)
    if(user.email==='admin@gmail.com' && user.password==='admin@123'){
        toast({
            title:'Admin Login Sucess.',
            position: 'top',
            isClosable: true,
          })
          localStorage.setItem('admin',true)
          setUserData(userData)
          return Navigate('/admin')
          
    }else{
        toast({
            title:'wrong credentials.',
            description:'You are not authorised to go forward',
            position: 'top',
            isClosable: true,
          })
    }
}

const HandelLogin = () => {
    GotoLogin(userData)
}


  return (
      <Center h='100vh' background='url(https://images.pexels.com/photos/948407/pexels-photo-948407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' bgRepeat='no-repeat' bgSize='cover'>
         <Box  w='400px' textAlign='left'  boxShadow='lg' rounded='md'>
         <Image borderRadius='10px 10px 0 0' bg='orange.200' w='100%' src='https://d64lkarmo2mrq.cloudfront.net/baselogo.png' alt='meanbuy'/>
        <Box color='white' p='10px' backdropFilter='auto' backdropContrast='70%' pb='30px'>
        <Text m='auto' w='fit-content' fontSize='xl' as='b'>Admin Login</Text><br /><br />
        Email:<Input placeholder='Admin email' size='md' name='email' value={userData.email} onChange={(e)=>HAndelchange(e)} />
        Password:<Input placeholder='Admin password' size='md' name='password' value={userData.password} onChange={(e)=>HAndelchange(e)} />
        <br /><br />
        <Button colorScheme='orange' bg='orange.500' w='100%' onClick={HandelLogin}>Login</Button>
        </Box>
      </Box>
      </Center>
  )
}

export default Adminlogin
