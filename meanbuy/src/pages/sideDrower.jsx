import React from 'react';
import { Box,Text,Flex, Checkbox} from '@chakra-ui/react';

const SideDrower = ({ filterRating,PrintsRating,one,two,three,four}) => {
 
    
  return (
     <Box textAlign='start' p='10px' >
        <Text as='b' >Pricing</Text>
    <Box mb='10px' mt='10px'>
    <Checkbox>
      Under INR 427288
    </Checkbox>
    <Checkbox>
    Under INR 427288 - INR 75662
    </Checkbox>
    <Checkbox>
    Under INR 75662 -INR 1475662
    </Checkbox>
    <Checkbox>
    Under INR 1475662
    </Checkbox>
         </Box>
    <Text as='b' >Customer Ratings</Text>
         <Box mb='10px' mt='10px'>
   <Checkbox onChange={(e)=> filterRating(e,4) }>
   <Flex gap='5px' alignItems='center' > {four} 4 & up</Flex>
  </Checkbox><br />
  <Checkbox onChange={(e)=> filterRating(e,3) }>
   <Flex gap='5px' alignItems='center'> {three} 3 & up</Flex>
  </Checkbox><br />
  <Checkbox onChange={(e)=> filterRating(e,2) }>
   <Flex gap='5px' alignItems='center' >{two } 2 & up</Flex>
  </Checkbox><br />
  <Checkbox onChange={(e)=> filterRating(e,1) }>
   <Flex gap='5px' alignItems='center'>{one } 1 & up</Flex>
  </Checkbox><br />
</Box>
<Text as='b' >Prints</Text>
<Box mb='10px' mt='10px'>
<Checkbox onChange={(e)=> PrintsRating(e,'Solid')}>
    Solid
  </Checkbox><br />
  <Checkbox onChange={(e)=> PrintsRating(e,'pattern')}>
   Pattern
  </Checkbox>
  </Box>
</Box>
  )
}

export default SideDrower;