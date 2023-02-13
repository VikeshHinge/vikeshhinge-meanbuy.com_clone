
import {Box,Image,Text,Divider,Flex,Square,Button} from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";
import React,{useState,useEffect,useContext} from 'react';
import "./Signup.css";
import Authcontext from "../AuthContext/Authcontext";
import { Navigate } from "react-router-dom";

let user = localStorage.getItem('User')

let initialValue = {
    email:'',
    pw:'',
    pw_conf:'' 
}


const UserAuth = () => {

  let {isAuth,loginAuth,logoutAuth} = useContext(Authcontext)
    const [input, setInput] = useState(initialValue)
    const [Userinput, setUInput] = useState({})
   
    const [usersignup,setUsersignup] = useState(false)
    const [count,setCount] = useState(0)
    
    const handelchange = (e) => {
        let {name,value} = e.target;
        setInput({...input,[name]:value})
    }

    const gotocart = () => {
      if(!isAuth && !user){
        return <Navigate to='/login'/>
      }
    }

    const handelsignup = () => { 
      let {email,pw,pw_conf} = input;
        if( pw ==='' || pw_conf===''|| email ==="" ){
            alert('put proper input')
        }
      else if(pw===pw_conf && pw !=='' && pw_conf!==''){
        setUsersignup(true)
        setUInput({...Userinput,input})
      }else {
        console.log('no')
      }
    }

const SignupFirst = (a,b) => {

  alert("user not found !!")
  setUsersignup(false)
}



useEffect(()=>{
  setCount(count+1)
  console.log(count)
},[])

  return (
    <Box  className="signup" w='95%' m='auto'>

        <Flex className="flex_signup" flexDirection={{base:'column',md:'row'}} >
    
            {/* Login or Signup */}
         {usersignup===true?<Login  input={input} SignupFirst={SignupFirst}/>:<Signup handelchange={handelchange} handelsignup={handelsignup}/>} 

         <Box w={{base:'95%',md:'30%'}} m='auto' >
            
         <Box border='1px solid #A0AEC0' h='fit-content'  fontWeight='bold'>
         <Text className="header2" >Cart Details</Text>
         <Divider bg='#A0AEC0'/>
         <Box className='cart_box' >
          <Text textAlign='left'>Total Items: {0}</Text>
          
          <Text textAlign='left'>Sub Total: ₹{0}</Text>
      
          <Square size='1px' w='100%' bg='#A0AEC0' m='auto' mt='20px' mb='20px'></Square>
       
            <Text textAlign='left'>Cart Total: {0}</Text>
            <Button onClick={gotocart} colorScheme='orange' w='90%' borderRadius='0px' variant='outline' mt='15px'>EDIT CART</Button>
           </Box>
           </Box>

            <Box mt='20px'>
                <Image src='https://www.meanbuy.com/assets/img/india/logo/logo_main.png' m='auto' mb='10px' w='25%'/>
                <Text fontSize='lg' as='b'>Our Shop. Your Price.</Text>
                <Text fontSize='sm' fontWeight='bold' >Feel the power to buy at your price.</Text>
                <Square size='3px' w='15%' bg='#ee9b3e' color='white' m='auto' mt='20px'></Square>
            </Box>
         </Box>

       </Flex>
  </Box>
  )
}

export default UserAuth
