import React from "react";
import {Box,Image,Badge,Text,Divider,Flex, } from "@chakra-ui/react";
import {Link,useNavigate} from "react-router-dom";
import {StarIcon} from "@chakra-ui/icons";
import { BiRupee } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";
const Productlist = ({product,num}) => {

   const Navigate = useNavigate()

   let handelRoue = (id) => {
     return Navigate(`product/${id}`)
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
                <SwiperSlide key={element._id} >
                   <Box p='5px' onClick={()=>handelRoue(element._id)}>
                   <Image w='80%' src={element.img1} alt='Dan Abramov' m='auto' mt='10px' />
                <Text fontSize='sm' lineHeight='15px' mt='10px' w='100%'>{element.title}</Text>

                <Badge borderRadius='20px' px='2' variant='solid' colorScheme='green' pl='10px' pr='10px' mt='5px' ml='60%' mb='5px' alignItems='center'>
                    {element.rating}/5<StarIcon />
                 </Badge>
                 <Divider mt='5px' mb='5px' />
                 <Flex justifyContent='space-between' pl='20px' pr='20px' >
                 <Text as='b' fontSize='xl'><Flex alignItems='center' color='#ED8936'><BiRupee color='#ED8936'/>{element.price}</Flex></Text>
                 <Text fontSize='md' fontWeight='bold'>Flat{element.discount}%OFF</Text>
                 </Flex>
                   </Box>
                </SwiperSlide>
             )
          })}
        </Swiper>
    )
}

export default Productlist;