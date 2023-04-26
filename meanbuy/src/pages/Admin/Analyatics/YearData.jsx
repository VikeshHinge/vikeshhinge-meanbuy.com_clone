import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import axios from 'axios';
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

const YearData = () => {
const [data,setData] = useState(
    {
        labels:[],
        datasets:[
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
        text: "Monthly Order's Quantity",
        color: 'white'
      },
    },
  };
 

useEffect(()=>{
const GetData = async() => {
   let {data} =await axios.get('https://busy-worm-jewelry.cyclic.app/order/getallorders')
  //const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let obj = {'January':0, 'February':0, 'March':0, 'April':0, 'May':0, 'June':0, 'July':0, 'August':0, 'September':0, 'October':0, 'November':0, 'December':0}


    for(let i=0; i<data.length; i++){
        let month = data[i].orderdate.split(' ')
        //console.log(month[1])
         obj[month[1]] += data[i].quantity;
    }
    
    let Months = Object.keys(obj)
    let Orders = Object.values(obj)

    setData(
        {
            labels:Months,
            datasets:[
                { type: 'bar',
                label: "Orders",
                data:Orders,
                backgroundColor: '#7aeb8d'
               }
               ]
           }
    )


    }

  GetData()

},[])

  return ( 
     <Chart data={data} options={options}/>
  )
}

export default YearData
