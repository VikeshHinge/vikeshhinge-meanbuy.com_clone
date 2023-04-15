
import React,{useState,useEffect} from 'react';

import { Box,Image,SimpleGrid,Text,Flex, Divider, Spacer} from '@chakra-ui/react'

import {one,two,three,four,five,fournhalf,threenhalf} from '../Componunt/objects'
import { Link,useParams,useLocation,useSearchParams } from 'react-router-dom';
import { BiRupee } from "react-icons/bi";
// import { GetproductbyCategory } from '../Axios/Axios';
import FilterSidebox from './product.filter';
import {useDispatch,useSelector} from 'react-redux';
import {GetProductBycategory} from '../Redux/Products.Redux/product.action.js';


let Brand=['SKMEI','Marvel','Sanddunes','citizen','MB']


const ProductPage = () => {


let categories = useParams()

let location = useLocation()
const [page,setPage]=useState(1)
const [searchParams] = useSearchParams()

let dispatch = useDispatch()

console.log(searchParams.getAll('brand','price','rating','sort'))//8888888888************errr
const {productData,error,loading} = useSelector((store)=>store.productManager)


useEffect(()=>{
  //console.log(categories,location)
  console.log(location.search)
  // let paramobj = {
  //   params:{
  //     brand:searchParams.getAll('brand')
  //   }
  // }
 dispatch(GetProductBycategory(categories,location.search))
},[dispatch,categories,location])



  return (
    <Box p='5px' pt={{base:'150px',md:'180px'}} position='relative' mb='20px'>
       <Text textAlign='left' p='5px' pl='15px'>Filter</Text>
    <Flex m='auto' gap='20px' flexDirection={{base:'column',md:'row'}} >
      
            {/* _______________filter box__________________ */}
            <FilterSidebox   Brand={Brand}/>
            {/* ________________display____________________ */}
            <Box w={{base:'100%',md:"95%"}} >
             <Box >
               <Flex cursor='pointer' alignItems='center' fontSize='md'> <Text  pl='30px' fontSize={{base:'sm',md:'md'}} mb='30px'>Home {`>`} Categories {`>`}</Text><Text mb='30px' color='orange' fontSize={{base:'sm',md:'md'}}>{categories.cate}</Text></Flex>
             
             <SimpleGrid columns={{base:'2',md:'3'}} gap='10px' w='90%' m='auto' >
               { productData.length>=0 && productData.map((ele)=>(

                  <Box key={ele.id}  p='5px' m='auto' bg='orange.100' >
                  
                        <Link to={`/product/${ele._id}`}>
                        <Box position='relative' w='100%' fontWeight='bold' color='white' >
                        <Image w='100%' h='90%' src={ele.img1} alt={ele.img1}/>
                        <Text bg='green.500' fontSize='12px' borderRadius='5px' p='3px' position='absolute' top='0px'>{ele.discount}% OFF</Text>
                        </Box>
                        <Flex p='10px' textAlign='left' gap='5px'>
                           <Box fontSize={{base:'sm',md:'lg'}}>
                           <Text fontSize='md' >{ele.title}</Text>
                           
                            <Flex gap='5px' mt='5px' mb='5px' color='#f39019'>
                            {ele.rating===1?one:'' ||ele.rating===2?two:'' ||ele.rating ===3?three:''|| ele.rating >=3.1 && ele.rating<4 ?threenhalf:'' || ele.rating ===4 ?four:'' || ele.rating >=4.1 ? fournhalf:'' }
                            </Flex>
                              <Divider/>
                              <Flex justifyContent='space-between' alignItems='center' w='100%'>
                              <Flex alignItems='center' justifyContent='space-evenly'  as='b' color='#ED8936'><BiRupee color='#ED8936'/><Text>{ele.price}</Text></Flex>
                              <Spacer/>
                               <Text color='green' fontSize='15px' fontWeight='bold'>{ele.brand}</Text> 
                                </Flex>

                           </Box>
                        </Flex>
                        </Link>
                       
                   </Box>
                  
               ))}
           </SimpleGrid> 
             </Box>
               
            </Box>
   
               
           </Flex>

    </Box>
  )
 }

export default ProductPage
