
import './App.css';
import Admin from './Admin/admin';
import Navbar from './pages/navbar';
import Home from "./pages/Home";
import ProductDetail from './pages/Productdetail';
import Productlist from "./pages/Productlist"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './pages/Footer';
import Allrouts from './AllRouts/Allrouts';
import Signup from './pages/UserLoginSignup';
import Navbar2 from './pages/Navbar2';
import Login from './pages/Login';
import UserAuth from './pages/UserLoginSignup';
//https://twisty-silly-ring.glitch.me/product
function App() {
  return (
    <div className="App">
      <Navbar2/>  
     {/* <Admin/> */}
       {/* <Allrouts/>
       <Footer/> */}
      {/* <Signup/> */}
       <UserAuth/>
    </div>
  ); 
}

export default App;
