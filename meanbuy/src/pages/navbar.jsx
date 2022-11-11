import {Box,Flex,HStack,Text,Image,InputGroup,Input,InputRightElement,Button,Link,Spacer,VStack} from "@chakra-ui/react"
import { Search2Icon,TriangleDownIcon,TriangleUpIcon } from '@chakra-ui/icons'
import { IoIosCart } from "react-icons/io";
import { FaInstagramSquare,FaFacebook } from "react-icons/fa";
import { useState } from "react";

import CategoriesDrop from "../Dropdown/Categories_drop";
import Sidedrower from "../Dropdown/SideDrower";
const Navbar = () => {

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

    return(
        <VStack position='fixed' spacing='0' w='100%' bg='white' >
        <Box bg='black' color='white'w='100%' >
            <Flex alignItems='center' justifyContent='center'>
               New Year Beast Offer on Watches  
               <Flex>
                <FaInstagramSquare color="#8a3ab9"/>
                <FaFacebook color="#3b5998"/>
               </Flex>
            </Flex>
        </Box>
        <Box  w='100%' p={4} boxShadow="base" >
            
            <Flex justifyContent='space-around' p='5px' >

              <Flex spacing='24px' alignItems='center' gap="50px" >
               <Link href='/'><Image src='gibbresh.png' w={200}  fallbackSrc='https://d64lkarmo2mrq.cloudfront.net/baselogo.png' /></Link>
              
             <InputGroup size='sm' w="300px" h="10" >
             <Input placeholder='Search' size='sm' w='300px' />
             <InputRightElement width='4.5rem'>
               <Button  size='sm' bg="none">
                 {/* {show ? 'Hide' : 'Show'} */}
                 <Search2Icon/>
               </Button>
             </InputRightElement>
              </InputGroup>
              </Flex>
              <Spacer />
             <Flex  alignContent='flex-end' pr='10px'>
                <Box fontSize='12px'>
                <Link>Seller's Corner </Link>|
                <Link> Feedback </Link>|
                <Link> Blog </Link>|
                <Link> Delivery Info </Link>
                </Box>
          
                <Box fontSize='14px' >
                    <Link>Login</Link>/
                    <Link>Signup</Link>
                    <Flex ml='10px'>
                      <Text fontWeight='bold' mr='20px' >WELCOME GUEST</Text>
                      <IoIosCart color="F38F2F" size='30px'  onClick={()=>handeldropdown(2)}  />
                      <Text>3</Text>
                     </Flex>
                </Box>
             </Flex>
            {sidedrower === true ?  <Sidedrower/> : ""}
            </Flex>

          <HStack spacing='40px' fontSize='12px'>
          <Text ml="150px" mr="30px" 
          onClick={()=>handeldropdown(1)} >Categories {categories===false?<TriangleDownIcon/>:<TriangleUpIcon/> && <CategoriesDrop/>}</Text>
          <Text>flash Sale</Text>
          <Text>Best Deals</Text>
          <Text>Shop by Brand</Text>
          <Text>Trending</Text>
          <Text>New Arrivals</Text>
         </HStack>

       </Box>
        </VStack>
    )
}

export default Navbar;