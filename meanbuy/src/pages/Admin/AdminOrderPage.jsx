import React, { useEffect } from 'react';
import { Box,Text,Flex,Image, SimpleGrid,Grid, GridItem,Table,Thead,Tbody,Tr,Th, Td,TableCaption,TableContainer,
  Spinner
} from '@chakra-ui/react';
import { useDispatch,useSelector } from 'react-redux';

import Order from './Comp/Order';
import AdminSidebar from './AdminSidebar';
import {GetAllOrders, UpdateOrsers } from '../../Redux/Order.redux/order.action';

const AdminOrderPage = () => {
const dispatch = useDispatch()
const {orders,loading,error} = useSelector((store)=>store.orderManager)

const handelStatus = (id,e) => {
  dispatch(UpdateOrsers(id,e.target.value))
}

useEffect(()=>{
   dispatch(GetAllOrders)
},[dispatch])

let arr = [1,2,3,4,5,6,7,8,9,10]

if(error){
  return(
    <Text>Error : 400</Text>
  )
}

  return (
    <Box p='10px' bg='#1a202c' color='white' w='100%' m='auto'>
      <Flex gap='10px'>
        <AdminSidebar/>
        {loading && <Box m='auto'> loading ...<Spinner/></Box>}
        {orders && <Order orders={orders} handelStatus={handelStatus}/>}
      </Flex>
   </Box>
  )
}

export default AdminOrderPage
