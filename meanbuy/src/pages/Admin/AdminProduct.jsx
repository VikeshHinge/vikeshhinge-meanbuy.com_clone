import React, { useEffect, useState } from 'react';
import { Box,Flex} from '@chakra-ui/react';
import AdminSidebar from './AdminSidebar';
import Admin from './Addproduct';

const AdminProduct = () => {
  return (
        <Flex gap='20px' p='10px' bg='#1a202c' color='white'>
            <AdminSidebar/>
           <Flex gap='20px'>
             <Box>
                <Admin/>
             </Box>
             <Box>All Products -----</Box>
           </Flex>
        </Flex>
  )
}

export default AdminProduct
