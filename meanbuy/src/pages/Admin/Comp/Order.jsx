import React, { useEffect, useState } from 'react';
import { Box,Text,Flex,Image, SimpleGrid,Grid, GridItem,Table,Thead,Tbody,Tr,Th, Td,TableCaption,TableContainer,
  Spinner,Select
} from '@chakra-ui/react';
import axios from 'axios';



const Order = ({orders,handelStatus}) => {

  return (
    <Box>
<TableContainer boxShadow='base' w='100%' color='white' >
  <Table  color='white' p='5px' >

    <Thead w='100%' >
      <Tr bg='orange'>
        <Th color='white'>Product</Th>
        <Th color='white'> Dates</Th>
        <Th color='white'>Product ID</Th>
        <Th color='white'>Status</Th>
      </Tr>
    </Thead>
    <Tbody >
        {orders && orders.map((ele)=>{
          return(
           <Tr key={ele._id} >
     
           <Td p='5px'>
               <Flex gap='10px'  >
                <Image w='70px' src={ele.img1} alt={ele.title}/>
                <Box  overflow='hidden'>
                <Text fontSize='13px' overflow='hidden' >{ele.title}</Text>
                 <Text>Quantity: {ele.quantity}</Text>
                 <Text as='b'>₹ {ele.price}</Text>
                 <Text fontSize='13px'>Brand: {ele.brand}</Text>
                </Box>
               </Flex>
            </Td>

            <Td fontSize='12px'>
              <Text color='#f50269' >{ele.deliverydate}</Text>
              <Text  color='orange' fontSize='15px'>ordered:{ele.orderdate}</Text>
            </Td>
            <Td fontSize='12px'>
              <Text >Tracking Id:{ele.trackingID}</Text>
              <Text >User :{ele.user}</Text>
            </Td>
            <Td fontSize='12px'>
            <Select onChange={(e)=>handelStatus(ele._id,e)} color='black' placeholder={ele.status} bg={ele.status==='ordered'?'green':ele.status==='out for delivery'?'yellow':'red'}>
            <option  value='ordered'>Ordered</option>
            <option value='out for delivery'>Out For Delivery</option>
            <option value='rejected'>Rejected</option>
            </Select>
            </Td>
          </Tr>
          )
        })}
      </Tbody>
    </Table>
    </TableContainer>
   </Box>
  )
}

export default Order
