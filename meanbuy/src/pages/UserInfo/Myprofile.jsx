import React from 'react';
import {Box,Flex,Text,Image,Table,Tr,Th, Button,Square,Divider,Tbody,Thead} from "@chakra-ui/react";
import { EditIcon} from '@chakra-ui/icons'

const Myprofile = () => {
  return (
     <Box>
         <Box  boxShadow='md' border='1px solid gray' p='15px'>
    <table>
         <tr>
             <th>My Details</th>
             <td><EditIcon/></td>
         </tr>
         <tr>
             <th>Name</th>
             <td>Vikesh Hinge</td>
         </tr>
         <tr>
             <th>Mobile Number</th>
             <td>98234523266</td>
         </tr>
         <tr>
             <th>Email Id</th>
             <td>vikeshvhinge@gmail.com</td>
         </tr>
     </table>
    </Box>
    <Box mt='20px'  p='10px'  boxShadow='md' border='1px solid gray'>
      <table>
      <tr>
             <th>Address</th>
             <td><EditIcon/></td>
     </tr>
      </table>
    </Box>
     </Box>
  )
}

export default Myprofile
