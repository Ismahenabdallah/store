import { Routes, Route} from "react-router-dom";

import ByItem from "../pages/ByItem";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Store from "../pages/Store";

const Router = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home/>}></Route>
  
      <Route  path="/store" element={<Store/>}></Route>
      <Route  path="/:name" element={<ByItem/>}></Route>
      <Route  path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default Router
