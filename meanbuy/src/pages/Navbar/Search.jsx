import React,{useState,useCallback, useEffect} from 'react';
import {Box,Flex,HStack,Text,Image,InputGroup,Input,InputRightElement,Button,Spacer,Divider} from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons';
import {Link,useNavigate} from 'react-router-dom'
import { GetSearchData } from "../../Redux/Products.Redux/productAPI";

const Search = ({bg}) => {
    const [searchData,setSearchData] = useState([])
    const [searchKey,setSearchkey] = useState('')
    const Navigate = useNavigate()

    const debounce = (func) =>{
        let timer;
        return function (...args){
          const context = this;
          if(timer){
            clearTimeout(timer)
          }
          timer = setTimeout(()=>{
            timer = null;
            func.apply(context,args)
          },800)
        }
      }
      
      const handelSearch = (value) => {
           if(value !=='') {
            GetSearchData(value).then((res)=>setSearchData(res))
           }else{
            setSearchData([])
           }
      }
  
      const optimisation = useCallback(debounce(handelSearch),[])
     

      const handelvalue = (e) => {
        let {value} = e.target;

        setSearchkey(value)
        optimisation(value)
      }


      const GotoSearchProduct = (id) => {
        setSearchkey('')
        setSearchData([])
        return Navigate(`product/${id}`)
      }

  return (
    <Box position='relative' >
          <InputGroup size='sm' w="350px" h="10"  display={{base:"none",md:"block"}} >
             <Input type='text' value={searchKey} fontWeight='bold' onChange={handelvalue} placeholder='Search'  size='sm' w='350px'/>
             <InputRightElement width='4.5rem'>
               <Button  size='sm' bg="none">
                 <Search2Icon/>
               </Button>
             </InputRightElement>
          </InputGroup>

          <Box display={searchData.length>0?'block':'none'} position='absolute' w="350px" height='350px' overflowY='scroll'  p='5px' zIndex='9999' bg={ !bg?'#1a202c':'white'} boxShadow={'2px 2px 10px rgba(0, 0, 0, 0.3)'}>
            {searchData.length>0 && searchData.map((ele)=>(
                <Box key={ele._id} border='1px solid' mt='3px' cursor={'pointer'} _hover={{border:'1px solid orange',color:'orange'}}>
                  
                    <Flex alignItems='center' textAlign='left' gap='5px' onClick={()=>GotoSearchProduct(ele._id)}  >
                     <Image src={ele.img1} alt={ele.title} w='50px' />
                      <Text as='b'>{ele.title.split(' ').slice(0,4).join(' ')}</Text>
                    </Flex>
                   
                </Box>
            ))}
          </Box>
    </Box>
  )
}

export default Search
