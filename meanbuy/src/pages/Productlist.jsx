import React, { useRef, useState } from "react";
import {Box,Image,Badge,Text,Divider,Flex,Spacer } from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import { BiRupee } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
const Productlist = ({product}) => {

    return(
        <Swiper
        slidesPerView={4.3}
        spaceBetween={10}
        slidesPerGroup={5}
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
                   <Box p='10px' border='1px solid'>
                   <Image src={element.img1} alt='Dan Abramov' mt='20px'/>
                <Text fontSize='sm' lineHeight='15px' mt='10px'>{element.title}</Text>
                <Badge borderRadius='20px' px='2' variant='solid' colorScheme='green' pl='10px' pr='10px' mt='5px' ml='70%' mb='5px'>
                    {element.rating}/5<StarIcon />
                 </Badge>
                 <Divider mt='5px' mb='5px' />
                 <Flex>
                 <Text as='b' fontSize='xl'><Flex alignItems='center' color='#ED8936'><BiRupee color='#ED8936'/>{element.price}</Flex></Text>
                 <Spacer />
                 <Text fontSize='md'>Flat{element.discount}%OFF</Text>
                 </Flex>
                   </Box>
                </SwiperSlide>
             )
          })}
        </Swiper>
    )
}

export default Productlist;