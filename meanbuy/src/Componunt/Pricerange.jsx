import React,{useState}from 'react';
import {
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'

const Pricerange = () => {
    const [sliderValue, setSliderValue] = useState(50)

    const handelslider = (val) => {
        console.log(val)
    }

    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
  
    return (
      <Box pt={6} pb={2}>
        <Slider aria-label='slider-ex-6' onChange={(val) =>handelslider(val)}>
          <SliderMark value={25} {...labelStyles}>
            25k
          </SliderMark>
          <SliderMark value={50} {...labelStyles}>
            50k
          </SliderMark>
          <SliderMark value={75} {...labelStyles}>
            75k
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign='center'
            bg='orange.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {sliderValue}%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
}

export default Pricerange
