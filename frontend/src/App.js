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

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:slug/:id' element={<ProductCategory />} />
        <Route path='/AllProducts' element={<AllProducts />} />

      </Routes>
      <Footer />
     
    </>
  );
}

export default App;
