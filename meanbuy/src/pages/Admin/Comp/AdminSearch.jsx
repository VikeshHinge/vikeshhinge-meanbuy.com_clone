import {useState,useCallback} from "react"
import {Box,Button,Input,Textarea,Flex,Text, InputGroup,InputLeftElement,Image} from "@chakra-ui/react";
import {Search2Icon} from '@chakra-ui/icons';


const AdminSearch = ({searchKey,handelvalue,searchData,GotoSearchProduct,product,handelchange,handelPostUpdate,handelCancel}) => {

  return (
    <Box p='10px'>
        <InputGroup display={product.length>0?'none':'block'}>
           <InputLeftElement
           pointerEvents='none'
           children={<Search2Icon color='gray.300' />} />
          <Input type='text' value={searchKey}  onChange={handelvalue} placeholder='Search'  size='sm' w='350px'/>
        </InputGroup>

 {/*------------------- ...search result */}
            <Box display={searchData.length>0?'block':'none'} w="350px"  p='5px'>
            {searchData.length>0 && searchData.map((ele)=>(
                <Box key={ele._id} border='1px solid' mt='3px' cursor={'pointer'} _hover={{border:'1px solid orange',color:'orange'}}>
                  
                    <Flex alignItems='center' textAlign='left' gap='5px' onClick={()=>GotoSearchProduct(ele)}  >
                     <Image src={ele.img1} alt={ele.title} w='50px' />
                      <Text as='b'>{ele.title.split(' ').slice(0,4).join(' ')}</Text>
                    </Flex>
                </Box>
            ))}
          </Box>

{/* ---------------------Update  product */}
            <Box display={product.length<0 ?'none':'block'}>
            {
               product && product.map((ele)=>(
                 <Box key={ele._id} textAlign='left' fontSize='12px'>
                   <Image src={ele.img1} alt={ele.title} w='40%' />
                  Image: <Input type='text' onChange={handelchange} name='img1' mb='10px' size='sm' value={ ele.img1}/>
                  Name:<Input type='text' onChange={handelchange} name='title' mb='10px' size='sm' value={ ele.title}/>
                  Price:<Input type='number' onChange={handelchange} name='price' mb='10px' size='sm' value={ ele.price} />
                  Brand:<Input type='text' onChange={handelchange} name='brand' mb='10px' size='sm' value={ ele.brand}/>
                  Quantity:<Input type='number' onChange={handelchange} name='product_quantity' mb='10px' size='sm' value={ ele.product_quantity}/>
                  Discount:<Input type='number' onChange={handelchange} name='discount' mb='10px' size='sm' value={ ele.discount}/>
                  <Flex gap='10px'>
                  <Button bg='#f50269' onClick={()=>handelPostUpdate(ele)}>Post Update</Button>
                  <Button bg='Orange' onClick={handelCancel}>Cancel</Button>
                  </Flex>
                 </Box>
               ))
            }
            </Box>
    </Box>
  )
}

export default AdminSearch
