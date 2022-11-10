import {useState,useRef} from "react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Heading,
    Button,Box,Input,FormLabel,InputGroup,InputLeftAddon,InputRightAddon,Stack,Select,Textarea, Flex,Link, VStack
  } from '@chakra-ui/react'
 import {AddIcon} from "@chakra-ui/icons"
 import './dropdown.css'
const Sidedrower = () => {
   
    let [cartQuantity,setcartQuantity] = useState(0)
  


    return(
        <>
        <Box className="sidedrower" p='10px' >
        <Flex justifyContent='space-around' mb='10px'>
            <Link>VIEW CART() </Link>
            <Link>Cart Total 00.0</Link>
        </Flex>
        {cartQuantity===0?
        <VStack>
            <Heading as='h4' size='md' mb='20px'>Your Cart is Empty!</Heading>
            <Heading as='h4' size='sm'>Come on, throw something in here...</Heading>
        </VStack>:<VStack><h3>show cart product !!!!</h3></VStack>
        }
        
        </Box>
        </>
    )
}

export default Sidedrower;