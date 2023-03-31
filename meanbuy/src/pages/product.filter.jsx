import React,{useState,useEffect} from 'react';

import { Box,Text,Flex, Accordion,AccordionItem,AccordionButton, AccordionPanel, AccordionIcon,Checkbox} from '@chakra-ui/react'
import {one,two,three,four} from '../Componunt/objects';

import {useSearchParams} from 'react-router-dom'

const Filtersidebar = ({Brand}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const initialstate = searchParams.getAll('brand')
    const [brand,setbrand] = useState( initialstate || [])
    
    const handelbrand=(item)=>{
    let newData = [...brand]
        if(newData.includes(item)){
            newData.splice(newData.indexOf(item),1)
        }
        else{
           newData.push(item)
        }
      setbrand(newData)
    }

    useEffect(()=>{
      const paraam ={
        brand
      }
        setSearchParams(paraam)
    },[brand])
  
  return (
    <Box w={{base:'100%',md:'25%'}}>
       
   <Accordion defaultIndex={[0,1,2,3]} allowMultiple>
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
         
    {/* -------------------Brand-------------------- */}
    <AccordionItem>
       <AccordionButton justifyContent='space-between' >
         <Text>Brand</Text>
         <AccordionIcon />
       </AccordionButton>
         {
          Brand && Brand.map((ele,i)=>(
              <AccordionPanel key={i} pb={0} textAlign='start'>
              <Checkbox value={ele} onChange={()=>handelbrand(ele)} isChecked={brand.includes(ele)}   >
               {ele}
                </Checkbox>
              </AccordionPanel>
            )
          )
         }
         </AccordionItem>
       {/* --------------------filter Price-------------- */}

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
  )
}

export default Filtersidebar
