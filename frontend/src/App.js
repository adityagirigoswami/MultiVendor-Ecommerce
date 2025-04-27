import {Routes,Route} from 'react-router-dom'
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "bootstrap";
import Header from "./components/Headers";
import Footer from "./components/footer";
import Home from "./components/home";
import Categories from './components/categories';
import ProductCategory from './components/productCategory';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/productdetail';
import Checkout from './components/Checkout';


function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/AllProducts' element={<AllProducts />} />
        <Route path='/categories/:categories_slug/:categories_id' element={<ProductCategory />} />
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail />} />
        <Route path='/checkout' element={<Checkout />} />
        


 

      </Routes>
      <Footer />
     
    </>
  );
}

export default App;
