
import {Box,Text,Input,Button} from "@chakra-ui/react";

import React from 'react';
import "./Signup.css";
import {Link} from 'react-router-dom';



const Signup = ({handelchange,handelsignup,setUsersignup}) => {

  return (
        
         <form w={{base:'100%',md:'65%'}} p='10px' >
          <Text className="header">Login Or Create Account</Text>

          <Box className="formcontrol">

          <Text fontSize='12px'>Name</Text>
           <Input isRequired  mb='20px' borderRadius='0px' type={"text"}   placeholder="Enter your name" name='name'
           onChange={handelchange}/>

           <Text fontSize='12px'>Contact Number</Text>
           <Input isRequired  mb='20px' borderRadius='0px' type={"text"}   placeholder="Enter contact" name='contact'
           onChange={handelchange}/>

            <Text fontSize='12px'>Email Address</Text>
           <Input isRequired  mb='20px' borderRadius='0px' id='email'  placeholder="Email Address" name = 'email' 
           onChange={handelchange}/>

           <Text fontSize='12px'> Password</Text>
           <Input isRequired  mb='20px' borderRadius='0px' type={"password"}   placeholder="Password" name='password'
           onChange={handelchange} />
          </Box>
           
           <Button w='100%' colorScheme='orange' borderRadius='0px' variant='solid'  mb='50px' mt='10px'
           onClick={handelsignup}
           >Sign Up</Button>

           
          
              
          <Link to='#' fontSize='xs' as='u' onClick={()=>setUsersignup(false)}>Already have a MeanBuy account? Log In!</Link>
          <Text fontSize='sm' fontWeight='bold'>By signing up, you agree to our {' '} <Link to='#' color='#00B5D8' >Terms of Use & Privacy Policy</Link> </Text>
        
        </form>

  )
}

export default Signup
