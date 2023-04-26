import React, { useEffect, useState } from 'react';
import {Box,Flex,Text,Image,Table,Tr,Th, Button,Square,Divider,Tbody,Thead,} from "@chakra-ui/react";
import Payment from './Payment';

const CompDates = ({handelOrder,handelPayment,total,onClose,onOpen,isOpen,payment}) => {

    let dates = []
    let currentDate = new Date();
    let arr = [0,1,3,4]
    
    for (let i = 0; i < arr.length; i++) {
    
      let nextDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + arr[i]);
      let weekday = nextDayDate.toLocaleDateString('en-US', { weekday: 'long' });
      let month = nextDayDate.toLocaleDateString('en-US', { month: 'long' });
      let year = nextDayDate.getFullYear();
      let day = nextDayDate.getDate();
    
      let date = `${weekday} ${month} ${year} ${day}`;
        dates.push(date)
    }




  return (
      <Box w='50%'  p='10px' textAlign='left' border='1px solid gray' h='fit-content'>
        <Text  as='b' color='green'>Date Of Order : {dates[0]}</Text>
         <Divider mb='10px' mt='10px'/>
        <Box>
        <Text as='b' color='blue'>Shipping Date : {dates[1]}</Text>
        <Text>Package will arrive at Bhivandi, Maharashtra</Text>
        </Box>
        <Divider mb='10px' mt='10px'/>
        <Text as='b' color='orange'>Will Out For Delivery:{dates[2]}</Text>
        <Divider mb='10px' mt='10px'/>
        <Text as='b'> Will Arrive On :{dates[3]}</Text>
        <Divider mb='10px' mt='10px'/>
     { payment?<Button display='block' m='auto' bg='orange' w='100%' onClick={handelOrder}>Order Now</Button>:
        <Payment 
          handelPayment={handelPayment} 
          total={total}
          onClose={onClose}
          onOpen={onOpen}
          isOpen={isOpen}
          />}
      </Box>
  )
}

export default CompDates
