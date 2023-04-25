import React from 'react';
import { Box,Text,Flex,Image, SimpleGrid,Grid, GridItem,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
} from '@chakra-ui/react';

const OrderTable = ({Orders}) => {
console.log(Orders)

  return (
    Orders.length>0 &&   <TableContainer boxShadow='base' w='100%' color='white' >
  <Table  color='white' p='5px' >

    <Thead w='100%' >
      <Tr bg='orange'>
        <Th color='white'>Product</Th>
        <Th color='white'> Dates</Th>
        <Th color='white'>Tracking ID</Th>
      </Tr>
    </Thead>
    <Tbody >
        {Orders && Orders.map((ele)=>{
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

            <Td>
              <Text color='#f50269' as='b'>{ele.deliverydate}</Text><br />
              <Text as='b' color='orange' fontSize='15px'>ordered:{ele.orderdate}</Text>
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
  )
}

export default OrderTable
