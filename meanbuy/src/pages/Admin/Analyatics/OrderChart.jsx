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
        text:"Brand's Ratings",
        color:'white'
      },
    },
  };
 

useEffect(()=>{
const GetData = async() => {
    
   let {data:{data}} =await axios.get('https://busy-worm-jewelry.cyclic.app/product')
   //console.log(data)
  
   
    let obj ={}
    let obj2 ={}
    for(let i=0; i<data.length; i++){
      if(obj[data[i].brand]===undefined){
        obj[data[i].brand]=data[i].rating
        obj2[data[i].brand]=data[i].rating
    }else{
        if( obj[data[i].brand]>data[i].rating){
          obj[data[i].brand]=data[i].rating
        }
        if( obj2[data[i].brand]<data[i].rating){
          obj2[data[i].brand]=data[i].rating
        }
    }
    }
    let Categories=Object.keys(obj)
    let Counthigh = Object.values(obj2)
    let CountLow = Object.values(obj)
   //console.log(obj,obj2)
   setData({
    labels:Categories,
    datasets:[
        {
            label: "High",
            data:Counthigh,
            // borderColor: 'orange',
            backgroundColor: '#f50269',
        },
        {
          label: "Low",
          data:CountLow,
          // borderColor: 'orange',
          backgroundColor: 'orange',
        }
       ]
   })
    
    }

  GetData()

},[])

  return ( 
  <Bar data={data} options={options}/>
  )
}

export default OrderChart
