import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import ProductDetail from "../pages/Productdetail";
import Privateroute from "../AuthContext/Privateroute";
import Cart from "../pages/Cartpg";
import Login from "../pages/Login";



const Allrouts = () => {

    return(
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products"></Route>
          <Route path="/products/:id" element={<ProductDetail/>}></Route>
          <Route path="/cart" element={<Privateroute><Cart/></Privateroute>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}

export default Allrouts;