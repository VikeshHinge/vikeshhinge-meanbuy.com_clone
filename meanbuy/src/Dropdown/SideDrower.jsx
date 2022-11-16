import {useState,useRef,useEffect} from "react"
import "./dropdown.css"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,Image,
    DrawerCloseButton,Heading,Text,
    Button,Box,Input,FormLabel,InputGroup,InputLeftAddon,InputRightAddon,Stack,Select,Textarea, Flex,Link, VStack, Divider
  } from '@chakra-ui/react'
 import {AddIcon} from "@chakra-ui/icons"
 import './dropdown.css'
import { Navigate } from "react-router-dom"

const Sidedrower = () => {
     let DataStore=JSON.parse(localStorage.getItem("CartData"))||[];
    let [cartQuantity,setcartQuantity] = useState([])
    let [total,settotal] =useState(0)

    useEffect(()=>{
     let Tprice =DataStore && DataStore.map((item)=>settotal((prev)=>prev+item.price))
     setcartQuantity(DataStore)
    },[])
   //console.log("total : " ,total)

  const GotoCart = () => {
    return( <Navigate to='/cart' />)
  }


    return(
        <Box className="sidedrower">
            <Flex justifyContent='space-around' gap='0%'>
            <Box border='1px solid' w='50%' p='5px' bg='black' color='white'><Link href="/cart">EDIT CART</Link></Box>
            <Box border='1px solid' w='50%' p='5px'>CHECKOUT</Box>
           </Flex>
        <Flex className="cartinfo">
            <Link fontSize='sm'>VIEW CART({cartQuantity.length})</Link>
            <Link fontSize='sm'>Cart Total: ₹{total>0?total:"0.00"}</Link>
        </Flex>
         {cartQuantity.length===0?
        <VStack>
            <Heading as='h4' size='md' mb='20px'>Your Cart is Empty!</Heading> 
            <Heading as='h4' size='sm'>Come on, throw something in here...</Heading>
            </VStack>:<VStack>
                {cartQuantity.length>0 && cartQuantity.map((element,i)=>{
                    return(
                        <Box overscrollY='auto'>
                            <Flex textAlign='left' p='10px'>
                                <Stack w='40%'>
                                <Image src={element.img1} w='80%' m='auto' alt={element.title} />
                                </Stack>
                                <Stack className="textbox">
                                <Text fontSize='sm' fontWeight="bold">{element.title}</Text>  
                                <Text fontSize='sm'>Color:{element.color}</Text>
                                <Text fontSize='sm' as='s' textAlign='left'>Price:₹{Math.floor(element.price*element.discount/100)+element.price}</Text>  
                                <Text fontSize='sm'fontWeight="bold">Your Price:₹{element.price}</Text> 
                                </Stack>
                            </Flex>
                            <Divider m='10px' borderColor = 'Gray' w='90%' /> 
                        </Box>
                    )
                })}
        </VStack>
        } 
        
        </Box>
    )
}

export default Sidedrower;