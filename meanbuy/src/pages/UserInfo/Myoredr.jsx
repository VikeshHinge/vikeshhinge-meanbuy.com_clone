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
import { Link,useNavigate } from 'react-router-dom';
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
    <Box w='100%'>
  <TableContainer boxShadow='base'>
  <Table variant='striped' colorScheme='orange' color='black' p='5px'>

    <Thead w='100%' bg='orange.300' color='black'>
      <Tr>
        <Th >Product</Th>
        <Th > Dates</Th>
        <Th>Tracking ID</Th>
      </Tr>
    </Thead>
    <Tbody bg='green.100'>
        {orders.map((ele)=>{
          return(
           <Tr key={ele._id} >
           {/* <Link to={`/product/${ele._id}`}> */}
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
           {/* </Link> */}
            <Td>
              <Text as='b'>{ele.deliverydate}</Text>
              <Text fontSize='15px'>ordered:{ele.orderdate}</Text>
            </Td>
            <Td>
              <Text as='b'>{ele.trackingID}</Text>
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
