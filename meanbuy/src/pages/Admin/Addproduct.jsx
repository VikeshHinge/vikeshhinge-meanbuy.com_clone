import axios from "axios"
import {useState} from "react"
import {Box,Button,Input,Textarea,Flex,Text} from "@chakra-ui/react"
let proobj = {
    title: "",
      img1: "",
      img2:"",
      img3:"",
      img4:"", 
      img5:"",
      img6:"",
      vid:"",
      categories:"",
      brand:"",
      price:"",
      discount:"",
      rating:"",
       color:"",
      description:"",
      details:""
}

let Admin = () => {
let [prodata,setprodata] = useState(proobj)

let handelchange = (e) => {
let {name,value,type} = e.target;
console.log(name,value,type)
let valpro = type === "number" ? Number(value) : value;
//console.log(valpro)
setprodata({...prodata,[name]:valpro})
}

let addproduct = () => {
    //console.log(prodata)
   axios.post(`https://twisty-silly-ring.glitch.me/product`,{
    title: prodata.title,
    img1: prodata.img1,
    img2:prodata.img2,
    img3:prodata.img3,
    img4:prodata.img4,
    img5:prodata.img5,
    img6:prodata.img6,
    vid:prodata.vid,
    categories:prodata.categories,
    brand:prodata.brand,
    price:prodata.price,
    discount:prodata.discount,
    rating:prodata.rating,
     color:prodata.color,
    description:prodata.description,
    details:prodata.details
   })
   setprodata(proobj)
}

let {title,img1,vid,categories,brand,discount,rating,description,details,price}=prodata;
   return(
          <Box  textAlign='left'> 
            <Text color='orange' fontSize='xl'>Add New Product</Text>
            <Input size='sm' mb='10px' type="text" name='title' value={title} placeholder="title" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="text" name='img1' value={img1}  placeholder="img1" onChange={handelchange}  /><br /> 
            <Input size='sm' mb='10px' type="text" name='vid' value={vid}  placeholder="video link" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="text" name='categories' value={categories}  placeholder="cate" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="text" name='brand' value={brand}  placeholder="brand" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="number" name='discount' value={discount}  placeholder="discount" onChange={handelchange}  /><br />
            <Input size='sm' mb='10px' type="number" name='rating' value={rating}  placeholder="rating" onChange={handelchange}/><br/>
            <Input size='sm' mb='10px' type="number" name='price' value={price}  placeholder="price" onChange={handelchange}/><br/>
            <Flex>
            <Textarea name="description" id="" cols="15" rows="8"  onChange={handelchange} value={description} placeholder="description"></Textarea>
            <Textarea name="details" id="" cols="15" rows="8"value={details}   placeholder="details"  onChange={handelchange}  ></Textarea>
            </Flex>
            <Button  w='100%' mt='10px' onClick={addproduct}bg='#f50269' >Submit</Button><br />
      </Box>
   )
}

export default Admin ;