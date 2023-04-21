import React from 'react';
import { Box,Flex } from '@chakra-ui/react';
import CartChart from './Analyatics/OrderChart';
import ProductvsOrder from './Analyatics/OrdervsCart';
import ProductChart from './Analyatics/ProductChart';
import UserChart from './Analyatics/UsersChart';
import OvsC from './Analyatics/Try';
const Dashboard = () => {
  return (
   <Box w='98%' m='auto' pt='180px' mb='70px'>
   <Flex gap='5px'>
    <Box w='20%' border='1px solid'>SideBar</Box>
    <Box  w='80%'>
    <UserChart/>
      <Flex>
      <OvsC/>
      <ProductvsOrder/>
      </Flex>
    </Box>
   </Flex>
   <ProductChart/>
   </Box>
  )
}

export default Dashboard
