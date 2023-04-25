
import React,{useState,useEffect} from 'react';

import { Box,Image,SimpleGrid,Text,Flex, Divider, Spacer} from '@chakra-ui/react'

import {one,two,three,four,five,fournhalf,threenhalf} from '../../Componunt/objects'
import { Link,useParams,useLocation,useSearchParams } from 'react-router-dom';
import { BiRupee } from "react-icons/bi";
// import { GetproductbyCategory } from '../Axios/Axios';
import FilterSidebox from './product.filter';
import {useDispatch,useSelector} from 'react-redux';
import {GetProductBycategory} from '../../Redux/Products.Redux/product.action.js';
import { brands } from '../../Componunt/objects';
import Pagination from './Pagination';



const ProductPage = () => {

const [currpage,setCurrPage] = useState(1)
const [postPerPage,setPostPerPage] = useState(6)
let categories = useParams()
let location = useLocation()
const [Brand,setBrand] = useState([])
const [searchParams] = useSearchParams()
let dispatch = useDispatch()

// console.log(searchParams.getAll('brand','price','rating','sort','page'))
const {productData,total,error,loading} = useSelector((store)=>store.productManager)


const lastindex = currpage*postPerPage;
const firstindex = lastindex - postPerPage;


useEffect(()=>{

  if(categories.cate){
   setBrand(brands[categories.cate])
  }
 
 dispatch(GetProductBycategory(categories,location.search,firstindex,lastindex))

},[dispatch,categories,location,currpage])

let Loading = Array(5).fill(1);


if(error){
  return(
    <Box>
      <Image  src='https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1' err='404 Error'/>
    </Box>
  )
}

  return (
    <Box p='5px' pt={{base:'150px',md:'180px'}} position='relative' mb='20px'>
    
    <Flex m='auto' gap='20px'w={{base:'100%',md:'98%'}} flexDirection={{base:'column',md:'row'}}>
      
 {/* _______________filter box__________________ */}
            <FilterSidebox   Brand={Brand}/>
{/* ________________display____________________ */}
            <Box w={{base:'100%',md:"95%"}}>
             <Box >
            <Flex alignItems='center' justifyContent='space-between' flexDirection={{base:'column',md:'row'}} mb='30px'>
                  <Flex> <Text as='b' color='#0a66c2'  pl='30px' fontSize={{base:'sm',md:'md'}} >Home {`>`} Categories {`>`}</Text><Text as='b' color='orange'>{categories.cate}</Text></Flex>
 {/* ________________Pagination___________________ */}                 
                  <Pagination Total={total} postPerPage={postPerPage} setCurrPage={setCurrPage} currpage={currpage}/>
            </Flex>
 
               {loading ? 
                        <SimpleGrid columns={4} spacing={10}>
                         {Loading.map((ele,i)=>(<Box kry={i} className='loading'>
                            loading ....
                         </Box>))}
                        </SimpleGrid>
                    :
                    <SimpleGrid columns={{base:'2',md:'3'}} gap='10px' w='90%' m='auto' >
               { productData.length>=0 && productData.map((ele)=>(

                  <Box key={ele._id}  p='5px' m='auto' bg='orange.100' >
                  
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
                    }
             
             </Box>
               
            </Box>
   
               
           </Flex>

    </Box>
  )
 }

export default ProductPage
