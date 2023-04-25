  
import {Box,Text,Image,Heading,Divider, HStack, SimpleGrid} from "@chakra-ui/react"
 import {useState,useEffect} from "react";
import "./Home.css";
import {sliderimg,slidername} from "../Componunt/objects";
import Productlist from "./Productlist";
import {Navigate,Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {GetProducts} from '../Redux/Products.Redux/product.action.js';


const Home = ()=> {

const [Screensever,setSidedrower] = useState(sliderimg[0])
const [HDdata,setHDdata] = useState([])
const [MWdata,setMWdata] =useState([])
const [BFdata,setBFdata] =useState([])
const [Hbagdata,setHbagdata] =useState([])
const [MobiAdata,setMobiAdata] =useState([])
const [SmallAdata,setSmallAdata] =useState([])
const [Toysdata,setToysdata] =useState([])
const [Watchdata,setWatchdata] =useState([])
const [keyMouse,setKeyMouse] =useState([])
const [Bluetooth,setBluetooth] =useState([])
const [Makeup,setMakeup] =useState([])
const [Kitchen,setKitchen] =useState([])
const [Stiletto,setStiletto] =useState([])
const [Actionfig,setActionfig] =useState([])
const [Clothing,setClothing] =useState([])
const [New,setNew] =useState([])



const dataheading = [HDdata,BFdata,Hbagdata,MobiAdata,Toysdata,keyMouse,
                     MWdata,Makeup,Kitchen,Actionfig,Clothing,New,Watchdata]
let dispatch = useDispatch()

let {productData,loading,error} = useSelector((store)=>(store.productManager))

    useEffect(()=> {
        GetProducts(dispatch)
    },[dispatch])

    useEffect(()=>{
      if(productData !== undefined){
       let data=productData
        FetchFilter(data,"Home Decor")
        FetchFilter(data,"mens watch")
        FetchFilter(data,"Ballet Flats")
        FetchFilter(data,"HandbagsClutches")
        FetchFilter(data ,"Mobiles Accessories")
        FetchFilter(data,'Toys') 
        FetchFilter(data,'Watches')
        FetchFilter(data,'electronics')
        FetchFilter(data,'Makeup Accessories')
        FetchFilter(data,'Kitchen Wares')
        FetchFilter(data,'Action Figures')
        FetchFilter(data,'clothing')
        FetchFilter(data,'Disney')
      }
    },[productData])

    let FetchFilter = (Data,str) => {
        let FilterData = Data.filter((item) => item.categories === str)
        if(str==="Home Decor"){
            setHDdata(FilterData)
        }
        if(str==="mens watch"){
            setMWdata(FilterData)
        }
        if(str==="Ballet Flats"){
            setBFdata(FilterData)
        }
        if(str==="HandbagsClutches"){
            setHbagdata(FilterData)
        }
        if(str==="Mobiles Accessories"){
            setMobiAdata(FilterData)
        }
        if(str==="Toys"){
           setToysdata(FilterData)
        }
        if(str==="Watches"){
            setWatchdata(FilterData)
        }
        if(str==="electronics"){
             setKeyMouse(FilterData)
        }
        if(str==="Bluetooth Earphone"){
             setBluetooth(FilterData)
        }
        if(str ==="Makeup Accessories"){
              setMakeup(FilterData)
        }
        if(str ==="Kitchen Wares"){
               setKitchen(FilterData)
        }
        if(str ==="Stiletto Heels & Slip On"){
                setStiletto(FilterData)
        }
        if(str ==="Action Figures"){
               setActionfig(FilterData)
        }
        if(str  ==="clothing"){
              setClothing(FilterData)
        }
        if(str  ==="Disney"){
               setNew(FilterData)
        }
        if(str  ===""){}
    }
    let Loading = Array(5).fill(1);




    return(

        <Box pt='160px' className="main">
           <Box w='100%' m='auto'  translate="1s" >
             <Image m='auto' h={{base:'150px',md:'420px'}} transition="1s ease-in out" src={Screensever} alt={Screensever} className="Img"  />
           </Box>

          {
            slidername.map((heading,i)=>{
                return(
                    <Box w='95%' m='auto' key={i} mb='20px'>
                    <HStack justifyContent='space-evenly' alignItems='center' mt='50px'>
                    <Heading  as='h5' size={{base:"xs",md:"sm"}}  w={{base:"300px",md:"200px"}}  >{heading}</Heading>
                    <Divider  border='1px solid'  />
                    <Link to={`/products/categories/${heading}`} ><Text w={{base:"90px",md:"100px"}}size={{base:"xs",md:"sm"}}>see more</Text></Link>
                    </HStack>
                    {loading ? 
                        <SimpleGrid columns={5} spacing={10}>
                         {Loading.map((ele,i)=><Box key={i} className='loading'>
                            loading ....
                         </Box>)}
                        </SimpleGrid>
                    :<>
                       <Box display={{base:"none",md:"block"}} >
                       <Productlist product={dataheading[i]} num={4.5} />
                       </Box>
                       <Box display={{base:"block",md:"none"}} >
                       <Productlist  product={dataheading[i]} num={1.5} />
                       </Box>
                    </>
                    }
                   </Box>
                )
            })
          }
          
        </Box>
    )
  }

  export default Home;