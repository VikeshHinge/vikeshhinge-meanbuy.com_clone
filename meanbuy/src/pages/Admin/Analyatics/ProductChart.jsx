import React, { useEffect, useState } from 'react';
import { Box,Flex} from '@chakra-ui/react';
import axios from 'axios';
import { Line,Bar } from "react-chartjs-2";
import OrderChart from './OrderChart';
import YearData from './YearData';
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
        text: 'Product Chart',
        color:'white'
      },
    },
  };
 

useEffect(()=>{
const GetData = async() => {
    
   let {data:{data}} =await axios.get('https://busy-worm-jewelry.cyclic.app/product')

    let Product = {}
    for(let i=0; i<data.length; i++){
        if(Product[data[i].title]===undefined){
          Product[data[i].title]=data[i].product_quantity
      }else{
          Product[data[i].title]+=data[i].product_quantity
      }
      }


   const Prodata = Object.keys(Product)
   const ProCount = Object.values(Product)
   setProData({
    labels:Prodata,
    datasets:[
        {
            label:'Products',
            data:ProCount,
            backgroundColor:'#f50269',
            borderColor:'orange'
        }
       ]
   })
    
    }

  GetData()

},[])

  return ( 
 
          <Box w='100%'>
             <Flex justifyContent='space-around' m='auto' mt='50px'>
             <Box w='40%'>
              <YearData/>
             </Box>
             <Box w='50%' >
             <OrderChart/>
             </Box>
             </Flex>
             <Box mt='50px'>
             <Line data={ProData} options={optionspro}/>
             </Box>
         </Box>
     
  )
}

export default ProductChart 
