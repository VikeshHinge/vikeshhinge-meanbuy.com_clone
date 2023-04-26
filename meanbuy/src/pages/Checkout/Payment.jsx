import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Box,Button,Text,useDisclosure,Input,Flex,Image
  } from '@chakra-ui/react'

const Payment = ({handelPayment,total,onOpen,onClose,isOpen}) => {
    const [loader,setLoader] = useState(false)
    const [view,setView] = useState(false)
    const [loading,setloading]= useState(false)

    const handelpay = () => {
        setLoader(true)
        setTimeout(()=>{
            setloading(true)
        },2500)
        setTimeout(handelPayment,3000)
    }

  return (
   <Box>
      <Button w='100%' variant='solid' bg='orange' onClick={onOpen}>Payment</Button>

    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg='#9100fb' >
    <ModalHeader color='white'>Payment to meanbuy.com</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
        
        <Box p='10px' >
        {
           loader ?<Box >
             <Image w='100%' h='180px' m='auto' src={loading?'https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif':
                          'https://media.tenor.com/joLYNfFQGDgAAAAC/loading.gif'
            } alt='...loading'/>
           </Box>:
          <Box borderRadius='10px'h='180px' w='100%' p='18px'  bg='#640ba7' color='white' textAlign='center' m='auto' mb='10px'>
           <Text as='b' fontSize='3xl'>₹ {total}</Text>
           <Button bg='#640ba7'color='white'  w='100%' mb='5px'onClick={()=>setView(false)} >Pay with UPI</Button><br />
           <Button bg='#640ba7' color='white' w='100%' onClick={()=>setView(true)} >Pay With Net Banking</Button>
          </Box>
        }

        <Box  m='auto'>
            <Text fontSize='18px' color='white' mt='8px' mb='8px'>{ view?'Pay Using Credit Card':'Pay Using UPI'}</Text>
            <Box display={view?'block':'none'} p='10px' bg='white' fontSize='12px'>
              Card Number
              <Input mb='10px' placeholder='xxxx-xxxx-xxxx-xxxx' size='sm' />
             
              <Flex w='100%' justifyContent='space-between'>
               <Box mb='10px'>
               Expiry Date
               <Flex w='55%' gap='3px'>
                <Input maxLength='2' placeholder='mm' size='sm' />
                <Input maxLength='4'  placeholder='yyyy' size='sm' />
               </Flex>
               </Box>
                <Box mb='10px'>
                cvc <Input w='80px' maxLength='4'  placeholder='xxxx' size='sm' />
              </Box>
              </Flex>
            </Box >
            <Box display={!view?'block':'none'} bg='white' p='10px'>
              UPI ID
                <Input mb='10px' placeholder='upi' size='sm' />
                <Image w='70%' m='auto' src='https://ecards.hypupad.com/wp-content/uploads/2021/01/payment-logo-icons-1024x272.png' alt='payUPI'/>
            </Box>
        </Box>

        </Box>

    </ModalBody>

    <ModalFooter>
       <Button color='white' w='180px' mr='10px'  bg='#640ba7' onClick={handelpay}>Pay</Button>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
     
    </ModalFooter>
  </ModalContent>
</Modal>
   </Box>
  )
}

export default Payment
