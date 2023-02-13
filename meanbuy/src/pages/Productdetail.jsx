import {Box,Image,Stack,ListItem,UnorderedList, Grid,TabPanel,Tab,TabList,TabPanels,Tabs,
    Flex,Heading,Badge,Text,Divider,Radio,RadioGroup,Button
} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import {GetproductbyID} from "../Axios/Axios"
import { BiRupee } from "react-icons/bi";
import { useState,useEffect,useRef } from "react"
import { GrFacebookOption,GrTwitter,GrPinterest,GrLinkedin,GrSnapchat } from "react-icons/gr";
import { FcCheckmark } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import {FcDataProtection,FcShipped,FcMoneyTransfer,FcAssistant} from "react-icons/fc";
import {useParams,Link} from "react-router-dom";



const ProductDetail = () => {

const [Item,setItem] = useState([])
const [tabIndex, setTabIndex] = useState(0)
// const bg = colors[tabIndex]
const param = useParams()
//console.log(param.id,"param")

let imgproduct = useRef(null)

let productid = (id)=> {
   // console.log("id",id)
 GetproductbyID(id).then((res)=>setItem(res.data))
}
 useEffect(()=>{
  productid(param.id)   //******************id put here */
 },[])


let Addtocart = (id) => {
// let Array = localStorage.getItem("cartdata") || []
// Array.push(id)
// let zip = localStorage.setItem("cartdata",JSON.stringify(Array))
let DataStore=JSON.parse(localStorage.getItem("CartData"))||[];
DataStore.push(id)
localStorage.setItem("CartData",JSON.stringify(DataStore))
}


    return(
         <Box pt='180px' fontSize='14px' w='99%' m='auto' mb='50px'>
         
           {
               Item && Item.map((element,i)=>{
                    return(
                    <Flex key={i}  gap='20px' direction={{base:'column',md:'row'}} >
                    <Box m='auto' mt='0px' w={{base:'90%',md:'60%'}}   >

                    <Flex alignItems='center'  > 
                    <Text fontSize={{base:'sm',md:'xl'}} mb='30px'>Home {`>`} Categories {`>`}</Text>
                    <Link to={`/products/categories/${element.categories}`}><Text fontSize={{base:'sm',md:'xl'}} mb='30px' color='orange'>{element.categories} {`>`}</Text></Link>
                    <Text mb='30px' color='orange' fontSize={{base:'sm',md:'xl'}}>{element.brand}</Text>
                    </Flex>

                    <Image ref={imgproduct} src={element.img1} m='auto' w='90%' ></Image>
                    </Box>
  
                    <Box w='90%'m='auto' textAlign='left' h={{base:'100%',md:'500px'}} overflowY={{base:'none',md:'auto'}}>

                    <Heading as='h3' mt='10px' mb='10px' size='lg'>{element.title}</Heading>

                    <Flex h='30px' w='100%'  gap='5px' alignItems='center'>
                    <Badge borderRadius='20px' px='2' variant='solid' colorScheme='green' pl='10px' pr='10px' mt='5px' mb='5px'>
                    {element.rating}/5<StarIcon />
                    </Badge>
                    <Link fontSize='xs' color='#dd6b20'>WRITE A REVIEW </Link>
                     <GrFacebookOption color=" #3b5998"/>
                     <GrTwitter  size='18px' color="#00acee"/>
                     <GrPinterest size='18px' color="#E60023"/>
                     <GrLinkedin size='18px' color="#0A66C2"/>
                     <GrSnapchat size='18px' color="#FFFC00"/>
                     <BsWhatsapp  size='18px'color="#128C7E "/>
                    </Flex>

                    <Flex  alignItems='baseline' mt='10px'mb='10px'  >
                        <BiRupee size='35px' color='#dd6b20' /><Text color='#dd6b20' as='b' fontSize='30px'>{element.price}.00 </Text>
                        <Text as='s' color='gray'>₹{Math.floor(element.price*element.discount/100)+element.price}</Text>

                        <Text ml='10px' fontSize='sm' color='#14DE2B'>UP TO {element.discount}% OFF</Text>
                    </Flex>

                   <Box lineHeight='25px'>
                    <Text>Save Up to {' '}<Link color='#dd6b20'>₹{Math.floor(element.price*element.discount/100)+element.price-element.price}</Link></Text> 
                    <Link color='#14DE2B'><Flex><FcCheckmark/>CASH ON DELIVERY available on orders between ₹999 and ₹10,000</Flex></Link>
                    <Link><Flex><FcCheckmark/>Get up to ₹500 OFF with coupon code <Text as='b'>PREPAID</Text></Flex></Link>
                    <Link><Flex><FcCheckmark/>3 interest free payments with  ⓘ</Flex></Link>
                    <Text>Availability:<Text as='b' color='green'> In Stock</Text></Text>
                    </Box> 
                    
                    
                    <Divider borderColor = 'orange.500' w='90%' mt='20px' />
                    <Grid templateColumns={{base:'repeat(2, 1fr)',md:'repeat(4, 1fr)'}} mt='20px'  mb='20px'>
                        
                       <Box w='50%' >
                        <FcShipped  size='50px'/>
                        <Text>Guaranteed Delivery in 24 days T&C Apply</Text>
                       </Box>
                       <Box w='50%'  >
                       <FcMoneyTransfer   size='50px'/>
                       <Text>COD available ₹999 and ₹10,000</Text>
                       </Box>
                       <Box w='50%'  >
                        <FcAssistant   size='50px'/>
                        <Text>10 Days Replacement</Text>
                       </Box>
                       <Box w='50%'  >
                        <FcDataProtection   size='50px'/>
                        <Text>6 months Warranty T&C Apply</Text>
                       </Box>
                    </Grid>

                    <Divider   borderColor = 'orange.500' w='90%' mb='20px' />
               

                    <Link>Wait & Save</Link>
                       <Text w='90%'>Choose from any of the Delivery Dates below and Save Big! In general,
                         a later Delivery Date means greater Savings!</Text>
                       <Text as='b'> Please choose your preferences</Text>
                       <RadioGroup m='20px' w='70%' display='none'>

                         <Stack direction='row'>
                           <Radio value='1'>Black</Radio>
                           <Radio value='2'>White</Radio>
                           <Radio value='3'>Red</Radio>
                           <Radio value='4'>Blue</Radio>
                           <Radio value='5'>Yellow</Radio>
                         </Stack>
                       </RadioGroup>
                      
                       <Flex gap='10px' justifyContent='center' mt='25px' mb='25px'>

                            <Button height='48px'  w='40%' border='1px' borderColor='orange.500' bg='white'onClick={()=>Addtocart(element)}>
                              ADD TO CART 
                            </Button>
                            <Button w='40%' height='48px' colorScheme='orange'>
                              BUY NOW
                            </Button>
                       </Flex>
                       
                       <Tabs onChange={(index) => setTabIndex(index)} mb='100px'>
                   
                         <TabList  >
                        
                          <Tab  fontSize={{base:'sm',md:'md'}}  fontWeight='bold' >Product Description</Tab>
                           <Tab  fontSize={{base:'sm',md:'md'}}  fontWeight='bold'> Product Features</Tab>
                           <Tab fontSize={{base:'sm',md:'md'}}  fontWeight='bold' >Shipping & Return Details</Tab>
                          
                         </TabList >
                         <TabPanels  w='100%' >
                         <TabPanel>
                         <Heading mb='10px' fontSize={{base:'md',md:'lg'}} >{element.title}</Heading>  
                        <UnorderedList fontSize={{base:'sm',md:'md'}} w='80%'> 
                        {element.description !== "" && element.description.split("\n").map((l,i)=> <ListItem fontWeight='bold' key ={i} >{l}</ListItem>)}  
                        </UnorderedList> 
                           </TabPanel>
                           <TabPanel>
                           <Heading mb='10px' fontSize={{base:'md',md:'lg'}} >Product Details</Heading>
                        <UnorderedList> 
                        {element.details !== "" && element.details.split("\n").map((l,i)=> <ListItem fontWeight='bold' key ={i} >{l}</ListItem>)}  
                        </UnorderedList> 
                            </TabPanel>
                           <TabPanel>Red, yellow and blue.</TabPanel>
                           </TabPanels>
                           </Tabs>
                         </Box>

                   </Flex>
                    )
                })
            } 
         </Box>
    )
}

export default ProductDetail;