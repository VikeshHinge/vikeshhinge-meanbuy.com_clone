import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { Line,Bar } from "react-chartjs-2";
import { getOrders } from '../../../Redux/Order.redux/order.action';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
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
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const OrderChart = () => {
const [data,setData] = useState(
    {
        labels:[],
        datasets:[
            {   type: 'line',
                label: 'Orders Quantity',
                data:[],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(99, 132, 0.5)',
            }
           ]
       }
)

const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Order Chat',
      },
    },
  };
 

useEffect(()=>{
const GetData = async() => {
    
   let {data} =await axios.get('http://localhost:4040/order/getallorders')
   console.log(data)
    let Categories=[]
    let Count = []
    let obj ={}
    for(let i=0; i<data.length; i++){
      if(obj[data[i].categories]===undefined){
        obj[data[i].categories]=data[i].rating
    }else{
        if( obj[data[i].categories]>data[i].rating){
          obj[data[i].categories]=data[i].rating
        }
    }
    }
    Categories=Object.keys(obj)
    Count = Object.values(obj)
    console.log(Categories,Count)
    let dataPoints = Count
   setData({
    labels:Categories,
    datasets:[
        {
            label: 'Orders Ratings',
            data:dataPoints,
            borderColor: 'orange',
            backgroundColor: '#f50269',
        }
       ]
   })
    
    }

  GetData()

},[])

  return ( 
 
          <Box w='50%'>
             <Bar data={data} options={options}/>
         </Box>
     
  )
}

export default OrderChart
