import React, { useEffect,useState } from 'react';
import {Box,Flex,Text,Image,Table,Tr,Th, Button,Square,Divider,Tbody,Thead,Input} from "@chakra-ui/react";
import { EditIcon} from '@chakra-ui/icons';
import { GetUserInfo } from '../../Redux/Uer.Redux/User.API';

import {useDispatch,useSelector} from 'react-redux'
import { getProfile,updateProfile } from '../../Redux/Uer.Redux/User.action';
let info = {
   city:'',
   pincode:'',
   state:'',
   roomnum:'',
   landmark:''
}

const Myprofile = () => {
    const [toggle,setToggle] = useState(false)
    const [userinfo,setUserinfo] = useState(info)
    const dispatch = useDispatch()
    let {user,loading,error} = useSelector((store)=>store.userManager)
  
    const handelchange = (e) => {
      let {name,value} = e.target;
      setUserinfo({...userinfo,[name]:value})
   }
   
   const handelSubmit = () =>{
      dispatch(updateProfile(userinfo))
      setToggle(false)
   }


useEffect(()=>{
 getProfile(dispatch)
},[dispatch])

if(loading){
   return(
      <Box>
         <Image src='https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif' alt='loading ...'/>
      </Box>
   )
}

  return (
     <Box w={{base:'100%',md:'70%'}}>
      {user.length>0 && user.map((ele)=>(
         <Box key={ele._id}>
        <Box  boxShadow='md' border='1px solid gray' p='15px'>
   
     <Flex justifyContent='space-between'>
        <Text as='b' color='orange'> My Details</Text>

        {/* --------update-Modal-------- */}
        {/* <EditIcon/> */}

     </Flex>
     <Flex justifyContent='space-between'>
     <Text as='b' color='orange'>Name</Text>
        <Text>{ele.name}</Text>
     </Flex>
     <Flex justifyContent='space-between'>
     <Text as='b' color='orange'>Contact Number</Text>
        <Text>{ele.contact}</Text>
     </Flex>
     <Flex justifyContent='space-between'>
     <Text as='b' color='orange'>Email ID</Text>
        <Text>{ele.email}</Text>
     </Flex>

    </Box>
      {toggle===false ? 
       <Box mt='20px'  p='10px'  boxShadow='md' border='1px solid gray'>
     
       <Flex justifyContent='space-between'>
          <Text as='b' color='orange'>Address</Text>
          <EditIcon onClick={()=>setToggle(!toggle)}/>
       </Flex>
      <Box w='75%' textAlign='left'>
      <Text >
       
         {ele.address && ele.address.map((add,i)=>(
             <Box key={i} ml='10px'>
                 <Text as='b' >ADD{i+1} :</Text>
                 <Text >
                     {add.roomnum}, City :{add.city}-{add.pincode}, {add.state}, Land Mark :{add.landmark}
                 </Text>
             </Box>
         ))}
       </Text>
      </Box>
     </Box>:
      <Box  >
      address:
        <Box p='10px' bg='orange.100'>
        
         <Input onChange={handelchange}  name='roomnum' value={userinfo.roomnum}  bg='white'  type='text' placeholder='building/room number' size='sm' />
        <Input onChange={handelchange}  name='landmark' value={userinfo.landmark} bg='white' type='text' placeholder='landmark' size='sm' />
        <Input onChange={handelchange}  name='city'   bg='white' value={userinfo.city} type='text' placeholder='city' size='sm' />
        <Input onChange={handelchange}  name='state'  bg='white' value={userinfo.state}  type='text' placeholder='state' size='sm' />
        <Input onChange={handelchange}  name='pincode'  bg='white' value={userinfo.pincode} type='text' placeholder='pincode' size='sm' />
         <Flex gap='10px'>
         <Button mt='10px' bg='orange' w='50%' onClick={handelSubmit}>Update</Button> 
         <Button bg='red' mt='10px' onClick={()=>setToggle(false)}>Close</Button>
         </Flex>
        </Box>
      </Box>
      }
   </Box>
      ))}
     </Box>
  )
}

export default Myprofile
