import React, { useEffect, useState } from 'react';
import { Box,Text,Flex,Image, SimpleGrid,Grid, GridItem,} from '@chakra-ui/react';
import AdminSidebar from './AdminSidebar';
import Customer from './Comp/Customer';
import axios from 'axios';
import OrderTable from './Comp/OrderTable';

const CoustomerPage = () => {
    const [user,setUser] = useState([])
    const [userOrder,setUserOrder] = useState([])
    const [profile,setProfile] = useState({})
    const [Orders,setOrders] = useState([])
    
    const GetData = async() => {
        let {data} = await axios.get('https://busy-worm-jewelry.cyclic.app/user/allusers')
        let order = await axios.get('https://busy-worm-jewelry.cyclic.app/order/getallorders')

        setUser(data)
        setUserOrder(order.data)
        setProfile(data[0])
        let newdata = order.data.filter((ele)=>ele.user === data[0]._id)
        setOrders(newdata)
    }
    

    const setuserProfile = async(body) => {
       //   console.log(userOrder,body)
         let newdata = userOrder.filter((ele)=>ele.user === body._id)
          setProfile(body)
          setOrders(newdata)
    }
    
    useEffect(()=>{
    let data = GetData()
    },[])



  return (
   <Box p='10px' bg='#1a202c' color='white' w='100%' m='auto' >
      <Flex w='100%' gap='10px'>

      <AdminSidebar/>

       <Box w='25%'>
       <Customer user={user} setuserProfile={setuserProfile}/>
       </Box>

       <Box w='55%' h='fit-content' position='sticky' top='0'>
        <Text bg='orange'>Profile</Text>
        <Box>
            
            { profile && <Box  p='20px'>
                   <Flex gap='10px' fontSize='18px'>
                    <Image p='20px' w='250px' border='1px solid' borderRadius='5%' src='https://cdn-icons-png.flaticon.com/512/4202/4202839.png' alt='user img'/>
                     <Box textAlign='left'>
                        <Text as='b' color='orange'>User Profile</Text>
                        <Text>Id: {profile._id}</Text>
                     <Text>Name: {profile.name}</Text>
                     <Text>Email: {profile.email}</Text>
                     <Text>Contact: {profile.contact}</Text>
                        <br />
                     <Text as='b' color='orange'>Shipping Address :</Text>
                      <Box fontSize='15px' display={profile?'block':'none'}>
                        {profile.address && profile.address.map((add,i)=>(
                            <Box key={i}>
                                <Flex gap='10px'>
                                     <Text>State:</Text>
                                    <Text>{add.state}-India</Text>
                                </Flex>
                                <Flex gap='10px'>
                                    <Text>City:</Text>
                                    <Text>{add.city}-{add.pincode}</Text>
                                </Flex>
                                <Flex gap='10px'>
                                    <Text>Room Num:</Text>
                                    <Text>{add.roomnum}</Text>
                                </Flex>
                            </Box>
                        ))}
                      </Box>         
                     </Box>
                   </Flex>
                </Box>
            }
        </Box>
                    {/* -------product table----- */}
                   <OrderTable Orders={Orders}/>
       </Box>
      </Flex>
   </Box>
  )
}

export default CoustomerPage
