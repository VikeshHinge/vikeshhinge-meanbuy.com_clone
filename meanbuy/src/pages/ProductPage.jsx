
import React,{useState,useEffect} from 'react';

import { Box,Image,SimpleGrid,Text,Flex, Accordion,AccordionItem,AccordionButton, AccordionPanel, AccordionIcon,Checkbox, Divider, Spacer,
} from '@chakra-ui/react'

import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
import { Link,useParams } from 'react-router-dom';
import { BiRupee } from "react-icons/bi";
import { GetproductbyCategory } from '../Axios/Axios';
import {useDispatch,useSelector} from 'react-redux';
import {GetProductbyId} from '../Redux/ProductPg.Redux/Items.action.js'


const ProductPage = () => {


let four =[<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStar size='13px'/>]
let five=[<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill  size='13px'/>]
let fournhalf = [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarHalf size='13px'/>]
let two= [<BsStarFill  size='13px'/>,<BsStarFill  size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let one= [<BsStarFill  size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let three = [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let threenhalf= [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarHalf size='13px'/>,<BsStar size='13px'/>]

let Params_cate = useParams()

let {productData,loading,error} = useSelector((store)=>(store.ItemsManager))

let dispatch = useDispatch()


useEffect(()=>{
   GetProductbyId(dispatch,Params_cate)
},[dispatch,Params_cate])



  return (
    <Box p='5px' pt={{base:'150px',md:'180px'}} position='relative' mb='20px'>
       <Text textAlign='left' p='5px' pl='15px'>Filter</Text>
    <Flex m='auto' gap='20px' flexDirection={{base:'column',md:'row'}} >
       <Box w={{base:'100%',md:'25%'}}>
       
   <Accordion allowMultiple>
   <AccordionItem>
       
       <AccordionButton justifyContent='space-between' >
         <Text>Sort</Text>
         <AccordionIcon />
       </AccordionButton>
    
     <AccordionPanel  textAlign='start'>
     <Checkbox >
      Price High To Low
       </Checkbox>
       <Checkbox >
      Price Low To Hign
       </Checkbox>
     </AccordionPanel>
         </AccordionItem>
         

       <AccordionItem>
       
         <AccordionButton justifyContent='space-between' >
           <Text>Price</Text>
           <AccordionIcon />
         </AccordionButton>
      
       <AccordionPanel pb={4} textAlign='start'>
          
        <Checkbox >
         Under INR 5000
       </Checkbox>
       <Checkbox >
       Under INR 3500 - INR 5000
       </Checkbox>
       <Checkbox >
       Under INR 2000 -INR 3500
       </Checkbox>
       <Checkbox>
       Under INR 2000
       </Checkbox>
     
       </AccordionPanel>
           </AccordionItem>
   
         <AccordionItem>
       
       <AccordionButton justifyContent='space-between' >
         <Text>Customer Ratings</Text>
         <AccordionIcon />
       </AccordionButton>
    
     <AccordionPanel pb={4} textAlign='start' >
        
       <Checkbox>
      <Flex gap='5px' alignItems='center'> {four}4 & up</Flex>
     </Checkbox><br />
     <Checkbox >
      <Flex gap='5px' alignItems='center'> {three}  3 & up</Flex>
     </Checkbox><br />
     <Checkbox >
      <Flex gap='5px' alignItems='center' >{two}  2 & up</Flex>
     </Checkbox><br />
     <Checkbox >
      <Flex gap='5px' alignItems='center'>{one}  1 & up</Flex>
     </Checkbox><br />
     </AccordionPanel>
         </AccordionItem>
               </Accordion>
               
               </Box>
   
            <Box w={{base:'100%',md:"95%"}}>

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
