import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import ProductDetail from "../pages/Productdetail";

const Allrouts = () => {

    return(
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products"></Route>
          <Route path="/products/:id" element={<ProductDetail/>}></Route>
        </Routes>
    )
}

export default Allrouts;