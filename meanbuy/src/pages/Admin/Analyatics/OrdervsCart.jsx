import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { Line,Bar } from "react-chartjs-2";
import { getOrders } from '../../../Redux/Order.redux/order.action';
import { Chart } from 'react-chartjs-2';
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

const ProductvsOrder = () => {
const [data,setData] = useState(
    {
        labels:[],
        datasets:[
            {   type: 'line',
                label: 'Orders Quantity',
                data:[],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(99, 132, 0.5)',
            },
            { type: 'bar',
            label: 'Product Quantity',
            data:[],
            backgroundColor: 'blue',
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
        text: 'Order and Cart Data',
      },
    },
  };
 

useEffect(()=>{
const GetData = async() => {
   let  cart = await axios.get('http://localhost:4040/cart/getallcart')
   let {data} =await axios.get('http://localhost:4040/order/getallorders')
   
  //const AllProD = ['mens watch','Action Figures','Kitchen Wares','Home Decor','Disney','HandbagsClutches','Kitchen Wares','Toys','clothing','womens watch','electronics','Makeup Accessories','Gaming Accessories']
  let Allcategeries = {'mens watch':0,'Action Figures':0,'Kitchen Wares':0,'Home Decor':0,'Disney':0,'HandbagsClutches':0,'Kitchen Wares':0,'Toys':0,'clothing':0,'womens watch':0,'electronics':0,'Makeup Accessories':0,'Gaming Accessories':0}
 
    let obj ={}
    let proObj={}

    let OrdersObj ={...Allcategeries};
    for(let i=0; i<data.length; i++){
      if(obj[data[i].categories]===undefined){
        obj[data[i].categories] = data[i].quantity;
        OrdersObj[data[i].categories] = data[i].quantity;
      }else{
        OrdersObj[data[i].categories] += data[i].quantity;
      }
    }
    
    let ProductObj ={...Allcategeries};
    for(let i=0; i<cart.data.length; i++){
        if(proObj[cart.data[i].categories]===undefined){
            proObj[cart.data[i].categories]=cart.data[i].quantity
            ProductObj[cart.data[i].categories]=cart.data[i].quantity
        }else{
            ProductObj[cart.data[i].categories]+=cart.data[i].quantity
        }
    }
    console.log(OrdersObj,ProductObj,Allcategeries)
    
    const AllProCategories = Object.keys(OrdersObj)
    const OrderCount = Object.values(OrdersObj)
    const CartCount = Object.values(ProductObj)

   setData({
    labels:AllProCategories,
    datasets:[
        {
            label: 'Orders Quantity',
            data:OrderCount,
            borderColor: 'Orange',
            backgroundColor: 'green',
        },
        { type: 'bar',
        label: 'Cart Quantity',
        data:CartCount,
        backgroundColor: '#f50269',
       }
       ]
   })
    
    }

  GetData()

},[])

  return ( 
 
          <Box w='50%'>Chart
             <Chart data={data} options={options}/>
         </Box>
     
  )
}

export default ProductvsOrder
