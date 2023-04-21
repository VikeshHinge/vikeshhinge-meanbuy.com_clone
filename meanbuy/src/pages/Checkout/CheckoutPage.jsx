
import React, { useEffect, useState } from 'react';
import {Box,Flex,Text,Image, Button,Square,Divider,Input,Checkbox} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { GetCartData } from '../../Redux/Cart.Redux/cart.action';
import { getProfile } from '../../Redux/Uer.Redux/User.action';
import Myprofile from '../UserInfo/Myprofile';
import CompDates from './CompDates';
import { PlaceUrOrder } from '../../Redux/Order.redux/order.action';


const CheckoutPage = () => {
 const [payment,setPayment] = useState(false)
 const Navigate = useNavigate()
 const dispatch = useDispatch()
 const {cart,loading,error,total} = useSelector((store)=>store.cartManager)

 const handelPayment = () =>{
  if(!payment){
    setPayment(true)
    alert('Payment Sucess !')
  }
 }

 const handelOrder = () => {
  if(payment){
   dispatch( PlaceUrOrder(cart))
   alert('Order Placed Sucess !!')
   return Navigate('/')
  }else{
   alert('payment not done yet!')
  }
}

useEffect(()=>{
  GetCartData(dispatch) 
},[])




if(loading){
  return(
     <Box m='auto'>
        <Image src='https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif' alt='loading ...'/>
     </Box>
  )
}


  return (
  <Box  m='auto' >

   <Flex m='auto' gap='10px'   w='95%'>

   <Box width='35%'  borderRight='1px solid gray' pt='180px'>
      {cart && cart.map((ele)=>(
        <Box color='black' key={ele._id} textAlign='left' m='10px' bg='orange.100' border='3px solid orange' p='5px'>
           <Flex gap='20px'>
            <Image w='120px' src={ele.img1} alt={ele.title}/>
            <Box>
              <Text as='b'>{ele.title}</Text><br />
              <Text as='b'>Price: {ele.price} </Text>
              <Text as='del' color='red'> {Math.floor(ele.price*ele.discount/100)+ele.price}</Text>
               <Text>Quantity:{ele.quantity}</Text>
               <Button bg='red' >Cancel</Button>
            </Box>
           </Flex>
           
        </Box>
      ))}
    </Box>


    <Box w='70%' pt='180px' pb='40px'>
      <Flex w='100%' gap='10px' mb='20px'>
    {/* ____________Price____________ */}
     <Box w={{base:'99%',md:'40%'}} >
     <Box border='1px solid #A0AEC0' h='fit-content'  fontWeight='bold'>
     <Text color='black' p='10px' bg='#f7f7f7'>Checkout Details</Text>
     <Divider mb='10px' bg='#A0AEC0'/>
     <Box >
      <Flex justifyContent='space-between' pr='10px' pl='10px' ><Text textAlign='left'>Total Items: </Text><Text>{cart.length}</Text></Flex>
      <Flex justifyContent='space-between' pr='10px' pl='10px'> <Text textAlign='left'>Sub Total:</Text> <Text>₹{total}</Text></Flex>
      <Flex justifyContent='space-between' pr='10px' pl='10px'> <Text textAlign='left'>Total Tax:</Text> <Text>₹{Math.floor(total*(cart.length*(1+0.18)))-total}</Text></Flex>
      <Flex justifyContent='space-between' pr='10px' pl='10px' color='green.500'><Text textAlign='left' >Shipping:</Text><Text>Free</Text></Flex>
      <Square size='1px' w='100%' bg='#A0AEC0' m='auto' mt='20px' mb='20px'></Square>
   
        <Flex color='orange' justifyContent='space-between' pr='10px' pl='10px'><Text textAlign='left' mb='10px'>Cart Total:</Text><Text>₹{Math.floor(total*(cart.length*(1+0.18)))}</Text></Flex>
       </Box>
       </Box>
      </Box>
    
      {/* _----------- Dates ----------------------- */}
      <CompDates handelOrder={handelOrder}/>
      </Flex>
       <Flex>
        {/* ------------Profile--------- */}
       <Box w='60%'> 
       <Myprofile/>
       </Box>
{/* ------------payment---------------- */}
        <Box mt='20px' w='40%' textAlign='left'>
          <Text as='b'>Payment</Text>
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Cash On Delivery
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox >Payment By COD</Checkbox>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Online Payment
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Image src='https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg' alt='online payment'/>
     <Input isRequired placeholder='Enter UPI' size='sm' />
     <Button bg='#8a3ab9' w='100%' onClick={handelPayment}>Pay</Button>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  
        </Box>
       
       </Flex>

      </Box>
   </Flex>
  
  
     
  </Box>
  )
}

export default CheckoutPage
