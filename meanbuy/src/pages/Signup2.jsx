
import {Box,Image,Badge,Text,Divider,Flex,Spacer,Center,Square,Input,FormHelperText,FormErrorMessage,FormLabel,
    FormControl,Button,Link,VStack,StackDivider

} from "@chakra-ui/react";

import React,{useState} from 'react';
import "./Signup.css";


let initialValue = {
    email:'',
    pw:'',
    pw_conf:''
}

const Signup = ({handelchange,handelsignup}) => {

  return (
        
         <Box w={{base:'100%',md:'65%'}} p='10px' >
          <Text className="header">Login Or Create Account</Text>

          <Box className="formcontrol">
            <Text fontSize='12px'>Email Address</Text>
           <Input  mb='20px' borderRadius='0px'  placeholder="Email Address" name = 'email' 
           onChange={handelchange}/>
      
           <Text fontSize='12px'>Password</Text>
           <Input  mb='20px' borderRadius='0px'  placeholder="Password" name='pw'
           onChange={handelchange}/>

           <Text fontSize='12px'>Confirm Password</Text>
           <Input   mb='20px' borderRadius='0px'  placeholder="Confirm Password" name='pw_conf'
           onChange={handelchange} />
          </Box>
           
           <Button w='100%' colorScheme='orange' borderRadius='0px' variant='solid'  mb='50px' mt='10px'
           onClick={handelsignup}
           >Sign Up</Button>

           
          
              
          <Link fontSize='xs' as='u'>Already have a MeanBuy account? Log In!</Link>
          <Text fontSize='sm' fontWeight='bold'>By signing up, you agree to our {' '} <Link color='#00B5D8' >Terms of Use & Privacy Policy</Link> </Text>
        
        </Box>

  )
}

export default Signup
