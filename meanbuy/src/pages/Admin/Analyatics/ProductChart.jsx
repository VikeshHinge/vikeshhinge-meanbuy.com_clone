import React, { useEffect, useState } from 'react';
import { Box,Flex} from '@chakra-ui/react';
import axios from 'axios';
import { Line,Bar } from "react-chartjs-2";
import OrderChart from './OrderChart';
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

const ProductChart  = () => {
const [data,setData] = useState(
    {
        labels:[],
        datasets:[
            {   type: 'bar',
                label: 'Product Category Distribution',
                data:[],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(99, 132, 0.5)',
            }
           ]
       }
)

const [ProData,setProData] = useState(
    {
        labels:[],
        datasets:[
            {   type: 'bar',
                label: "Product's Quantity",
                data:[],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(99, 132, 0.5)',
            }
           ]
       }
)

const options = {
    indexAxis: 'y',
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

  
  const optionspro = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 1,
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
    
   let {data:{data}} =await axios.get('http://localhost:4040/product')
   //console.log(data)

   let obj={}
    for(let i=0; i<data.length; i++){
      if(obj[data[i].categories]===undefined){
        obj[data[i].categories]=data[i].product_quantity
    }else{
        obj[data[i].categories]+=data[i].product_quantity
    }
    }
  
    let Product = {}
    for(let i=0; i<data.length; i++){
        if(Product[data[i].title]===undefined){
          Product[data[i].title]=data[i].product_quantity
      }else{
          Product[data[i].title]+=data[i].product_quantity
      }
      }



   const Categories=Object.keys(obj)
   const Count = Object.values(obj)
   //console.log(Categories,Count)

   
   setData({
    labels:Categories,
    datasets:[
        {
            label: 'Product Categories',
            data:Count,
            backgroundColor: 'blue',
        }
       ]
   })

   const Prodata = Object.keys(Product)
   const ProCount = Object.values(Product)
   setProData({
    labels:Prodata,
    datasets:[
        {
            label:'Products',
            data:ProCount,
            backgroundColor: '#f50269',
            borderColor:'orange'
        }
       ]
   })
    
    }

  GetData()

},[])

  return ( 
 
          <Box w='100%'>
             <Flex w='100%' gap='20px'>
             <Box w='50%'>
             <Bar  data={data} options={options}/>
             </Box>
             <OrderChart/>
             </Flex>
             <Line data={ProData} options={optionspro}/>
         </Box>
     
  )
}

export default ProductChart 
