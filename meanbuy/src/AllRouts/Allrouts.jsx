import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import ProductDetail from "../pages/Productdetail";
import Privateroute from "../AuthContext/Privateroute";
import Cart from "../pages/Cartpg";
import UserAuth from '../pages/UserLoginSignup'
import ProductPage from "../pages/ProductPg/ProductPage";
import UserPage from "../pages/UserInfo/UserPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import Dashboard from "../pages/Admin/Dashboard";
import AdminProduct from "../pages/Admin/AdminProduct";
import CoustomerPage from "../pages/Admin/CoustomerPage";
import AdminOrderPage from "../pages/Admin/AdminOrderPage";
import Adminlogin from "../pages/Admin/AdminAuth/Adminlogin";
import AdminPrivateroute from "../pages/Admin/AdminAuth/AdminPrivateRoute";
 
const Allrouts = () => {

    return( 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products/categories/:cate" element={<ProductPage/>}></Route>
          <Route path="/product/:id" element={<ProductDetail/>}></Route>
          <Route path="/cart" element={<Privateroute><Cart/></Privateroute>}></Route>
          <Route path="/signup" element={<UserAuth/>}></Route>
          <Route path="/login" element={<UserAuth/>}></Route>
          <Route path="/userprofile" element={<UserPage/>}> </Route>
          <Route path="/checkout" element={<CheckoutPage/>}  ></Route>
          <Route path="/admin" element={<AdminPrivateroute><Dashboard/></AdminPrivateroute>} ></Route>
          <Route path='/admin/productupdates' element={<AdminProduct/>} ></Route>
          <Route path='/admin/coustomers' element={<CoustomerPage/>} ></Route>
          <Route path='/admin/orders'  element={<AdminOrderPage/>} ></Route>
          <Route path='/adminlogin' element={<Adminlogin/>} ></Route>
        </Routes>
    )
}

export default Allrouts;