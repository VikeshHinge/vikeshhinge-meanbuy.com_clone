
import './App.css';
import Admin from './Admin/admin';
import Navbar from './pages/navbar';
import Home from "./pages/Home"
import Productlist from "./pages/Productlist"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './pages/Footer';
function App() {
  return (
    <div className="App">
     {/* <Navbar/>  */}
       <Home/>  
      <Admin/>
     <Footer/>
    </div>
  ); 
}

export default App;
