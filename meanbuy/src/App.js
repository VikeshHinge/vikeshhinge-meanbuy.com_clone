
import './App.css';
import Admin from './Admin/admin';
import Home from "./pages/Home";
import ProductDetail from './pages/Productdetail';
import Productlist from "./pages/Productlist"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './pages/Footer';
import Allrouts from './AllRouts/Allrouts';
import Signup from './pages/UserLoginSignup'; 
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import UserAuth from './pages/UserLoginSignup';
import Cart from './pages/Cartpg';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
// https://twisty-silly-ring.glitch.me/product
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Allrouts/> 
       <Footer/> 
    </div>
  ); 
}

export default App;
