import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,Text,Image,Flex
} from '@chakra-ui/react';

import {useDispatch,useSelector} from 'react-redux';
import {getOrders} from '../../Redux/Order.redux/order.action.js'


const Myoredr = () => {

const dispatch = useDispatch()
const {orders,loading,error} = useSelector((store)=>store.orderManager)

useEffect(()=>{
  getOrders(dispatch)
},[dispatch])


if(loading){
  return (
      <Box m='auto'>
        <Image src='https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif' alt='loading ...'/>
     </Box>
  )
}

if(orders.length === 0){
  return (
    <Box>
      <Image src='https://cdn-icons-png.flaticon.com/512/4688/4688853.png' alt="Your Orders Are Empty" />
    </Box>
  )
}

  return (
    <Box>
  <TableContainer boxShadow='base'>
  <Table variant='striped' colorScheme='orange' p='5px'>

    <Thead w='100%' bg='orange.300'>
      <Tr>
        <Th>Product</Th>
        <Th>Your Price</Th>
        <Th >Order Date</Th>
      </Tr>
    </Thead>
    <Tbody>
        {orders.map((ele)=>{
          return(
           <Tr >
            <Td p='5px'>
               <Flex gap='10px'>
                <Image w='70px' src={ele.img1} alt={ele.title}/>
                <Box>
                <Text as='b'>{ele.title}</Text>
                 <Text>Quantity: {ele.quantity}</Text>
                 <Text>Brand: {ele.brand}</Text>
                </Box>
               </Flex>
            </Td>
            <Td>
              <Text as='b'>₹ {ele.price}</Text>
            </Td>
            <Td>
              <Text as='b'>{ele.orderdate}</Text>
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

export default Myoredr
