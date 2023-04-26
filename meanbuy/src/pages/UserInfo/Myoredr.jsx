import React, { useEffect,useState } from 'react';
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
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getOrders} from '../../Redux/Order.redux/order.action.js'


const Myoredr = () => {
const dispatch = useDispatch()
const {orders,loading,error,total} = useSelector((store)=>store.orderManager)

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
    <Box m='auto'>
      <Text m='auto' fontSize='5xl' color='orange'  w='fit-content'>Shop Something</Text>
      <Image m='auto' w='50%' src='https://media4.giphy.com/media/fGsz5zu3sQqYCc5M6C/giphy.gif?cid=6c09b952d9718add0faa58f254a49bf782048493921a298a&rid=giphy.gif&ct=s' alt="Your Orders Are Empty" />
    </Box>
  )
}


  return (
    <Box w='100%'>
      <Flex bg='orange' p='5px' pl='15px'> 
        <Text as='b'>Total : ₹{total}</Text>
      </Flex>
  <TableContainer boxShadow='base'>
   
  <Table  color='black' p='5px'>

    <Thead w='100%' bg='orange.500' >
      <Tr>
        <Th color='black'>Product</Th>
        <Th color='black'> Dates</Th>
        <Th color='black'>Tracking ID</Th>
        <Th color='black'>Status</Th>
      </Tr>
    </Thead>
    <Tbody >
        {orders.map((ele)=>{
          return(
           <Tr key={ele._id} bg='orange.100' filter='auto' brightness={ele.status=='rejected'?'50%':'100%'} border='1px solid gray'>
           {/* <Link to={`/product/${ele._id}`}> */}
           <Td p='5px' >
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
           {/* </Link> */}
            <Td >
              <Text as='b'>{ele.deliverydate}</Text>
              <Text fontSize='15px'>ordered:{ele.orderdate}</Text>
            </Td>
            <Td>
              <Text as='b'>{ele.trackingID}</Text>
            </Td>
             <Td>
              <Text as='b' color={ele.status=='ordered'?'green':ele.status=='rejected'?'gray':'orange'} >{ele.status}</Text>
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
