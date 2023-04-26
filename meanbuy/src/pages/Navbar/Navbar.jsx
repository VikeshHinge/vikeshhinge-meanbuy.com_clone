import React,{useCallback, useContext, useEffect,useState} from "react";
import {Box,Flex,HStack,Text,Image,InputGroup,Input,InputRightElement,Button,Spacer,Divider} from "@chakra-ui/react"
import { Search2Icon,TriangleDownIcon,TriangleUpIcon } from '@chakra-ui/icons'
import Authcontext from "../../AuthContext/Authcontext";
import { IoIosCart } from "react-icons/io";
import { FaInstagramSquare,FaFacebook } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi2";
import CategoriesDrop from "../../Dropdown/Categories_drop";
import './navbar.css';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import Search from "./Search";
import { MoonIcon,SunIcon } from '@chakra-ui/icons';
import { GetCartData,GetCartNum} from "../../Redux/Cart.Redux/cart.action.js";


const Navbar2 = ({changeTheme,bg}) => {
  
    const [categories,setcategories] = useState(false)
    const [users,setUsers]=useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const {cart} = useSelector((store)=>store.cartManager)
 
    const handeldropdown = () => {
        setcategories(!categories)
    }
    
    const GotoCart = ()=>{    
     return Navigate('/cart')
    }

    let email= localStorage.getItem('user')||'';
    let local = location.pathname.split('/')
  

    useEffect(()=>{
      GetCartData(dispatch)
      setUsers(email)
    },[dispatch,users,email,location])
 
    return(
       <Box display={local.includes('admin')||local.includes('adminlogin')?'none':'block'} m='0px' position='fixed' w='100%' bg={bg?'white':'#2d3748'} color={bg?'black':'white'} zIndex='999' borderBottom='2px solid orange'>
         <Box bg='black' color='white'w='100%'>
            <Flex alignItems='center' justifyContent='center' gap='10px'>
               New Year Beast Offer on Watches  
               <Flex gap='5px'>
                <FaInstagramSquare color="#8a3ab9"/>
                <FaFacebook color="#3b5998"/>
               </Flex> 
            </Flex>
        </Box>
          <Flex className="navTop"> 
            <Box className="imgbox" >
                <Link to='/'><Image w='100%' src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png"></Image></Link>
            </Box>
            <Spacer  display={{base:"block",md:"block"}}/>

            {/*-------------- search ---------------------*/}
              <Search bg={bg}/>


            <Spacer  display={{base:"block",md:"block"}}/>
            <Flex alignItems='center'gap='20px' mr='10px'>
                <Box fontSize='12px' display={{base:"none",md:"block"}}>
                  <Flex gap='5px'>
                  <Link>Seller's Corner </Link>|
                  <Link> Feedback </Link>|
                  <Link> Delivery Info </Link>| 
                  <Text cursor='pointer' onClick={changeTheme} >{bg?<SunIcon color='orange' boxSize={6}/>:<MoonIcon color='orange' boxSize={6}/>}</Text>
                  </Flex>
                </Box>
                <Box fontSize={{base:"10px",md:"13px"}} p={{base:"5px",md:"0px"}}>

{/*---------------------- user login/logout ------------------------ */}
                    {email?<Flex gap='3px'justifyContent='end' p='5px' alignItems='center' fontWeight='bold'><Text fontSize='18px' color='orange' >{users}</Text><Link to='/userprofile'><HiUserCircle color='#f38f2f' size='25px'/></Link></Flex>:<><Link to='/login'>Login</Link>/ <Link to='/signup'>Signup</Link></>}
{/* ------------------cartside drower --------------*/}
                    <Flex ml='10px' >
                      <Text fontWeight='bold' mr='10px' >WELCOME</Text>
                      <IoIosCart color="F38F2F" size='30px'  onClick={GotoCart}  />
                      <Text borderRadius='10px' bg='orange' as='b' fontSize='md' h='fit-content' >{cart.length}</Text>
                     </Flex>
                </Box>
               
             </Flex>
 
        
          </Flex>

          <Box bg='orange' p='10px' display={{base:'block',md:"none"}} >
          <InputGroup size='sm' w="90%"  m='auto'>
             <Input placeholder='Search' size='sm' w='300px' m='auto' bg='white' borderRadius='20px'/>
             <InputRightElement width='4.5rem'>
               <Button  bg="none" >
                 <Search2Icon />
               </Button>
             </InputRightElement>
          </InputGroup>
          </Box>
         
          <HStack w='fit-content' onClick={handeldropdown} className="navop" cursor='pointer'>
          <Text >Categories {categories===false?<TriangleDownIcon/>:<><TriangleUpIcon/> <CategoriesDrop /></>}</Text>
           <Text className='blinktext'>flash Sale</Text>
          <Text display={{base:'none',md:'block'}} >Best Deals</Text>
          <Text display={{base:'none',md:'block'}} >Shop by Brand</Text>
          <Text display={{base:'none',md:'block'}} >Trending</Text>
          <Text>New Arrivals</Text>
         </HStack>
         <Divider/>
       </Box>
    )
}

export default Navbar2;