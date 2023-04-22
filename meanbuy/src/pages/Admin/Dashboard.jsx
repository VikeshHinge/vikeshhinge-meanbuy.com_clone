import React from 'react';
import { Box,Flex } from '@chakra-ui/react';
import CartChart from './Analyatics/OrderChart';
import ProductvsOrder from './Analyatics/OrdervsCart';
import ProductChart from './Analyatics/ProductChart';
import UserChart from './Analyatics/UsersChart';
import OvsC from './Analyatics/Try';
import AdminSidebar from './AdminSidebar';
import AdminProduct from './AdminProduct';


const Dashboard = () => {
  return (
  //  <Box p='10px' m='auto' mb='70px' bg='#1a202c' color='white'>
  //  <Flex gap='5px'>
  //   <AdminSidebar/>
  //   <Box w='80%' >
  //   <UserChart/>
  //     <Flex>
  //       <Box w='100%'>
  //       <OvsC/>
  //       </Box>
  //      <Box w='100%'>
  //      <ProductvsOrder/>
  //      </Box>
  //     </Flex>
  //   </Box>
  //  </Flex>
  //  <ProductChart/>
  //  </Box>
  <AdminProduct/>
  )
}

export default Dashboard
