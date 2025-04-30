import {Routes,Route} from 'react-router-dom'
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Headers";
import Footer from "./components/footer";
import Home from "./components/home";
import Categories from './components/categories';
import ProductCategory from './components/productCategory';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/productdetail';
import Checkout from './components/Checkout';
import OrderSuccess from './components/orderSuccess';
import OrderFailure from './components/orderFailure';

// {/* customer panel */}
import Register from './components/customer/Register';
import Login from './components/customer/login';
import Dashboard from './components/customer/dashboard';
import Orders from './components/customer/orders';

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
        <Route path='/customer/register' element={<Register />} />
        <Route path='/order/success' element={<OrderSuccess />} />
        <Route path='/order/failure' element={<OrderFailure />} />

        {/* customer panel */}
        <Route path='/customer/login' element={<Login  />} />
        <Route path='/customer/dashboard' element={<Dashboard />} />
        <Route path='/customer/orders' element={<Orders />} />
      </Routes>
      <Footer />
     
    </>
  );
}

export default App;
