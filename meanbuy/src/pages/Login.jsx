import {
    FormControl,
    FormLabel,Button,
    FormErrorMessage,Input,
    FormHelperText,Box,Flex,Heading
  } from '@chakra-ui/react'

import {useContext} from "react"
import Authcontext from '../AuthContext/Authcontext';

const Login = () => {

let {isAuth,toggleAuth} = useContext(Authcontext)



    return(
        <Flex p='20px' pt='150px'>
           <Heading as='h4' size='md' color='#EA9F15'>Login or Create Account</Heading>
            
        </Flex>
    )
}

export default Login;