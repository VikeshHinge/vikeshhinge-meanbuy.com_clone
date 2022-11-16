import {Box,VStack,Image,Stack,ListItem,UnorderedList, Grid,Select,GridItem,TabPanel,Tab,TabList,TabPanels,Tabs,
    Container,Flex,Spacer,Heading,Badge,Link,Text,Divider, HStack,Radio,RadioGroup,Button
} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import {GetproductbyID} from "../Axios/Axios"
import { BiRupee } from "react-icons/bi";
import { useState,useEffect } from "react"
import { GrFacebookOption,GrTwitter,GrPinterest,GrLinkedin,GrSnapchat } from "react-icons/gr";
import { FcCheckmark } from "react-icons/fc";
import { BsWhatsapp,BsSnapchat } from "react-icons/bs";
import {BsCashCoin, } from "react-icons/bi";
import {FcDataProtection,FcShipped,FcMoneyTransfer,FcAssistant} from "react-icons/fc";
import {useParams} from "react-router-dom"




const ProductDetail = () => {
const [Item,setItem] = useState([])
const [tabIndex, setTabIndex] = useState(0)
// const bg = colors[tabIndex]
const param = useParams()
//console.log(param.id,"param")


let productid = (id)=> {
   // console.log("id",id)
   let x = GetproductbyID(id).then((res)=>setItem(res.data))
 
}
 useEffect(()=>{
  productid(param.id)   //******************id put here */
 },[])

    return(
         <Box pt='180px' fontSize='14px' w='99%' m='auto' mb='50px'>
           {
               Item && Item.map((element,i)=>{
                    return(
                    <Flex key={i}  gap='20px' direction={{base:'column',md:'row'}} >
                    <Box m='auto' mt='0px' w={{base:'90%',md:'60%'}}   >
                    <Image src={element.img1} m='auto' w='90%' ></Image>
                    </Box>
  
                    <Box w='90%'m='auto' textAlign='left' h='600px' overflowY='auto'>
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
                    <Flex  alignItems='baseline' mt='10px'mb='10px' >
                        <BiRupee size='35px' color='#dd6b20'/><Text color='#dd6b20' as='b' fontSize='30px'>{element.price}.00 </Text>
                        <Text as='s'>₹ {Math.floor(element.price*element.discount/100)+element.price}</Text>
                        <Text ml='10px' fontSize='sm' color='#14DE2B'>UP TO {element.discount}% OFF</Text>
                    </Flex>
                    <Box lineHeight='25px'>
                    <Text>Save Up to <Text color='#dd6b20'>₹{Math.floor(element.price*element.discount/100)+element.price-element.price}</Text></Text>
                    <Link color='#14DE2B'><Flex><FcCheckmark/>CASH ON DELIVERY available on orders between ₹999 and ₹10,000</Flex></Link>
                    <Link><Flex><FcCheckmark/>Get up to ₹500 OFF with coupon code <Text as='b'>PREPAID</Text></Flex></Link>
                    <Link><Flex><FcCheckmark/>3 interest free payments with  ⓘ</Flex></Link>
                    <Text>Availability:<Text as='b' color='green'> In Stock</Text></Text>
                    </Box>
                    
                    
                    <Divider borderColor = 'orange.500' w='90%' mt='20px' />
                    <Flex gap={10} fontSize='10px'  w='60%' mt='20px' mb='20px'>
                        
                       <Box w='25%' textAlign='center'>
                        <FcShipped  size='50px'/>
                        <Text>Guaranteed Delivery in 24 days T&C Apply</Text>
                       </Box>
                       <Box w='25%' textAlign='center' >
                       <FcMoneyTransfer   size='50px'/>
                       <Text>COD available ₹999 and ₹10,000</Text>
                       </Box>
                       <Box w='25%' textAlign='center' >
                        <FcAssistant   size='50px'/>
                        <Text>10 Days Replacement</Text>
                       </Box>
                       <Box w='25%' textAlign='center' >
                        <FcDataProtection   size='50px'/>
                        <Text>6 months Warranty T&C Apply</Text>
                       </Box>
                    </Flex>
                    <Divider   borderColor = 'orange.500' w='90%' mb='20px' />
               

                    <Link>Wait & Save</Link>
                       <Text w='90%'>Choose from any of the Delivery Dates below and Save Big! In general,
                         a later Delivery Date means greater Savings!</Text>
                       <Text as='b'> Please choose your preferences</Text>
                       <RadioGroup m='20px' >
                         <Stack direction='row'>
                           <Radio value='1'>Black</Radio>
                           <Radio value='2'>White</Radio>
                           <Radio value='3'>Red</Radio>
                           <Radio value='4'>Blue</Radio>
                           <Radio value='5'>Yellow</Radio>
                         </Stack>
                       </RadioGroup>
                      
                       <Flex gap='10px' justifyContent='center' mt='25px' mb='25px'>
                            <Button height='48px'  w='40%' border='1px' borderColor='orange.500' bg='white'>
                              ADD TO CART
                            </Button>
                            <Button w='40%' height='48px' colorScheme='orange'>
                              BUY NOW
                            </Button>
                       </Flex>
                       
                       <Tabs onChange={(index) => setTabIndex(index)} >
                   
                         <TabList w='100%'>
                        
                          <Tab>Product Description</Tab>
                           <Tab> Product Features</Tab>
                           <Tab>Shipping & Return Details</Tab>
                          
                         </TabList >
                         <TabPanels p='2rem' w='100'>
                         <TabPanel>
                         <Heading mb='20px'>{element.title}</Heading>  
                        <UnorderedList fontSize='16px' w='80%'> 
                        {element.description !== "" && element.description.split(":").map((l,i)=> <ListItem fontWeight='bold' key ={i} >{l}</ListItem>)}  
                        </UnorderedList> 
                           </TabPanel>
                           <TabPanel>
                           <Heading mb='20px'>Product Details</Heading>
                        <UnorderedList> 
                        {element.details.split(":").map((l,i)=> <ListItem key ={i} >{l}</ListItem>)}  
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