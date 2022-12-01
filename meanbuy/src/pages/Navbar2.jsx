
import {Box,Flex,HStack,Text,Image,InputGroup,Input,InputRightElement,Button,Link,Spacer,VStack,Divider} from "@chakra-ui/react"
import { Search2Icon,TriangleDownIcon,TriangleUpIcon } from '@chakra-ui/icons'
import { IoIosCart } from "react-icons/io";
import { FaInstagramSquare,FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

import CategoriesDrop from "../Dropdown/Categories_drop";
import Sidedrower from "../Dropdown/SideDrower";
import "./Navbar.css"
let Navbar2 = () => {


    let [categories,setcategories] = useState(false)
    let [sidedrower,setsidedrower] = useState(false)

    const handeldropdown = (x) => {
    if(x===1){
        setsidedrower(false)
        setcategories(!categories)
    }
     // console.log(categories)
     if(x===2){
        setcategories(false)  
        setsidedrower(!sidedrower) 
     }

    }
    let DataStore=JSON.parse(localStorage.getItem("CartData"));
   
    return(
       <Box m='0px' position='fixed' w='100%' bg='white' zIndex='9999'>
         <Box bg='black' color='white'w='100%' >
            <Flex alignItems='center' justifyContent='center'>
               New Year Beast Offer on Watches  
               <Flex>
                <FaInstagramSquare color="#8a3ab9"/>
                <FaFacebook color="#3b5998"/>
               </Flex> 
            </Flex>
        </Box>
          <Flex className="navTop" >
            <Box className="imgbox" >
                <Link href='/'><Image w='100%' src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png"></Image></Link>
            </Box>
            <Spacer  display={{base:"block",md:"block"}}/>
            <InputGroup size='sm' w="300px" h="10" ml='-20%' display={{base:"none",md:"block"}} >
             <Input placeholder='Search' size='sm' w='300px'/>
             <InputRightElement width='4.5rem'>
               <Button  size='sm' bg="none">
                 {/* {show ? 'Hide' : 'Show'} */}
                 <Search2Icon/>
               </Button>
             </InputRightElement>
              </InputGroup>
            <Spacer  display={{base:"block",md:"block"}}/>
            <Flex  alignContent='flex-end' pr='10px' >
                <Box fontSize='12px' display={{base:"none",md:"block"}}>
                <Link>Seller's Corner </Link>|
                <Link> Feedback </Link>|
                <Link> Blog </Link>|
                <Link> Delivery Info </Link>
                </Box>
                <Box fontSize={{base:"10px",md:"13px"}} p={{base:"5px",md:"0px"}}>
                    <Link>Login</Link>/
                    <Link>Signup</Link>
                    <Flex ml='10px'>
                      <Text fontWeight='bold' mr='10px' >WELCOME GUEST</Text>
                      <IoIosCart color="F38F2F" size='30px'  onClick={()=>handeldropdown(2)}  />
                      <Text bg='orange' fontWeight='bold' borderRadius='20px' p='2px' h='fit-content'>{DataStore && DataStore.length || 0}</Text>
                     </Flex>
                </Box>
               
             </Flex>
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
          <Text  onClick={()=>handeldropdown(1)} >Categories {categories===false?<TriangleDownIcon/>:<TriangleUpIcon/> && <CategoriesDrop/>}</Text>
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