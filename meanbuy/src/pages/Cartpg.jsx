
import {Box,Flex,Text,Image,Table,Tr,Th, Button,Square,Divider,Tbody,Thead} from "@chakra-ui/react";

import { DeleteIcon,CheckIcon } from '@chakra-ui/icons'
import { useState,useEffect } from "react";
import {GetCartData} from '../Redux/Cart.Redux/cart.action.js';
import{useDispatch,useSelector} from 'react-redux'

let DataStore=JSON.parse(localStorage.getItem("CartData"))|| [];



const Cart = () => {

const [cartData,setCartdata] = useState([])
const dispatch = useDispatch()

const {cart,loading,error,total} = useSelector((store)=>store.cartManager)
console.log({'Cart':cart})

const handeldelete = (id) => {
      let newdata = cartData.filter((ele)=> ele.id !== id)
      localStorage.setItem("CartData",JSON.stringify(newdata));     
}

const handelcheckout = () => {
  alert('Product is ready for Checkout !!!')
}



useEffect(()=>{
  GetCartData(dispatch) 
},[dispatch]);



if(cart.length <= 0){
  return (
     <Box textAlign='left' p='20px' pt='200px' pb='200px'>
      <Text fontSize='20px'>Is Empty! Come on, throw something in here...</Text>
     </Box>
  )
}

  return(
    <Flex pt='200px' w={{base:'99%',md:'90%'}} m='auto' mb='20px' gap='20px' flexDirection={{base:'column',md:'row'}} >

 <Box border='1px solid gray' m='auto'  w={{base:'99%',md:'100%'}}>
    <Table >
   
  <Thead>
  <Tr bg='#f7f7f7'>
       <Th ><Text  pt='8px' pb='8px'   textAlign='left'> </Text></Th>
       <Th><Text  pt='8px' pb='8px'  textAlign='left'>Product Details</Text></Th>
       <Th display={{base:'none',md:'block'}}><Text  pt='8px' pb='8px'  textAlign='left'>Our Price</Text></Th>
       <Th className="th"><Text  pt='8px' pb='8px'  textAlign='left'>Your Pric</Text></Th>
   </Tr>
  </Thead>
   <Tbody>
   { cart.map((ele)=>{
       return(
       <Tr key={ele.id}>
           <Th w='120px'  p='10px' textAlign='center'>
               <Image w='100%'src={ele.img1}/>
             <Text display={{base:'block',md:'none'}} color='green.500'>Price: ₹{ele.price}.00</Text>
           </Th>
           <Th lineHeight={{base:'15px',md:'22px'}}>
           <Text fontSize={{base:'12px',md:'15px'}} color='black'>{ele.title}</Text>
           <Text>COLOR: {ele.color}</Text>
           <Text color='green.300'><CheckIcon/>{' '}FREE DELIVERY</Text>
            <DeleteIcon onClick={()=>handeldelete(ele.id)} />
           </Th>
           <Th className="th"  fontSize='15px'>
           <Text  as='s' color='gray'>₹{Math.floor(ele.price*ele.discount/100)+ele.price}.00</Text>
           </Th>
           <Th color='green.500' fontSize='15px' className="th" >
           ₹ {ele.price}.00
           </Th>
       </Tr>
       )
   })}
   </Tbody>
</Table>
 </Box>   

   <Box w={{base:'99%',md:'30%'}} >
     
     <Box border='1px solid #A0AEC0' h='fit-content'  fontWeight='bold'>
     <Text className="header2" bg='#f7f7f7'>Checkout Details</Text>
     <Divider bg='#A0AEC0'/>
     <Box className='cart_box' >
      <Text textAlign='left'>Total Items: {cart.length}</Text>
      
      <Text textAlign='left'>Sub Total: ₹{total}</Text>
      <Text textAlign='left' color='green.500'>Shipping:Free</Text>
      <Square size='1px' w='100%' bg='#A0AEC0' m='auto' mt='20px' mb='20px'></Square>
   
        <Text textAlign='left' mb='10px'>Cart Total: ₹{total}</Text>
       <Button bg='orange.300' size='sm'borderRadius='0px' w='100%' onClick={handelcheckout}>Checkout Now</Button>
       </Box>
       </Box>
      </Box>

 </Flex>

)

  
}

export default Cart

