
import {Box,Flex,Text,Image,Table,Tr,Th, Button,Square,Divider,Tbody,Thead, border} from "@chakra-ui/react";

import { DeleteIcon,CheckIcon } from '@chakra-ui/icons'
import { useState,useEffect,useContext} from "react";
import {GetCartData,DeletefromCart} from '../Redux/Cart.Redux/cart.action.js';
import {useDispatch,useSelector} from 'react-redux';
import Authcontext from "../AuthContext/Authcontext";
import { upgradeQuantity } from "../Redux/Cart.Redux/cart.action.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {

const dispatch = useDispatch()
const {setcarttotal} = useContext(Authcontext)
const {cart,loading,error,total} = useSelector((store)=>store.cartManager)
const Navigate = useNavigate()

const handelcheckout = () => {
 if(cart.length>0){
  return Navigate('/checkout')
 }else{
  console.log('cart is empty')
 }
}



useEffect(()=>{
  GetCartData(dispatch) 
},[dispatch]);

if(loading){
  return(
     <Box m='auto'>
        <Image src='https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif' alt='loading ...'/>
     </Box>
  )
}

if(cart.length <= 0){
  return (
     <Box textAlign='left' p='20px' pt='180px' pb='100px'>
      <Text as='a' fontSize='20px' color='orange'>Is Empty! Come on, throw something in here ...</Text>
      <Image m='auto' src='https://images.squarespace-cdn.com/content/v1/5a9d990755b02c16eef28423/1522958745117-C9FZPNWFRB9HHO3IK1TD/animat-shopping-cart-color.gif' alt='Empty !'/>
     </Box>
  )
}

  return(
    <Flex pt='200px' w={{base:'99%',md:'90%'}} m='auto' mb='100px' gap='20px' flexDirection={{base:'column',md:'row'}} >

 <Box border='1px solid gray'  w={{base:'99%',md:'100%'}} h='fit-content'>
    <Table>
   
  <Thead >
  <Tr bg='#f7f7f7' >
       <Th ><Text  pt='8px' pb='8px'   textAlign='left'> </Text></Th>
       <Th><Text  pt='8px' pb='8px'  textAlign='left'>Product Details</Text></Th>
       <Th display={{base:'none',md:'block'}}><Text  pt='8px' pb='8px'  textAlign='left'>Our Price</Text></Th>
       <Th className="th"><Text  pt='8px' pb='8px'  textAlign='left'>Your Pric</Text></Th>
   </Tr>
  </Thead>
   <Tbody>
   {cart && cart.map((ele)=>{
       return(
       <Tr key={ele._id} >
           <Th w='120px'  p='10px' textAlign='center'>
               <Image w='100%'src={ele.img1}/>
             <Text display={{base:'block',md:'none'}} color='green.500'>Price: ₹{ele.price}.00</Text>
           </Th>
           <Th lineHeight={{base:'15px',md:'22px'}} >
           <Text fontSize={{base:'12px',md:'15px'}} color='orange'>{ele.title}</Text>
           <Text>BRAND: {ele.brand}</Text>
           <Text color='green.300'><CheckIcon />{' '}FREE DELIVERY</Text>
           <Flex gap='20px' alignItems='center' mt='5px'>
  
       {/* ------------Cart dispatch-delete & update------------- */}

           <DeleteIcon fontSize='18px' color='gray' onClick={()=>dispatch(DeletefromCart(ele._id))} />
              <Flex gap='3px' cursor={'pointer'}>
               <button style={{backgroundColor:'orange',width:'30px',fontWeight:'bold',border:'1px solid orange'}} disabled={ele.quantity===ele.product_quantity} onClick={()=>dispatch(upgradeQuantity(ele._id,1,ele.quantity))} border='1px solid' pl='3px' pr='3px'>inc</button>
               <button style={{width:'28px',fontWeight:'bold',border:'1px solid orange'}} border='1px solid' pl='3px' pr='3px'>{ele.quantity}</button>
               <button style={{backgroundColor:'orange',width:'30px',fontWeight:'bold',border:'1px solid orange'}} disabled={ele.quantity===1} onClick={()=>dispatch(upgradeQuantity(ele._id,-1,ele.quantity))}  border='1px solid' pl='3px' pr='3px'>dec</button>
              </Flex>
           </Flex>
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

   <Box w={{base:'99%',md:'30%'}} color='black' bg='white' h='fit-content' position='sticky' top='180px'>
     
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

