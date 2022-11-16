import React, { useRef, useState } from "react";
import {Box,Image,Badge,Text,Divider,Flex,Spacer } from "@chakra-ui/react"
import {Link,Navigate} from "react-router-dom"
import {StarIcon} from "@chakra-ui/icons"
import { BiRupee } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";
const Productlist = ({product,num}) => {



   let handelRoue = (id) => {
      console.log(id)
       return <Navigate to={`/products/${id}`}/>
   }



    return(
        <Swiper  
        slidesPerView={num}
        spaceBetween={5}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          {product.map((element)=>{
             return(
                <SwiperSlide >
                <Link to={`/products/${element.id}`} >
                   <Box p='10px'  onClick={()=>handelRoue(element.id)}>
                   <Image src={element.img1} alt='Dan Abramov' mt='10px' />
                <Text fontSize='sm' lineHeight='15px' mt='10px' w='100%'>{element.title}</Text>

                <Badge borderRadius='20px' px='2' variant='solid' colorScheme='green' pl='10px' pr='10px' mt='5px' ml='70%' mb='5px'>
                    {element.rating}/5<StarIcon />
                 </Badge>
                 <Divider mt='5px' mb='5px' />
                 <Flex>
                 <Text as='b' fontSize='xl'><Flex alignItems='center' color='#ED8936'><BiRupee color='#ED8936'/>{element.price}</Flex></Text>
                 <Spacer />
                 <Text fontSize='md'>Flat{element.discount}%OFF</Text>
                 </Flex>
                   </Box></Link>
                </SwiperSlide>
             )
          })}
        </Swiper>
    )
}

export default Productlist;