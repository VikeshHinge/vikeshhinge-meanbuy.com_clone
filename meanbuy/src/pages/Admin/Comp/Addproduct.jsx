import axios from "axios"
import {useState} from "react"
import {Box,Button,Input,Textarea,Flex,Text} from "@chakra-ui/react";

let proobj = {
      title: "",
      img1: "",
      categories:"",
      brand:"",
      price:"",
      discount:"",
      rating:"",
      product_quantity:'',
      description:"",
      details:""
}

let AddProduct = () => {
let [prodata,setprodata] = useState(proobj)

let handelchange = (e) => {
let {name,value,type} = e.target;
console.log(name,value,type)
let valpro = type === "number" ? Number(value) : value;
//console.log(valpro)
setprodata({...prodata,[name]:valpro})
}

let addproduct = async() => {
    console.log(prodata)
  let data = await axios.post(`https://busy-worm-jewelry.cyclic.app/product/addproduct`,{
    title: prodata.title,
    img1: prodata.img1,
    categories:prodata.categories,
    brand:prodata.brand,
    price:prodata.price,
    discount:prodata.discount,
    rating:prodata.rating,
    product_quantity:prodata.product_quantity,
    description:prodata.description,
    details:prodata.details
   })
   console.log(data)
   setprodata(proobj)
}

let {title,img1,product_quantity,categories,brand,discount,rating,description,details,price}=prodata;
   return(
          <Box  textAlign='left' p='10px' position='sticky' top='10px' h='fit-content'> 
            <Text textAlign='center' bg='orange' fontSize='lg' mb='5px'>Add New Product</Text>
            <Input size='sm' mb='10px' type="text" name='title' value={title} placeholder="title" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="text" name='img1' value={img1}  placeholder="img1" onChange={handelchange}  /><br /> 
            <Input size='sm' mb='10px' type="number" name='product_quantity' value={product_quantity}  placeholder="product_quantity" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="text" name='categories' value={categories}  placeholder="cate" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="text" name='brand' value={brand}  placeholder="brand" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="number" name='discount' value={discount}  placeholder="discount" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="number" name='rating' value={rating}  placeholder="rating" onChange={handelchange}/><br/>
            <Input size='sm' mb='10px' type="number" name='price' value={price}  placeholder="price" onChange={handelchange}/><br/>
            <Flex>
            <Textarea name="description" id="" cols="15" rows="7"  onChange={handelchange} value={description} placeholder="description"></Textarea>
            <Textarea name="details" id="" cols="15" rows="7"value={details}   placeholder="details"  onChange={handelchange}  ></Textarea>
            </Flex>
            <Button  w='100%' mt='10px' onClick={addproduct}bg='#f50269' >Submit</Button><br />
      </Box>
   )
}

export default AddProduct ;