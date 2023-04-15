
import {Box,Text,Input,Button,useToast,Alert,AlertIcon} from "@chakra-ui/react";
import {useContext} from "react"
import Authcontext from '../AuthContext/Authcontext';
//import { useNavigate } from "react-router-dom";
import React,{useState} from 'react';
import "./Signup.css";
import axios from "axios";
import {Link,json,useNavigate} from 'react-router-dom';

const userEmail = {
    email:'',
    password:''
}


const Login = ({input, setUsersignup}) => {

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
       const {data} = await axios.post('http://localhost:4040/user/login',userLogin)
       console.log(data)
       if(data.msg){
        alert(data.msg)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user',data.name)
        return Navigate('/')
       }
       else if(data.sug){
        alert(data.sug)
        return Navigate('/login')
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
           <Input  mb='20px' borderRadius='0px' type={"password"}  placeholder="Password" name='password' onChange={handelchange_Email}/>

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