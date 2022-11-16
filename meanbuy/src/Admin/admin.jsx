import axios from "axios"
import {useState} from "react"
import {Box,Button, Spacer} from "@chakra-ui/react"
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
   axios.post(`http://localhost:4000/product`,{
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

let {title,img1,img2,img3,img4,img5,img6,vid,categories,brand,discount,rating,color,description,details,price}=prodata;
   return(
      <Box bg='skyblue' pt='150px'>
         <h1>Add Product</h1>
         <Button style={{width:"200px",height:"50px",marginBottom:'30px'}} onClick={addproduct}bg='green.300' >Submit</Button><br />
            <input type="text" name='title' value={title} placeholder="title" onChange={handelchange}  /><br />
            <input type="text" name='img1' value={img1}  placeholder="img1" onChange={handelchange}  /><br />
            <input type="text" name='img2' value={img2}  placeholder="img2" onChange={handelchange}  /><br />
            <input type="text" name='img3' value={img3}  placeholder="img3" onChange={handelchange}  /><br />
            <input type="text" name='img4' value={img4}  placeholder="img4" onChange={handelchange}  /><br />
            <input type="text" name='img5' value={img5}  placeholder="img5" onChange={handelchange}  /><br />
            <input type="text" name='img6' value={img6}  placeholder="img6" onChange={handelchange}  /><br />
            <input type="text" name='vid' value={vid}  placeholder="video link" onChange={handelchange}  /><br />
            <input type="text" name='categories' value={categories}  placeholder="cate" onChange={handelchange}  /><br />
            <input type="text" name='brand' value={brand}  placeholder="brand" onChange={handelchange}  /><br />
            <input type="number" name='discount' value={discount}  placeholder="discount" onChange={handelchange}  /><br />
            <input type="number" name='rating' value={rating}  placeholder="rating" onChange={handelchange}/><br/>
            <input type="number" name='price' value={price}  placeholder="price" onChange={handelchange}/><br/>
            <input type="text" name='color' value={color}  placeholder="clr" onChange={handelchange}  /><br />
            <textarea name="description" id="" cols="30" rows="20"  onChange={handelchange} value={description} placeholder="description"></textarea>
            <textarea name="details" id="" cols="30" rows="20"value={details}   placeholder="details"  onChange={handelchange}  ></textarea>
            
      </Box>
   )
}

export default Admin ;