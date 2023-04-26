import React, { useEffect, useState } from 'react';
import { Box,Text,Flex,Image, SimpleGrid,Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import { Doughnut } from "react-chartjs-2";
import CountUp from 'react-countup';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const UserChart = () => {
const [Sale,setSale]=useState(0)
const [user,setUsers] =useState(0)
const [orders,setOrders] = useState(0)
const [active,setActive] = useState(0)


const [data,setData] = useState({
    labels: [],
    datasets:[
        {
            label: 'Orders Quantity',
            data: [],
            borderColor: '',
            backgroundColor: []
        },
     
       ]
   })

   const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
            boxWidth: 5,
            boxHeight:5,
            boxBorder:'none'
        },title: {
          display: true,
          text: "Sales Targeted Categories",
          color: 'white'
        }
      },
    },
  };
 

useEffect(()=>{
const GetData = async() => {
   let  user = await axios.get('https://busy-worm-jewelry.cyclic.app/user/allusers')
   let {data} =await axios.get('https://busy-worm-jewelry.cyclic.app/order/getallorders')
   const option = ['electronics','Home Decor','mens watch','Action Figures']  
 

   let obj ={}
   let activeuser = []
   for(let i=0; i<data.length; i++){
    //catergories
     if(obj[data[i].categories]===undefined && option.includes(data[i].categories)){
       obj[data[i].categories]=data[i].price
   }else if(option.includes(data[i].categories)) {
       obj[data[i].categories]+=data[i].price
   }
   //activeuser
     if(!activeuser.includes(data[i].user)){
         activeuser.push(data[i].user)
     }
   }

let orderLabel = Object.keys(obj)
let orderData = Object.values(obj)

setUsers(user.data.length)
setOrders(data.length)
setActive(activeuser.length)

const Total = data.reduce((acc, ele) => {
    return acc + ele.price;
  }, 0);


  setSale(Total)
   setData({
    labels: orderLabel,
    datasets:[
        {
            label: 'Orders Quantity',
            data: orderData,
            borderColor:['red','orange','#f50269','#7aeb8d'],
            backgroundColor: ['red','orange','#f50269','#7aeb8d']
        },
     
       ]
   })
    
    }

  GetData()

},[])

  return ( 
 
          <Box w='100%'>
           <Grid 
              m='auto' h='250px'
              templateColumns='repeat(4, 1fr)'
              templateRows='repeat(1, 1fr)'
              gap='5px'
              textAlign='left'
            >

           <GridItem h='140px'   borderRadius='5px' p='10px'  bgGradient='linear(to-l, #7928CA, #FF0080)'>
                <Text>Total Sales:</Text>
                <Text as='b' fontSize='4xl'>₹<CountUp start={1000} end={Sale}duration={1.6}></CountUp></Text>
                <Flex gap='20px'>
                <Text>20%</Text>
                <Text>33.5k this week</Text>
             </Flex>
            </GridItem>

            <GridItem  h='140px' borderRadius='5px' bgGradient='linear(to-l, #7928CA, #FF0080)' p='10px' >
             <Text>Total Users:</Text>
             <Flex justifyContent='space-around'>
             <Text as='b' fontSize='5xl'>{user}M</Text>
              <Image w='70px' src='https://cdn-icons-png.flaticon.com/512/3229/3229875.png' alt={orders}/>
             </Flex>
             <Flex gap='10px'>
             <Text as='b' fontSize='md'>{active} M+ active users</Text><p>&#128512;</p>
             </Flex>
             </GridItem>

             <GridItem h='140px' borderRadius='5px' bgGradient='linear(to-l, #7928CA, #FF0080)' p='10px'>
             <Text>Total Orders:</Text>
             <Flex justifyContent='space-around'>
             <Text as='b' fontSize='5xl'><CountUp start={0} end={orders} duration={1.6} />K</Text>
              <Image w='70px' src='https://cdn-icons-png.flaticon.com/512/3229/3229875.png' alt={orders}/>
             </Flex>
             <Flex gap='20px'>
                <Text>3.8%</Text>
                <Text>+5k this week</Text>
             </Flex>
            </GridItem>

            <GridItem borderRadius='5px' rowSpan={2} colSpan={1} >
              <Doughnut  data={data} options={options}/>
            </GridItem>

            <GridItem colSpan={3}> 
              <Text fontSize='7xl' textAlign='center' bgClip='text' letterSpacing='15px' bgGradient='linear(to-l, #7928CA, #FF0080)'fontWeight='bold'>MEANBUY.com</Text>
            </GridItem>

           </Grid>
         </Box>
     
  )
}

export default UserChart
