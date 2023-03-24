import React,{useContext, useEffect} from "react";
import {Box,Flex,HStack,Text,Image,InputGroup,Input,InputRightElement,Button,Spacer,Divider} from "@chakra-ui/react"
import { Search2Icon,TriangleDownIcon,TriangleUpIcon } from '@chakra-ui/icons'
import Authcontext from "../AuthContext/Authcontext";
import { IoIosCart } from "react-icons/io";
import { FaInstagramSquare,FaFacebook } from "react-icons/fa";
import { useState } from "react";
import CategoriesDrop from "../Dropdown/Categories_drop";
import Sidedrower from "../Dropdown/SideDrower";
import './navbar.css';
import {Link,useNavigate} from 'react-router-dom';



let Navbar2 = () => {

  let {logoutAuth,carttotal} = useContext(Authcontext)
    let [categories,setcategories] = useState(false)
    let [sidedrower,setsidedrower] = useState(false)
    let [users,setUsers]=useState('')
    let Navigate = useNavigate()

    const handeldropdown = () => {
        setcategories(!categories)
    }
    
    const GotoCart = ()=>{
     return Navigate('/cart')
    }

    const logoutUser = () => {
      setUsers('')
      logoutAuth()
    }
console.log(carttotal,898989898)

    let DataStore=JSON.parse(localStorage.getItem("CartData"))||[];
    let email= localStorage.getItem('userInfo')||'';
    let cartTotal = localStorage.getItem('cartTotal')
    useEffect(()=>{
       setUsers(email)
    },[email])
 
    return(
       <Box m='0px' position='fixed' w='100%' bg='white' zIndex='9999'>
         <Box bg='black' color='white'w='100%'>
            <Flex alignItems='center' justifyContent='center' gap='10px'>
               New Year Beast Offer on Watches  
               <Flex gap='5px'>
                <FaInstagramSquare color="#8a3ab9"/>
                <FaFacebook color="#3b5998"/>
               </Flex> 
            </Flex>
        </Box>
          <Flex className="navTop" >
            <Box className="imgbox" >
                <Link to='/'><Image w='100%' src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png"></Image></Link>
            </Box>
            <Spacer  display={{base:"block",md:"block"}}/>
            <InputGroup size='sm' w="350px" h="10"  display={{base:"none",md:"block"}} >
             <Input placeholder='Search' size='sm' w='350px'/>
             <InputRightElement width='4.5rem'>
               <Button  size='sm' bg="none">
                 <Search2Icon/>
               </Button>
             </InputRightElement>
              </InputGroup>
            <Spacer  display={{base:"block",md:"block"}}/>
            <Flex alignItems='center'gap='20px' mr='10px'>
                <Box fontSize='12px' display={{base:"none",md:"block"}}>
                <Link>Seller's Corner </Link>|
                <Link> Feedback </Link>|
                <Link> Blog </Link>|
                <Link> Delivery Info </Link>
                </Box>
                <Box fontSize={{base:"10px",md:"13px"}} p={{base:"5px",md:"0px"}}>
{/*---------------------- user login/logout ------------------------ */}
                    {users?<Flex gap='3px'justifyContent='end' p='5px' alignItems='center' fontWeight='bold'><Text fontSize='18px' color='orange' >{users}</Text><Box bg='orange' borderRadius='5px'  p='5px' cursor={"pointer"} onClick={logoutUser}>Logout</Box></Flex>:<><Link to='/login'>Login</Link>/ <Link to='/signup'>Signup</Link></>}

                    <Flex ml='10px'>
                      <Text fontWeight='bold' mr='10px' >WELCOME</Text>
                      <IoIosCart color="F38F2F" size='30px'  onClick={GotoCart}  />
                      <Text bg='orange' fontWeight='bold' borderRadius='20px' p='2px' h='fit-content'>{cartTotal}</Text>
                     </Flex>
                </Box>
               
             </Flex>
 {/* ------------------cartside drower --------------*/}
             {sidedrower === true ?  <Sidedrower/> : ""}
          </Flex>

          <Box bg='orange' p='10px' display={{base:'block',md:"none"}}>
          <InputGroup size='sm' w="90%"  m='auto' >
             <Input placeholder='Search' size='sm' w='300px' m='auto' bg='white' borderRadius='20px'/>
             <InputRightElement width='4.5rem'>
               <Button  bg="none" >
                 <Search2Icon />
               </Button>
             </InputRightElement>
          </InputGroup>
          </Box>
         
          <HStack className="navop" >
          <Link  onClick={handeldropdown} >Categories {categories===false?<TriangleDownIcon/>:<><TriangleUpIcon/> <CategoriesDrop/></>}</Link>
          <Text>flash Sale</Text>
          <Text display={{base:'none',md:'block'}} >Best Deals</Text>
          <Text display={{base:'none',md:'block'}} >Shop by Brand</Text>
          <Text display={{base:'none',md:'block'}} >Trending</Text>
          <Text>New Arrivals</Text>
         </HStack>
         <Divider/>
       </Box>
    )
}

export default Navbar2;