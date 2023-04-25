import React, { useState,useEffect } from 'react';
import { Box,Flex,Text,Image, Stack } from '@chakra-ui/react';
import { WiSunrise,WiDaySunnyOvercast,WiSunset,WiNightAltCloudy, WiDayCloudy } from "react-icons/wi";


const Timer = () => {
    let time = new Date().toLocaleTimeString()
const [timer,setTimer] = useState(time)
const [event,setEvent] = useState('')



const today = new Date();
const month = today.toLocaleString('default', { month: 'long' }); 
const day = today.getDate(); 
const year = today.getFullYear(); 
const Today = `${month} ${day} ${year}`;

   useEffect(() => {
    
    const intervalId = setInterval(() => {
        time = new Date()
        setEvent(time.getHours())
        setTimer(time.toLocaleTimeString())
      }, 1000);
     
    return () => clearInterval(intervalId);
  }, []);

  return (
 
  <Box borderRadius='5px'  h='150px' bgImage={event>=7 && event<10?"url(https://i.pinimg.com/564x/aa/dd/e3/aadde3cb6bcd593a9c7ddb1e88c366cd.jpg)":
  event>=10 && event<18 ?"url(https://i.pinimg.com/564x/d3/69/7e/d3697e78a425125b0037c6ecfc6d58a8.jpg)":
  event>=18 && event<=19?"url(https://i.pinimg.com/564x/9f/29/95/9f29953f7f5ac98c7475dc1cb9ba6433.jpg)":
  event>19 ?"url(https://i.pinimg.com/564x/47/6a/93/476a9380e8ff68026a4238e2d074bbe6.jpg)":''
} bgSize='cover' bgPosition='center' bgRepeat='no-repeat' >
 <Box w='fit-content' m='auto' backdropFilter='auto' backdropContrast='30%' p='5px' mt='10px'>
 <Text fontSize='3xl'>{timer}</Text>
  <Text>{Today}</Text>
 </Box>
<Box>
{event>=7 && event<10?<WiSunrise size='65px' color='orange' />:event>=10 && event<18?<WiDayCloudy size='65px'color='yellow' />:event>=18 & event<=19?<WiSunset size='65px' color='orange'/>:<WiNightAltCloudy size='65px' />}
</Box>
</Box>
 
  )
}

export default Timer
