
import {Box,Text,Input,Button,useToast,Alert,AlertIcon} from "@chakra-ui/react";
import {useContext} from "react"
import Authcontext from '../AuthContext/Authcontext';
//import { useNavigate } from "react-router-dom";
import React,{useState} from 'react';
import "./Signup.css";
import {Link} from 'react-router-dom';

const userEmail = {
    Email:'',
    Pw:''
}


const Login = ({input,SignupFirst}) => {

let {isAuth,loginAuth,logoutAuth} = useContext(Authcontext)
const [userLogin,setUserLogin] = useState(userEmail)
const [success,setSuccess] = useState(false)
const toast = useToast()

//let navigate = useNavigate()

const handelchange_Email = (e) => {
    let {name,value} = e.target; 
    setUserLogin({...userLogin,[name]:value})
  }
 


  const handelEmailSubmit= () => {

    let {Email,Pw} = userLogin;

    if(Email ==="" || Pw ===""){
       alert('input !!')
      }
      else if(Email===input.email && Pw=== input.pw && Email !=="" && Pw !==""){
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'warning',
            duration: 3000,
            isClosable: true,
            position: 'bottom',
            })
       
          localStorage.setItem('userInfo',JSON.stringify(input))
            loginAuth()
            setSuccess(true)
          }
    
      else {
        toast({
            title: 'User Not Found.',
            description: "Wrong Email or Password.",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: {base:'',md:'bottom'},
            })
      }
  }

    return( 
 
        <Box w={{base:'100%',md:'65%'}} p='10px'>

           <Box display={success?'block':'none'} >
           <Alert status='success' variant='left-accent' >
             <AlertIcon />
              Login Sucess !!
             </Alert>
           </Box>
         
          <Text className="header">Login Or Create Account</Text>

          <Box className="formcontrol">
            <Text fontSize='12px'>Email Address</Text>
           <Input  mb='20px' borderRadius='0px'  placeholder="Email Address" name = 'Email' onChange={handelchange_Email} />
      
           <Text fontSize='12px'>Password</Text>
           <Input  mb='20px' borderRadius='0px' type={"password"}  placeholder="Password" name='Pw' onChange={handelchange_Email}/>

          </Box>
           
           <Button w='100%' colorScheme='orange' borderRadius='0px' variant='solid'  mb='50px' mt='10px'
           onClick={handelEmailSubmit}
           >Login</Button>

           
          
          <Link fontSize='xs' as='u'>Forger Password?</Link>
          <Text fontSize='sm' fontWeight='bold'>New to MeanBuy? {' '} <Link color='#00B5D8' >Sign Up!</Link> </Text>
        
        </Box>
            
    )
}

export default Login;