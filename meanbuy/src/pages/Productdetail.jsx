import {Box,Image,Stack,ListItem,UnorderedList, Grid,TabPanel,Tab,TabList,TabPanels,Tabs,
    Flex,Heading,Badge,Text,Divider,Radio,RadioGroup,Button,useToast
} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import {GetProductbyId} from "../Redux/ProductPg.Redux/Items.action.js"
import { BiRupee } from "react-icons/bi";
import { useState,useEffect} from "react"
import { GrFacebookOption,GrTwitter,GrPinterest,GrLinkedin,GrSnapchat } from "react-icons/gr";
import { FcCheckmark } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import {FcDataProtection,FcShipped,FcMoneyTransfer,FcAssistant} from "react-icons/fc";
import {useParams,Link,useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import {AddtoCart} from '../Redux/Cart.Redux/cart.action.js';




const ProductDetail = () => {
const [tabIndex, setTabIndex] = useState(0)
const toast = useToast()
const param = useParams()
const dispatch = useDispatch()
const Navigate = useNavigate()


const addToCart = (item) => {
  let token = localStorage.getItem('token')
  if(token ==='' || token ===null || token === undefined ){
    toast({
      title: 'Please LogIn First !',
      position: 'top',
      isClosable: true,
    })
    return Navigate('/login')
  }
  dispatch(AddtoCart(item))

}

const handelBuy = (item) => {
  console.log(item)
}

let {error,loading,productData} = useSelector((store)=>store.ItemsManager)


 useEffect(()=>{
  dispatch(GetProductbyId(param.id))  
 },[param.id])



    return(

         <Box pt='180px' fontSize='14px' w={{base:'98%',md:'90%'}} m='auto' mb='50px' >
           {
                 productData && productData.map((element)=>{
                    return(
                    <Flex key={element._id}  gap='20px' direction={{base:'column',md:'row'}} >
                    <Box m='auto' mt='0px' w={{base:'90%',md:'60%'}}   position={{base:'static',md:'sticky'}} top='150px'>
                    <Flex alignItems='center'   fontSize={{base:'sm',md:'md'}}> 
                    <Text color='#0a66c2' className="navigate" fontSize={{base:'sm',md:'md'}} mb='30px'>Home {`>`} Categories {`>`}</Text>
                    <Link to={`/products/categories/${element.categories}`}><Text fontSize={{base:'sm',md:'md'}} mb='30px' color='orange'>{element.categories} {`>`}</Text></Link>
                    <Text mb='30px' color='orange' fontSize={{base:'sm',md:'xl'}}>{element.brand}</Text>
                    </Flex>

                    <Image src={element.img1} m='auto' w='90%' alt={element.title} ></Image>
                    </Box>
  
                    {/* <Box w='90%'m='auto' textAlign='left' h={{base:'100%',md:'500px'}} overflowY={{base:'none',md:'auto'}}> */}
         <Box w='90%'m='auto' textAlign='left' >
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
                    <Text>Availability:{element.product_quantity<=0?<Text as='b' color='red' fontSize='2xl'> Out Of Stock</Text>:element.product_quantity>=5?<Text fontSize='15px' as='b' color='green'> In Stock</Text>:<Text as='b' color='red' fontSize='20px'> Hurryup only {element.product_quantity} left</Text>}
                    </Text>
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
                      
                      {element.product_quantity >=1?
                          <Flex color='black' gap='10px' justifyContent='center' mt='25px' mb='25px'>

                          <Button height='48px'  w='40%' border='1px' borderColor='orange.500' bg='white'onClick={()=>addToCart(element)}>
                            ADD TO CART 
                          </Button>
                          <Button w='40%' height='48px' colorScheme='orange' onClick={()=>handelBuy(element)}>
                            BUY NOW
                          </Button>
                       </Flex>:
                          <Flex gap='10px' mt='25px' mb='25px'>
                            <Button height='48px' bg='red.300' w='40%' border='1px' borderColor='orange.500' >
                             Notify Me
                           </Button>
                         </Flex>
                      }
                   
                       
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