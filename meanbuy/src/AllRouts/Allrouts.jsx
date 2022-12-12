import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import ProductDetail from "../pages/Productdetail";
import Privateroute from "../AuthContext/Privateroute";
import Cart from "../pages/Cartpg";
import Login from "../pages/Login";
import Signup from "../pages/UserLoginSignup";
import UserAuth from '../pages/UserLoginSignup'


const Allrouts = () => {

    return( 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products"></Route>
          <Route path="/products/:id" element={<ProductDetail/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/signup" element={<UserAuth/>}></Route>
          <Route path="/login" element={<UserAuth/>}></Route>
        </Routes>
    )
}

export default Allrouts;