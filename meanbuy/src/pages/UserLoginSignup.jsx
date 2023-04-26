
import {Box,Image,Text,Divider,Flex,Square,Button,useToast} from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";
import React,{useState,useContext} from 'react';
import "./Signup.css";
import Authcontext from "../AuthContext/Authcontext";
import { Navigate } from "react-router-dom";
import axios from "axios";

let user = localStorage.getItem('User')

let initialValue = {
    name:'',
    email:'',
    password:""
}


const UserAuth = () => {

  let {isAuth} = useContext(Authcontext)
    const [input, setInput] = useState(initialValue)
    const [Userinput, setUInput] = useState({})
    const toast = useToast()
    const [usersignup,setUsersignup] = useState(false)
   
    
    const handelchange = (e) => {
        let {name,value} = e.target;
        setInput({...input,[name]:value})
    }

    const gotocart = () => {
      if(!isAuth && !user){
        return <Navigate to='/login'/>
      }
    }

    const handelsignup = async() => { 
       let {email,password,name,contact} = input;
        if( password ===''|| name===''|| email ==="" ){
            alert('put proper input')
           let input = document.querySelector('#email').focus()
        }
      else {
       const {data} = await axios.post('https://busy-worm-jewelry.cyclic.app//user/register',{email,password,name,contact})
       if(data.msg){
        toast({
          title:data.msg,
          description: "go for user login !!!",
          status: 'success',
          duration: 3000,
          position:'top',
          isClosable: true,
        })
        //setUsersignup(false)
       }
      }
      
         
    }


const SignupFirst = (a,b) => {

  alert("user not found !!")
  setUsersignup(false)
}


  return (
    <Box  className="signup" w='95%' m='auto' pb='50px'>

        <Flex className="flex_signup" flexDirection={{base:'column',md:'row'}} >
    
 {/*--------------------------- Login or Signup ---------------*/}
         {usersignup===true?<Signup  setUsersignup={setUsersignup} handelchange={handelchange} handelsignup={handelsignup}/>:<Login  input={input}  setUsersignup={setUsersignup}/>} 

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
