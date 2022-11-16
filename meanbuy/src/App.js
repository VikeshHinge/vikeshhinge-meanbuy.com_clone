
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

import Navbar2 from './pages/Navbar2';
function App() {
  return (
    <div className="App">
     <Navbar2/> 
       <Allrouts/>
       <Footer/>
    </div>
  ); 
}

export default App;
