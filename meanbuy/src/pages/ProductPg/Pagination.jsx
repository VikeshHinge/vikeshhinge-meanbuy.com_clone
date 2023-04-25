import React,{useEffect, useState} from 'react';
import {Image,Heading,Text,Box,Stack,Flex, Button} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({Total,postPerPage,setCurrPage,currpage}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const initialstate = searchParams.getAll('page')
  const [page,setPage] = useState(initialstate || [])

let arr = []

for(let i=0; i<Math.ceil(Total/postPerPage); i++){
  arr.push(i+1)
}
//console.log(searchParams)

const handelPage = (num) => {
  if(!page.includes(num)){
     setPage([num])
     setCurrPage(num)
  }
  //setCurrPage(num)
}
const handelAction = (num)=>{
    // setCurrPage((prev)=>prev+num)
  if(page.length>0){
    setCurrPage((prev)=>prev+num)
   let Prev = parseInt(page);
    setPage([Prev+num])

  }else{
    setCurrPage((prev)=>prev+num)
   let Prev = parseInt(page);
    setPage([Prev+num])
  }
}
// let page=[]
// useEffect(()=>{
//   const paraam ={
//   page
//   }
//     setSearchParams(paraam)
// },[currpage])

  return (
    <Box w='fit-content' cursor='default' fontWeight='bold'>
    { arr && arr.length>0 && 
         <Flex gap='5px' alignItems='center' >
        <Box border='2px solid orange' w='50px'> <button disabled={page.includes(1)||currpage===1}  onClick={()=>handelAction(-1)} >Prev</button></Box>
          {arr && arr.map((ele)=>(
             <Box key={ele} border='2px solid orange' bg={page.includes(ele)?'orange':'orange.200'} w='25px'  onClick={()=>handelPage(ele)} >
               {ele}
            </Box>
         
          ))}
          <Box border='2px solid orange' w='50px'> <button disabled={page.includes(arr.length)||currpage===arr.length} onClick={()=>handelAction(1)} bg='orange'>Next</button></Box>
         
         </Flex>
    }
    </Box>
  )
}

export default Pagination
