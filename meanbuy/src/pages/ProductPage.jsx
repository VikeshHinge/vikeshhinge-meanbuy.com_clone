
import React,{useState,useEffect} from 'react';

import { Box,Image,SimpleGrid,Text,Flex, Accordion,AccordionItem,AccordionButton, AccordionPanel, AccordionIcon,Checkbox, Divider, Spacer,
} from '@chakra-ui/react'

import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
import { Link,useParams } from 'react-router-dom';
import { BiRupee } from "react-icons/bi";
import { GetproductbyCategory } from '../Axios/Axios';


const ProductPage = () => {
     const [brand,setBrand] = useState([])
    const [Product,setProduct] = useState([])
    const [display,setdisplay]=useState(false)


let four =[<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStar size='13px'/>]
let five=[<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill  size='13px'/>]
let fournhalf = [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarHalf size='13px'/>]
let two= [<BsStarFill  size='13px'/>,<BsStarFill  size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let one= [<BsStarFill  size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let three = [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let threenhalf= [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarHalf size='13px'/>,<BsStar size='13px'/>]

let Params_cate = useParams()


const setbrands = (data) => {
  let obj = {}
  let arr = []
  data.map(ele => {
    if(obj[ele.brand]===undefined){
      obj[ele.brand]=1
      arr.push(ele.brand)
    }
    else{
      obj[ele.brand]++
    }
  })
  setBrand(arr)
}




const getproducts =async(categories) => {

   let data =await GetproductbyCategory(categories)
   setProduct(data)
   setbrands(data)
}

useEffect (() => {
  getproducts(Params_cate.cate)
},[Params_cate])


const filterRating = (e,n) => {
   if(e.target.checked){
    let newdata = Product.filter((ele)=> ele.rating >= n)
    setProduct(newdata)
   }else if(!e.target.checked){
    getproducts(Params_cate.cate)
   }
   setdisplay(false)
}

const PrintsRating = (e,str)=> {

    if(e.target.checked){
        let newdata = Product.filter((ele)=> ele.brand === str.ele)
        if(newdata.length>0){
          setProduct(newdata)
        }
       }else if(!e.target.checked){
        getproducts(Params_cate.cate)
       }
       setdisplay(false)
}

const filterprice = (e,num1=0,num2=5000)=> {
  if(e.target.checked){
    let newdata = Product.filter((ele)=> (ele.price >= num1 && ele.price <= num2))
    if(newdata.length>0){
      setProduct(newdata)
    }
   }else if(!e.target.checked){
    getproducts(Params_cate.cate)
   }
   setdisplay(false)
}

const handeldisplay = () => {
    // setdisplay(!display)
}



  return (
    <Box p='5px' pt={{base:'150px',md:'180px'}} position='relative' mb='20px' >
       <Text textAlign='left' p='5px' pl='15px'>Filter</Text>
    <Flex m='auto' gap='20px' flexDirection={{base:'column',md:'row'}}>
       <Box w={{base:'100%',md:'25%'}} >
       
   <Accordion allowMultiple>
       <AccordionItem>
       
         <AccordionButton justifyContent='space-between' >
           <Text>Price</Text>
           <AccordionIcon />
         </AccordionButton>
      
       <AccordionPanel pb={4} textAlign='start'>
          
        <Checkbox onChange={(e)=>filterprice(e,0,5000)}>
         Under INR 5000
       </Checkbox>
       <Checkbox onChange={(e)=>filterprice(e,3500,5000)}>
       Under INR 3500 - INR 5000
       </Checkbox>
       <Checkbox onChange={(e)=>filterprice(e,2000,3500)}>
       Under INR 2000 -INR 3500
       </Checkbox>
       <Checkbox onChange={(e)=>filterprice(e,0,2000)}>
       Under INR 2000
       </Checkbox>
     
       </AccordionPanel>
           </AccordionItem>
   
           <AccordionItem>
       
       <AccordionButton justifyContent='space-between' >
         <Text>Brands</Text>
         <AccordionIcon />
       </AccordionButton>
    
     <AccordionPanel  textAlign='start'>
     {brand && brand.map((ele,i)=>   (<Box>
      <Checkbox key={i} onChange={(e)=> PrintsRating(e,{ele}) }>
     {ele}
     </Checkbox>
     </Box>)
     )}
     </AccordionPanel>
         </AccordionItem>
         
         <AccordionItem>
       
       <AccordionButton justifyContent='space-between' >
         <Text>Customer Ratings</Text>
         <AccordionIcon />
       </AccordionButton>
    
     <AccordionPanel pb={4} textAlign='start' >
        
       <Checkbox onChange={(e)=> filterRating(e,4) }>
      <Flex gap='5px' alignItems='center'> {four}4 & up</Flex>
     </Checkbox><br />
     <Checkbox onChange={(e)=> filterRating(e,3) }>
      <Flex gap='5px' alignItems='center'> {three}  3 & up</Flex>
     </Checkbox><br />
     <Checkbox onChange={(e)=> filterRating(e,2) }>
      <Flex gap='5px' alignItems='center' >{two}  2 & up</Flex>
     </Checkbox><br />
     <Checkbox onChange={(e)=> filterRating(e,1) }>
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
               { Product && Product.map((ele)=>(

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
