import React, { useEffect, useState,useCallback } from 'react';
import { Box,Flex,Image,Text,Button,Spinner} from '@chakra-ui/react';
import { FaRegUserCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaUser,FaUserTie,FaUserSecret,FaUserAstronaut,FaAndroid,FaNimblr,FaWaze,FaChessKnight } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

const Customer = ({user,setuserProfile}) => {

    let arr = [<CiUser size='35px'/>,<FaUser size='35px'/>,<FaUserTie size='35px'/>,<FaUserSecret size='35px'/>,<FaUserAstronaut size='35px'/>,<FaAndroid size='35px'/>,<FaNimblr size='35px'/>,<FaWaze size='35px'/>,<FaChessKnight size='35px'/>,<BiUser size='35px'/>]

  return (
        <Box >
            <Text bg='orange'>User Data</Text>
     { 
        user && user.map((ele)=>(
            <Flex key={ele._id} _hover={{bgGradient:'linear(to-l, #7928CA, #FF0080)'}} backdropFilter='auto' backdropContrast='30%' cursor='default' onClick={()=>setuserProfile(ele)}  border='1px solid orange' borderRadius='5px' textAlign='left' gap='10px' p='5px' m='5px' alignItems='center'>
              
                 <Box border='1px solid orange' borderRadius='5px' w='70px' h='70px' display='flex' alignItems='center' justifyContent='center'>
                 <Box>{arr[Math.floor(Math.random()*10)]}</Box>
                 </Box>
              
                <Box p='5px'>
                <Text>Name: {ele.name}</Text>
                <Text>EmailID: {ele.email}</Text>
                <Text>Contact: {ele.contact}</Text>
                </Box>
            </Flex>
        ))
     }
  </Box>
  )
}

export default Customer
