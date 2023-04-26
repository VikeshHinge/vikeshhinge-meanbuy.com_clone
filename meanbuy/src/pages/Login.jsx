
import {Box,Text,Input,Button,useToast,Alert,AlertIcon,InputGroup,InputLeftAddon,InputRightElement} from "@chakra-ui/react";
import {useContext} from "react";
import Authcontext from '../AuthContext/Authcontext';
import {ViewIcon} from '@chakra-ui/icons';
import React,{useState} from 'react';
import "./Signup.css";
import axios from "axios";
import {Link,json,useNavigate} from 'react-router-dom';

const userEmail = {
    email:'',
    password:''
}


const Login = ({input, setUsersignup}) => {
const [view,setView] =useState(false)
let {setUsername,loginAuth} = useContext(Authcontext)
const [userLogin,setUserLogin] = useState(userEmail)
const toast = useToast();
const Navigate = useNavigate()



const handelchange_Email = (e) => {
    let {name,value} = e.target; 
    setUserLogin({...userLogin,[name]:value})
  }
 


  const handelEmailSubmit= async() => {

    let {email,password} = userLogin;

    if(email ==="" || password ===""){
       alert('fill the data properly')
       return;
      }
    else{
       const {data} = await axios.post('https://busy-worm-jewelry.cyclic.app/user/login',userLogin)
       if(data.msg){
    
        toast({
          title: data.msg,
          status: 'success',
          position:'top',
          isClosable: true,
        })
        localStorage.setItem('token', data.token)
        localStorage.setItem('user',data.name)
        return Navigate('/')
       }
       else if(data.sug){
        toast({
          title: data.sug,
          status:'warning',
          position:'top',
          isClosable: true,
        })
        // return Navigate('/login')
       }
       else{
        alert(data.err)
       }
    }
    
     
  }

    return( 
 
        <Box w={{base:'100%',md:'45%'}} p='10px'>
         
          <Text className="header">Login Or Create Account</Text>

          <Box className="formcontrol">
            <Text fontSize='12px'>Email Address</Text>
           <Input  mb='20px' borderRadius='0px'  placeholder="Email Address" name = 'email' onChange={handelchange_Email} />
      
           <Text fontSize='12px'>Password</Text>
           <InputGroup size='sm'>
           <Input size='md' mb='20px' borderRadius='0px' type={view===false?"password":'text'}  placeholder="Password" name='password' onChange={handelchange_Email}/>
           <InputRightElement h='40px'  m='auto' onClick={()=>setView(!view)} children={<ViewIcon fontSize='20px'/> }/>
           </InputGroup>       
           
          </Box>
           
           <Button w='100%' colorScheme='orange' borderRadius='0px' variant='solid'  mb='50px' mt='10px'
           onClick={handelEmailSubmit}
           >Login</Button>

           
          
          <Link fontSize='xs' as='u'>Forger Password?</Link>
          <Text onClick={()=> setUsersignup(true)} fontSize='sm' fontWeight='bold'>New to MeanBuy? {' '} <Link color='#00B5D8' >Sign Up!</Link> </Text>
        
        </Box>
            
    )
}

export default Login;