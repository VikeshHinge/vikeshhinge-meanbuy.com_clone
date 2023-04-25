import React,{useState,useEffect} from 'react';

import { Box,Text,Flex, Accordion,AccordionItem,AccordionButton, AccordionPanel, AccordionIcon,Checkbox} from '@chakra-ui/react'
import {one,two,three,four} from '../../Componunt/objects';
import {useSearchParams} from 'react-router-dom';

const Filtersidebar = ({Brand}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const initialstate = searchParams.getAll('brand')
    const initialprice = searchParams.getAll('price')
    const initialrating = searchParams.getAll('rating')
    const initialsorting = searchParams.getAll('sort')
    const [brand,setbrand] = useState( initialstate || [])
    const [price,setprice] = useState(initialprice || [])
    const [rating,setrating] = useState(initialrating || [])
    const [sort,setSort] = useState(initialsorting || [])
    
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

    const handelprice = (item) => {
     
      let data = item.split('-')
      if(price.includes(data[0])){
        setprice([])
      }else{
        setprice(data)
      }
    }

    const handelRatings = (item) => {
     if(rating.includes(item)){
      setrating([])
     }else{
      let arr = [item]
      setrating(arr)
     }
    }

    const handelsorting = (item) => {
      //console.log(item)
      if(sort.includes(item)){
        setSort([])
      }else{
        setSort([item])
      }
    }



    useEffect(()=>{
      const paraam ={
        brand,
        price,
        rating,
        sort
      }
        setSearchParams(paraam)
    },[brand,price,rating,sort])
  


  return (
    <Box w={{base:'100%',md:'28%'}} h='fit-content' position={{base:'static',md:'sticky'}} top='10px' >

{/* price --------range---- */}
      {/* <Pricerange/> */}
      <Text textAlign='left' p='5px' pl='15px' border='1px solid gray' borderBottom='none' >Filter</Text>
   <Accordion defaultIndex={[0,1,2,3]} allowMultiple border='1px solid gray' >
   <AccordionItem>
       
       <AccordionButton justifyContent='space-between'>
         <Text>Sort</Text>
         <AccordionIcon />
       </AccordionButton>
    
     <AccordionPanel  textAlign='start'  >
     <Checkbox onChange={()=>handelsorting('hightolow')} isChecked={sort.includes('hightolow')}>
      Price High To Low
       </Checkbox>
       <Checkbox onChange={()=>handelsorting('lowtohigh')} isChecked={sort.includes('lowtohigh')}>
      Price Low To Hign
       </Checkbox>
     </AccordionPanel>
        </AccordionItem>
         
    {/* -------------------Brand-------------------- */}
    <AccordionItem >
       <AccordionButton justifyContent='space-between' >
         <Text>Brand</Text>
         <AccordionIcon />
       </AccordionButton>
         {
          Brand && Brand.map((ele)=>(
              <AccordionPanel key={ele} pb={0} textAlign='start'>
              <Checkbox value={ele} onChange={()=>handelbrand(ele)} isChecked={brand.includes(ele)}   >
               {ele}
                </Checkbox>
              </AccordionPanel>
            )
          )
         }
         </AccordionItem>
       {/* --------------------filter Price-------------- */}

       <AccordionItem >
    
         <AccordionButton justifyContent='space-between' >
           <Text>Price</Text>
           <AccordionIcon />
         </AccordionButton>
      
       <AccordionPanel pb={4} textAlign='start'>
          
        <Checkbox  onChange={()=>handelprice('5001-50000')} isChecked={price.includes('5001')}>
        Over INR 5000
       </Checkbox>
       <Checkbox onChange={()=>handelprice('3501-5000')} isChecked={price.includes('3501')}>
       Under INR 3500 - INR 5000
       </Checkbox>
       <Checkbox onChange={()=>handelprice('2001-3500')} isChecked={price.includes('2001')}>
       Under INR 2000 -INR 3500
       </Checkbox>
       <Checkbox onChange={()=>handelprice('0-2000')} isChecked={price.includes('2000')}>
       Under INR 2000
       </Checkbox>
     
       </AccordionPanel>
           </AccordionItem>
   
         <AccordionItem  >
       
       <AccordionButton justifyContent='space-between' >
         <Text>Customer Ratings</Text>
         <AccordionIcon />
       </AccordionButton>
    
     <AccordionPanel pb={4} textAlign='start' >
        
       <Checkbox onChange={()=>handelRatings(4)} isChecked={rating.includes(4)}>
      <Flex gap='5px' alignItems='center'> {four}4 & up</Flex>
     </Checkbox><br />
     <Checkbox onChange={()=>handelRatings(3)} isChecked={rating.includes(3)}>
      <Flex gap='5px' alignItems='center'> {three}  3 & up</Flex>
     </Checkbox><br />
     <Checkbox onChange={()=>handelRatings(2)} isChecked={rating.includes(2)}>
      <Flex gap='5px' alignItems='center' >{two}  2 & up</Flex>
     </Checkbox><br />
     <Checkbox onChange={()=>handelRatings(1)} isChecked={rating.includes(1)}>
      <Flex gap='5px' alignItems='center'>{one}  1 & up</Flex>
     </Checkbox><br />
     </AccordionPanel>
         </AccordionItem>
               </Accordion>
               
               </Box>
  )
}

export default Filtersidebar
