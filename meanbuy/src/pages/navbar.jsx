import {Box,Flex,HStack,Text,Image,InputGroup,Input,InputRightElement,Button,Link,Spacer} from "@chakra-ui/react"
import { Search2Icon,TriangleDownIcon,TriangleUpIcon } from '@chakra-ui/icons'
import { IoIosCart } from "react-icons/io";
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
        <>
        <Box bg='black' color='white'>New Year Beast Offer on Watches </Box>
        <Box  w='100%' p={4} border='2px solid black' >
            
            <Flex justifyContent='space-around' p='5px' >

              <Flex spacing='24px' alignItems='center' gap="50px" >
              <Image src='gibbresh.png' w={200}  fallbackSrc='https://d64lkarmo2mrq.cloudfront.net/baselogo.png' />
       
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
          
                <Box fontSize='14px' ml='50px' >
                    <Link>Login</Link>/
                    <Link>Signup</Link>
                    <Text fontWeight='bold' >WELCOME GUEST</Text>
                </Box>
                 <Flex ml='10px'>
                  <IoIosCart color="F38F2F" size='25px'  onClick={()=>handeldropdown(2)}  />
                  <Text>3</Text>
                 </Flex>
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
        </>
    )
}

export default Navbar;