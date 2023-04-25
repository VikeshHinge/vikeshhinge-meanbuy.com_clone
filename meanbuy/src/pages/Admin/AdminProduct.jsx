import React, { useEffect, useState,useCallback } from 'react';
import { Box,Flex,Image,Text,Button,Spinner} from '@chakra-ui/react';
import AdminSidebar from './AdminSidebar';
import AddProduct from './Comp/Addproduct';
import { useDispatch,useSelector } from 'react-redux';
import { GetProducts } from '../../Redux/Products.Redux/product.action';
import AdminSearch from './Comp/AdminSearch';
import { GetSearchData } from '../../Redux/Products.Redux/productAPI';
import { UpdateProduct } from '../../Redux/Products.Redux/product.action';


const AdminProduct = () => {
const [product,setProduct] = useState([])
const [searchData,setSearchData] = useState([])
const [searchKey,setSearchkey] = useState('')


const dispatch = useDispatch()
const {productData,loading,error} = useSelector((store)=>(store.productManager))
//console.log(productData)

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
    setProduct([])
    optimisation(value)
  }


  const GotoSearchProduct = (item) => {
    setProduct([item])
    setSearchkey('')
    setSearchData([])
  }

  const handelchange = (e) => {
    let {name,value,type} = e.target;
    let valpro = type === "number" ? Number(value) : value;
    setProduct([{...product[0],[name]:valpro}])
 }

 const handelPostUpdate = (product) => {
   dispatch(UpdateProduct(product))
 }

 const handelCancel = () => {
  setProduct([])
 }

useEffect(()=>{
    GetProducts(dispatch)
},[dispatch])

  let arr = [1,2,3,4,5,6,7,8,9,10];
  
  if(error){
    return(
      <Box>
        {error}
      </Box>
    )
  }

  return (
        <Flex gap='20px' p='10px' bg='#1a202c' color='white' m='auto'>
            <AdminSidebar/>
           <Flex w='80%' gap='10px' m='auto'>

             <Box w='30%'>
              {/* __________________Add product ______________________ */}
                <AddProduct/> 
             </Box>

              <Box w='35%' p='10px' >
              <Text bg='orange' fontSize='lg'>All Product</Text>
                {
                  loading && arr.map((ele)=>(
                   <Box key={ele} w='350px' h='60px' border='1px solid'>
                     <Text display='block' m='auto'>Loading ...</Text>
                     <Spinner />
                   </Box>
                  ))
                }
                 {
                productData && productData.map((ele)=>(
         
                    <Flex key={ele._id} textAlign='left' m='5px 0 5px 0' position='relative'>
                    <Image w='20%' src={ele.img1} alt={ele.title} borderRadius='5px 0 0 5px'/>
                    <Box p='3px' border='1px solid' w='100%' borderRadius='0 5px 5px 0'>
                      <Text>{ele.title}</Text>
                      <Flex  justifyContent='space-between' gap='10px' alignItems='center'>
                        <Box>
                         <Text>Brand: {ele.brand}</Text>
                         <Text>Quantity: {ele.product_quantity}</Text>
                        </Box>
                         <Button bg='#f50269' variant='solid' size='sm' onClick={()=>GotoSearchProduct(ele)} >Update</Button>
                      </Flex>
                      {ele.product_quantity<=10 && <Box position='relative' >  <Text as='b' color='red'>Out Of Stock Soon</Text> </Box>}
                    </Box>
                    </Flex>
 
                ))
               }
             </Box>
               
               <Box p='10px'w='35%' position='sticky' top='10px' h='fit-content'>
                   <Text bg='orange' fontSize='lg'>{product.length>0?"Update Product":"Search"}</Text>
                    <AdminSearch
                    GotoSearchProduct={GotoSearchProduct}
                    handelvalue={handelvalue}
                    handelchange={handelchange}
                    searchData={searchData}
                    searchKey={searchKey}
                    product={product}
                    handelPostUpdate={handelPostUpdate}
                    handelCancel={handelCancel}
                    />
              </Box>
           </Flex>
        </Flex>
  )
}

export default AdminProduct
