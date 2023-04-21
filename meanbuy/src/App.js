
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './pages/Footer';
import Allrouts from './AllRouts/Allrouts';
import Navbar from './pages/Navbar';
import Admin from './pages/Admin/Dashboard';

import { useState } from 'react';
let light = {backgroundColor:'#ffffff'}
// https://twisty-silly-ring.glitch.me/product
function App() {
  const [bg,setBg] = useState(true)

   let darkmode = {color:'white',backgroundColor:'#1a202c'}

   const changeTheme = () => {
        console.log(bg)
       bg?setBg(false):setBg(true)
   }

  return (
    <div className="App" style={bg?light:darkmode}>
       <Navbar changeTheme={changeTheme} bg={bg}/>
             <Admin/>
        {/* <Allrouts/>   */}
       {/* <Footer bg={bg}/>  */}
    </div>
  ); 
}

export default App;
