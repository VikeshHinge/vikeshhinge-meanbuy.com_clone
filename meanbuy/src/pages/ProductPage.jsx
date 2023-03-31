
import React,{useState,useEffect} from 'react';

import { Box,Image,SimpleGrid,Text,Flex, Divider, Spacer} from '@chakra-ui/react'

import {one,two,three,four,five,fournhalf,threenhalf} from '../Componunt/objects'
import { Link,useParams,useLocation,useSearchParams } from 'react-router-dom';
import { BiRupee } from "react-icons/bi";
import { GetproductbyCategory } from '../Axios/Axios';
import FilterSidebox from './product.filter';
import {useDispatch,useSelector} from 'react-redux';
import {GetProductbyId} from '../Redux/ProductPg.Redux/Items.action.js'


const ProductPage = () => {


let Params_cate = useParams()
let location = useLocation()
const [page,setPage]=useState(1)
const [searchParams] = useSearchParams()
let {productData,loading,error,Brand} = useSelector((store)=>(store.ItemsManager))

let dispatch = useDispatch()

//console.log(searchParams.getAll('brand'))

useEffect(()=>{
  //console.log(Params_cate)
  //console.log(location)
  
  let paramobj = {
    params:{
      brand:searchParams.getAll('brand')
    }
  }

   dispatch(GetProductbyId({Params_cate,paramobj}))
},[dispatch,location.search,Params_cate])



  return (
    <Box p='5px' pt={{base:'150px',md:'180px'}} position='relative' mb='20px'>
       <Text textAlign='left' p='5px' pl='15px'>Filter</Text>
    <Flex m='auto' gap='20px' flexDirection={{base:'column',md:'row'}} >
      
            {/* _______________filter box__________________ */}
            <FilterSidebox   Brand={Brand}/>
            {/* ________________display____________________ */}
            <Box w={{base:'100%',md:"95%"}} bg='orange.100'>
               <Box>{}</Box>
             <Box >
               <Flex alignItems='center'> <Text  pl='30px' fontSize={{base:'sm',md:'xl'}} mb='30px'>Home {`>`} Categories {`>`}</Text><Text mb='30px' color='orange' fontSize={{base:'sm',md:'xl'}}>{Params_cate.cate}</Text></Flex>
             
             <SimpleGrid columns={{base:'2',md:'3'}} gap='10px' w='90%' m='auto' >
               { productData && productData.map((ele)=>(

                  <Box key={ele.id}  p='5px' m='auto' >
                  
                        <Link to={`/products/${ele.id}`}>
                        <Box w='100%' >
                        <Image w='100%' h='90%' src={ele.img1} alt={ele.img1}/>
                        </Box>
                        <Flex p='10px' textAlign='left' gap='5px'>
                           <Box fontSize={{base:'sm',md:'lg'}}>
                           <Text fontSize='md' >{ele.title}</Text>
                           
                            <Flex gap='5px' mt='5px' mb='5px' color='#f39019'>
                            {ele.rating===1?one:'' ||ele.rating===2?two:'' ||ele.rating ===3?three:''|| ele.rating >=3.1 && ele.rating<4 ?threenhalf:'' || ele.rating ===4 ?four:'' || ele.rating >=4.1 ? fournhalf:'' }
                            </Flex>
                              <Divider/>
                              <Flex justifyContent='space-between' alignItems='center' >
                              <Flex alignItems='center' color='#ED8936'><BiRupee color='#ED8936'/><Text>{ele.price}</Text></Flex>
                              <Spacer/>
                               <Text color='green'>Flat{ele.discount}%OFF</Text> 
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
