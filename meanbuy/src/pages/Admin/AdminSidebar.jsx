import React from 'react'
import { Box,Flex,Text,Image, Stack } from '@chakra-ui/react';
import { BsHandbag,BsPersonCircle,BsCartCheckFill } from "react-icons/bs";
import Timer from './Timer';

const AdminSidebar = () => {
  return (
   <Box w='18%' pb='5px'>
       
       <Box color='black' border='2px solid orange' p='5px' bg='orange.200' h='140px'>
       <Image src='https://d64lkarmo2mrq.cloudfront.net/baselogo.png' alt='Logo'/>
        <Flex gap='10px'>
        <Image bg='black' borderRadius='50%' border='2px solid' w='50px' src='https://avatars.githubusercontent.com/u/103572278?s=400&u=f4788ea6bce0d750dce2b88e0c536b1d7c32a658&v=4' alt='admin'/>
         <Box>
         <Text fontSize='lg' as='b'>Vikesh Hinge</Text>
         <Text>Admin account</Text>
         </Box>
        </Flex>
       </Box>
        
        <Flex _hover={{bg:'#f50269'}} p='5px' border='1px solid' gap='10px' alignItems='center'm='auto' mt='10px' mb='10px'>
        <BsHandbag size='20px'/>
        <Text fontSize='md'>Products </Text>
        </Flex>

        
        <Flex _hover={{bg:'#f50269'}} p='5px' border='1px solid' gap='10px' alignItems='center'm='auto' mt='10px' mb='10px'>
        <BsPersonCircle size='20px'/>
        <Text fontSize='md'>Customers</Text>
        </Flex>

        <Flex _hover={{bg:'#f50269'}} p='5px' border='1px solid' gap='10px' alignItems='center'm='auto' mt='10px' mb='10px'>
        <BsCartCheckFill size='20px'/>
        <Text fontSize='md'>Orders</Text>
        </Flex>

        <Timer/>
   </Box>
  )
}

export default AdminSidebar
