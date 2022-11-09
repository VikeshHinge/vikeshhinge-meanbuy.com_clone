import {Box,Flex,HStack,Text,Image,InputGroup,Input,InputRightElement,Button,Link,Spacer,SimpleGrid} from "@chakra-ui/react"
import "./dropdown.css"
let CategoriesDrop = () => {


    

    return(
      <Box className="categories" color='black.100' >
         <SimpleGrid minChildWidth="120px" spacing="20px">
        <Box  >
          <Flex className="flexlink" mb='28px'>
          <Link className="heading" >MEN</Link>
          <Link>Watches</Link>  
          </Flex>
          <Flex className="flexlink">
          <Link className="heading" >WOMEN</Link>
          <Link>Makeup Accessories</Link>
          <Link>Clothing</Link>
          <Link>Handbags & Clutches</Link>
          <Link>Watches</Link>
          <Link>Ballet Flats</Link>
          <Link>Sandals</Link>
          <Link>Stiletto Heels & Slip On</Link>
          </Flex>
        </Box>
        <Box  >
        <Flex className="flexlink">
          <Link className="heading" >ELECTRONICS</Link>
          <Link>Gaming Accessories</Link>
          <Link>Keyboards & Mouse</Link>
          <Link>Small Appliances</Link>
          </Flex>
        </Box>
        <Box >
        <Flex className="flexlink">
            <Link className="heading" >ESSENTIALS</Link>
            <Link>Home Essentials</Link>
            <Link>Men's Essentials</Link>
            <Link>School Backpacks</Link>
            <Link>Sports Essentials</Link>
            <Link>Women Essentials</Link>
        </Flex>    
        </Box>
        <Box  >
        <Flex className="flexlink">
            <Link className="heading" >FLASH SALE</Link>
            <Link>Flash Sale</Link>
        </Flex>    
        </Box>
        <Box  >
       <Flex className="flexlink">
            <Link className="heading">HOME & LIVING</Link>
            <Link>Bath & Storage</Link>
            <Link>Gardening</Link>
            <Link>Home Decor</Link>
            <Link>Home Improvement</Link>
            <Link>Kitchen Wares</Link>
            <Link>Nordic Ceiling Lights</Link>
            </Flex>
        </Box>
        <Box  >
       <Flex className="flexlink">
          <Link className="heading" >KIDS & MOM</Link>
          <Link>Action Figures</Link>
          <Link>Discovery Adventures</Link>
          <Link>Disney</Link>
          <Link>Hello Kitty</Link>
          <Link>Marvel</Link>
          <Link>Toys</Link> 
          </Flex>
        </Box>
        <Box  >
        <Flex className="flexlink">
          <Link className="heading" >MEANBUY DEALS</Link>
          <Link>Gifts</Link>
          <Link>Electronics</Link>
          <Link>Men's Watches</Link>
          <Link>Smart Watches</Link>
          <Link>Top Selling Smart Watches</Link>
          </Flex>
        </Box>
        <Box >
     <Flex className="flexlink">
          <Link className="heading" >MOBILES & TABS</Link>
          <Link>Bluetooth Earphone</Link>
          <Link>Mobiles Accessories</Link>
          <Link>Sporting Bluetooth</Link>
          <Link>Wired Headphones</Link>
          <Link>Wireless Chargers</Link>
          </Flex>
        </Box>
        <Box >
        <Flex className="flexlink">
          <Link className="heading" >SCHOOLS & OFFICE SUPPLIES</Link>
          <Link>Arts & Crafts</Link>
          </Flex>
        </Box>
        <Box>
      
        </Box>
      </SimpleGrid>
      </Box>
    )
}

export default CategoriesDrop;