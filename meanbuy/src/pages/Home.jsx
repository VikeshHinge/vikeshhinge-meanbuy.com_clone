  
import {VStack,Box,Text,Image,Heading,Link,Flex,Grid,GridItem,Divider,SimpleGrid,Stack, HStack} from "@chakra-ui/react"
 import {useState,useEffect} from "react"
import "./Home.css"
import {sliderimg,slidername} from "../Componunt/objects"
import { GetData } from "../Axios/Axios"
import Productlist from "./Productlist"


const Home = ()=> {

const [Screensever,setSidedrower] = useState(sliderimg[0])
const [Data,setData] = useState([])
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

const dataheading = [HDdata,BFdata,Hbagdata,MobiAdata,SmallAdata,Toysdata,keyMouse,Bluetooth,
                     MWdata,Makeup,Kitchen,Stiletto,Actionfig,Clothing,New,Watchdata]

    const screensever = () => {
        let count =1;
       let imgslider = setInterval(()=>{
        if(count===8){
            count=0
        }
          //console.log(count)
          setSidedrower(sliderimg[count])
          count++
       },3000)
    }
   
    useEffect(()=>{
      screensever()
    },[])
    useEffect(()=> {
        GetData().then((res)=>setData(res.data))
    },[])

    useEffect(()=>{
        FetchFilter(Data,"Home Decor")
        FetchFilter(Data,"mens watch")
         FetchFilter(Data,"Ballet Flats")
         FetchFilter(Data,"Handbags & Clutches")
         FetchFilter(Data ,"Mobiles Accessories")//*********** */
        // FetchFilter(Data,'Small Appliances')
         FetchFilter(Data,'Toys') 

         FetchFilter(Data,'Watches')/*********** */
         FetchFilter(Data,'Keyboards & Mouse')

        // FetchFilter(Data,'Bluetooth Earphone')
         FetchFilter(Data,'Makeup Accessories')
        // FetchFilter(Data,'Kitchen Wares')
        // FetchFilter(Data,'Stiletto Heels & Slip On')
         FetchFilter(Data,'Action Figures')
         FetchFilter(Data,'Clothing')
        // FetchFilter(Data,'NEW ARRIVALS')
    },[Data])

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
        if(str==="Handbags & Clutches"){
            setHbagdata(FilterData)
        }
        if(str==="Mobiles Accessories"){
            setMobiAdata(FilterData)
        }
        if(str==="Small Appliances"){
            setSmallAdata(FilterData)
        }
        if(str==="Toys"){
           setToysdata(FilterData)
        }
        if(str==="Watches"){
            setWatchdata(FilterData)
        }
        if(str==="Keyboards & Mouse"){
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
        if(str  ==="Clothing"){
              setClothing(FilterData)
        }
        if(str  ==="NEW ARRIVALS"){
               setNew(FilterData)
        }
        if(str  ===""){}
    }

//console.log(HDdata)

    return(

        <Box pt='160px'>
           <Box w='100%' transition="1s ease-in out" >
             <Image  transition="1s ease-in out" src={Screensever} alt={Screensever} className="Img"  />
           </Box>

          {
            slidername.map((heading,i)=>{
                return(
                    <Box w='95%' m='auto' >
                    <HStack justifyContent='space-evenly' alignItems='center' mt='50px'>
                    <Heading  as='h5' size={{base:"xs",md:"sm"}}  w={{base:"300px",md:"200px"}}  textAlign='start' >{heading}</Heading>
                    <Divider  border='1px solid'  />
                    <Link w={{base:"200px",md:"100px"}} size={{base:"xs",md:"sm"}} textAlign='end'>see more</Link>
                    </HStack>
                    <Box display={{base:"none",md:"block"}} >
                      <Productlist product={dataheading[i]} num={4.3} />
                    </Box>
                    <Box display={{base:"block",md:"none"}} >
                      <Productlist product={dataheading[i]} num={1.3} />
                    </Box>
                   </Box>
                )
            })
          }
          
        </Box>
    )
  }

  export default Home;