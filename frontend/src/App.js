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
import Wishlist from './components/customer/wishlist';
import Profile from './components/customer/profile';
import ChangePassword from './components/customer/changepassword';
import AddressList from './components/customer/addresslist';
import AddAddress from './components/customer/AddAddress';

// seller panel
import SellerDashboard from './components/seller/SellerDashboard';
import SellerLogin from './components/seller/SellerLogin';
import SellerRegister from './components/seller/SellerRegister';



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
        <Route path='/order/success' element={<OrderSuccess />} />
        <Route path='/order/failure' element={<OrderFailure />} />

        {/* customer panel */}
        <Route path='/customer/login' element={<Login  />} />
        <Route path='/customer/register' element={<Register />} />
        <Route path='/customer/dashboard' element={<Dashboard />} />
        <Route path='/customer/orders' element={<Orders />} />
        <Route path='/customer/wishlist' element={<Wishlist />} />
        <Route path='/customer/profile' element={<Profile />} />
        <Route path='/customer/change-password' element={<ChangePassword />} />
        <Route path='/customer/address-list' element={<AddressList />} />
        <Route path='/customer/add-address' element={<AddAddress />} />

        {/* seller panel  */}
        <Route path='/seller/login' element={<SellerLogin  />} />
        <Route path='/seller/register' element={<SellerRegister/>} />
        <Route path='/seller/dashboard' element={<SellerDashboard />} />
        
      </Routes>
      <Footer />
     
    </>
  );
}

export default App;
