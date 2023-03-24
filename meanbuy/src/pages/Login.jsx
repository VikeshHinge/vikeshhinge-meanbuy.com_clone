
import {Box,Text,Input,Button,useToast,Alert,AlertIcon} from "@chakra-ui/react";
import {useContext} from "react"
import Authcontext from '../AuthContext/Authcontext';
//import { useNavigate } from "react-router-dom";
import React,{useState} from 'react';
import "./Signup.css";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom';

const userEmail = {
    Email:'',
    Pw:''
}


const Login = ({input, setUsersignup}) => {

let {setUsername,loginAuth} = useContext(Authcontext)
const [userLogin,setUserLogin] = useState(userEmail)
const toast = useToast();
const navigate = useNavigate()

//let navigate = useNavigate()

const handelchange_Email = (e) => {
    let {name,value} = e.target; 
    setUserLogin({...userLogin,[name]:value})
  }
 


  const handelEmailSubmit= async() => {

    let {Email,Pw} = userLogin;

    if(Email ==="" || Pw ===""){
       alert('fill the data properly')
      }
    else{
      let {data} =await axios.get(`http://localhost:4040/users?email=${Email}`)
        if(data.length>0 && data[0].pw === Pw){
         
          toast({
            title: 'User Login Success',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom',
            })
            setUsername(Email)
            loginAuth(Email)
            return navigate("/")
        }else{
          toast({
            title: 'User not found, Signup first !',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'bottom',
            })
        }
    }
    
     
  }

    return( 
 
        <Box w={{base:'100%',md:'65%'}} p='10px'>
         
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
          <Text onClick={()=> setUsersignup(false)} fontSize='sm' fontWeight='bold'>New to MeanBuy? {' '} <Link color='#00B5D8' >Sign Up!</Link> </Text>
        
        </Box>
            
    )
}

export default Login;