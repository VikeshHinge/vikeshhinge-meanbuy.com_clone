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
    <Box color='white' h='150px' border='1px solid' bgImage={event>=7?"url(https://i.pinimg.com/564x/d4/6c/0d/d46c0db60c5d04f9ce62c39d203810e5.jpg)":
                                                event>=10?"url(https://i.pinimg.com/564x/eb/40/48/eb40481e88f8a5d8f7fd71c61425aa3a.jpg)":
                                                event>=17 & event<=19?"url(https://i.pinimg.com/564x/9f/29/95/9f29953f7f5ac98c7475dc1cb9ba6433.jpg)":
                                                "url(https://i.pinimg.com/564x/47/6a/93/476a9380e8ff68026a4238e2d074bbe6.jpg)"
                                              }>
        <Text fontSize='3xl'>{timer}</Text>
        <Text>{Today}</Text>
        <Box>
        {event>=7?<WiSunrise size='65px' color='orange' />:event>=10?<WiDayCloudy size='65px'color='yellow' />:event>=17&event<=19?<WiSunset size='65px' color='orange'/>:<WiNightAltCloudy size='65px' />}
        </Box>
    </Box>
  )
}

export default Timer
