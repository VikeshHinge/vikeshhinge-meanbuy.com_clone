import {Box,Flex,Text,Image,SimpleGrid} from "@chakra-ui/react"
import {Link} from 'react-router-dom'
import "./dropdown.css"
let CategoriesDrop = () => {


  
    return(
      <Box className="categories"  color='black' >
         <SimpleGrid minChildWidth="120px" spacing="20px" display={{base:"none",md:'grid'}}>
        <Box>
          <Flex className="flexlink" mb='28px'>
          <Text className="heading" >MEN</Text>
          <Link to={`/products/categories/mens watch`} >Watches</Link>  
          </Flex>
          <Flex className="flexlink">
          <Link className="heading" >WOMEN</Link>
          <Link to={`/products/categories/Makeup Accessories`}>Makeup Accessories</Link>
          <Link to={`/products/categories/clothing`}>Clothing</Link>
          <Link  to={`/products/categories/HandbagsClutches`}>Handbags & Clutches</Link>
          <Link to={`/products/categories/womens watch`}>Watches</Link>
          <Link  to={`/products/categories/Ballet Flats`}>Ballet Flats</Link>
          <Link  to={`/products/categories/Ballet Flats`}>Sandals</Link>
          <Link  to={`/products/categories/Ballet Flats`}>Stiletto Heels & Slip On</Link>
          </Flex>
        </Box>
        <Box  >
        <Flex className="flexlink">
          <Link className="heading" >ELECTRONICS</Link>
          <Link to={`/products/categories/electronics`}>Gaming Accessories</Link>
          <Link to={`/products/categories/electronics?categories=Mobiles Accessories`}>electronics</Link>
          <Link to={`/products/categories/electronics`}>Small Appliances</Link>
          </Flex>
        </Box>
        <Box >
        <Flex className="flexlink">
            <Link className="heading" >ESSENTIALS</Link>
            <Link  to={`/products/categories/electronics`}>Home Essentials</Link>
            <Link to={`/products/categories/mens watch?categories=electronics`}>Men's Essentials</Link>
            <Link to={`/products/categories/Disney`}>School Backpacks</Link>
            <Link to={`/products/categories/electronics`}>Sports Essentials</Link>
            <Link to={`/products/categories/Makeup Accessories`}>Women Essentials</Link>
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
            <Link to={`/products/categories/Home Decor`}>Home Decor</Link>
            <Link to={`/products/categories/Home Decor`}>Home Improvement</Link>
            <Link to={`/products/categories/Kitchen Wares`}>Kitchen Wares</Link>
            <Link to={`/products/categories/Home Decor`}>Nordic Ceiling Lights</Link>
            </Flex>
          </Box>
          <Box  >
         <Flex className="flexlink">
          <Link className="heading" >KIDS & MOM</Link>
          <Link to={`/products/categories/Action Figures`}>Action Figures</Link>
          <Link to={`/products/categories/Action Figures`}>Discovery Adventures</Link>
          <Link to={`/products/categories/Disney`}>Disney</Link>
          <Link to={`/products/categories/Disney`}>Hello Kitty</Link>
          <Link to={`/products/categories/Action Figures`}>Marvel</Link>
          <Link to={`/products/categories/Toys`}>Toys</Link> 
          </Flex>
          </Box>
          <Box>
          <Flex className="flexlink">
          <Link className="heading" >MEANBUY DEALS</Link>
          <Link to={`/products/categories/mens watch`}>Gifts</Link>
          <Link>Electronics</Link>
          <Link to={`/products/categories/mens watch`}>Men's Watches</Link>
          <Link to={`/products/categories/mens watch`}>Smart Watches</Link>
          <Link to={`/products/categories/mens watch`}>Top Selling Smart Watches</Link>
          </Flex>
        </Box>
        <Box >
     <Flex className="flexlink">
          <Link className="heading" >MOBILES & TABS</Link>
          <Link to={`/products/categories/Mobiles Accessories`}>Bluetooth Earphone</Link>
          <Link to={`/products/categories/Mobiles Accessories`}>Mobiles Accessories</Link>
          <Link to={`/products/categories/Mobiles Accessories`}>Sporting Bluetooth</Link>
          <Link to={`/products/categories/Mobiles Accessories`}>Wired Headphones</Link>
          <Link to={`/products/categories/Mobiles Accessories`}>Wireless Chargers</Link>
          </Flex>
        </Box>
        <Box >
        <Flex className="flexlink">
          <Link className="heading" >SCHOOLS & OFFICE SUPPLIES</Link>
          <Link to={`/products/categories/Home Decor`}>Arts & Crafts</Link>
          </Flex>
        </Box>
        <Box>
      
        </Box>
      </SimpleGrid>
      
        <SimpleGrid columns={2}  justifyContent='center' textAlign='center' display={{base:"grid",md:"none"}}>
        
        <Link to={`/products/categories/mens watch`}>
        <Box w='70%'m='auto'>
          <Image m='auto' w='90%' src='https://www.meanbuy.com/assets/img/india/icons/cats/Accessories.png'></Image>
          <Text>Acessories</Text>
         </Box>
        </Link>

         <Link to={`/products/categories/electronics`}><Box w='70%'m='auto'>
         <Image m='auto' w='90%' src='https://www.meanbuy.com/assets/img/india/icons/cats/Electronics.png'></Image>
          <Text>Electronics</Text>
         </Box>
         </Link>

         <Link to={`/products/categories/Home Decor`}>
         <Box w='70%'m='auto'>
         <Image m='auto' w='90%'  src='https://www.meanbuy.com/assets/img/india/icons/cats/Essentials.png'></Image>
          <Text>Essentials</Text>
         </Box>
         </Link>

        <Link  to={`/products/categories/Home Decor`}>
        <Box w='70%'m='auto'>
         <Image m='auto' w='90%'  src='https://www.meanbuy.com/assets/img/india/icons/cats/FlashSale.png'></Image>
          <Text>Flash Sale</Text>
         </Box>
        </Link>

         <Link  to={`/products/categories/Ballet Flats`}>
         <Box w='70%'m='auto'>
         <Image m='auto' w='90%'  src='https://www.meanbuy.com/assets/img/india/icons/cats/FootWear.png'></Image>
          <Text>Foot Wear</Text>
         </Box>
         </Link>

           <Link to={`/products/categories/Home Decor`}>
           <Box w='70%'m='auto'>
         <Image m='auto' w='90%'  src='https://www.meanbuy.com/assets/img/india/icons/cats/HomeLiving.png'></Image>
          <Text>Home & Living</Text>
         </Box>
           </Link>

          <Link to={`/products/categories/Disney`}>
          <Box w='70%'m='auto'>
         <Image m='auto' w='90%'  src='https://www.meanbuy.com/assets/img/india/icons/cats/KidsMom.png'></Image>
          <Text>Kids & Mom</Text>
         </Box>
          </Link>

          <Link to={`/products/categories/Home Decor`}>
          <Box w='70%'m='auto'>
         <Image m='auto' w='90%'  src='https://www.meanbuy.com/assets/img/india/icons/cats/MeanbuyDeals.png'></Image>
          <Text>Meanbuy Deals</Text>
         </Box>
          </Link>

           <Link to={`/products/categories/Mobiles Accessories`}>
           <Box w='70%'m='auto'>
         <Image m='auto' w='90%'  src='https://www.meanbuy.com/assets/img/india/icons/cats/MobilesTabs.png'></Image>
          <Text>Mobile & Tabs</Text>
         </Box>
           </Link>

         <Link to={`/products/categories/Disney`}>
         <Box w='70%'m='auto'>
         <Image m='auto' w='90%'  src='https://www.meanbuy.com/assets/img/india/icons/cats/SchoolsOfficeSupplies.png'></Image>
          <Text>School & Office Supplies</Text>
         </Box>
         </Link>
         
         </SimpleGrid>

      </Box>
    )
}

export default CategoriesDrop;