import React, { useEffect, useState } from 'react';
import { Box,Text,Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { Doughnut } from "react-chartjs-2";
import { getOrders } from '../../../Redux/Order.redux/order.action';
import { Chart } from 'react-chartjs-2';
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
        },
      },
    },
  };
 

useEffect(()=>{
const GetData = async() => {
   let  user = await axios.get('http://localhost:4040/user/allusers')
   let {data} =await axios.get('http://localhost:4040/order/getallorders')
   const option = ['electronics','Home Decor','mens watch','Action Figures']  
 

   let obj ={}
   for(let i=0; i<data.length; i++){
     if(obj[data[i].categories]===undefined && option.includes(data[i].categories)){
       obj[data[i].categories]=data[i].price
   }else if(option.includes(data[i].categories)) {
       obj[data[i].categories]+=data[i].price
   }
   }

let orderLabel = Object.keys(obj)
let orderData = Object.values(obj)

setUsers(user.data.length)
setOrders(data.length)

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
            borderColor:['red','orange','pink','green'],
            backgroundColor: ['red','orange','pink','green']
        },
     
       ]
   })
    
    }

  GetData()

},[])

  return ( 
 
          <Box w='100%' >
           <Flex gap='3px' justifyContent='center' m='auto' textAlign='left'>
           <Box color='black' h='fit-content' bg='orange.100' p='10px' w='25%' border='2px solid orange'>
                <Text>Total Sales:</Text>
                <Text as='b' fontSize='5xl'>₹ {Sale.toLocaleString('en-IN')}</Text>
                <Flex gap='20px'>
                <Text>20%</Text>
                <Text>33.5k this week</Text>
             </Flex>
            </Box>
            <Box color='black' h='fit-content' bg='orange.100' p='10px' w='25%' border='2px solid orange'>
             <Text>Total Users:</Text>
             <Text as='b' fontSize='5xl'>{user} M+</Text>
             <Flex gap='20px'>
                <Text>13%</Text>
                <Text>+ 3.5k this week</Text>
             </Flex>
             </Box>
             <Box color='black' h='fit-content' bg='orange.100' p='10px' w='25%' border='2px solid orange'>
             <Text>Total Orders:</Text>
             <Text as='b' fontSize='5xl'>{orders.toLocaleString('en-IN')}</Text>
             <Flex gap='20px'>
                <Text>3.8%</Text>
                <Text>+5k this week</Text>
             </Flex>
            </Box>
            <Box p='10px' w='25%' border='2px solid'>
                <Text>Sales by Categories</Text>
              <Doughnut  data={data} options={options}/>
             </Box>
           </Flex>
         </Box>
     
  )
}

export default UserChart
