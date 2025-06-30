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
import Logout from './components/customer/logout';
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
import SellerProduct from './components/seller/SellerProduct';
import SellerAddProducts from './components/seller/SellerAddProudct';
import SellerOrders from './components/seller/SellerOrders';
import SellerCustomer from './components/seller/SellerCustomer';
import SellerReport from './components/seller/SellerReport';
import SellerProfile from './components/seller/SellerProfile';
import SellerChangePassword from './components/seller/SellerPassword';
import OrderConfirmation from "./components/OrderConfirmation"; // adjust path

import { useContext, useEffect } from "react";
import { AuthContext } from "./components/contexts/AuthContext";
import { setAuthContext } from "./utils/secureFetch";

import SearchResults from "./components/SearchResults";



function App() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    setAuthContext(authContext); // Just once
  }, [authContext]);

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#0d1117', color: '#c9d1d9' }}>
      <Header />

      <div className="flex-grow-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/category/:category_slug/:category_id' element={<ProductCategory />} />
          <Route path='/product/:product_slug/:product_id' element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order/success' element={<OrderSuccess />} />
          <Route path='/order/failure' element={<OrderFailure />} />

          {/* customer panel */}
          <Route path='/customer/login' element={<Login />} />
          <Route path='/customer/logout' element={<Logout />} />
          <Route path='/customer/register' element={<Register />} />
          <Route path='/customer/dashboard' element={<Dashboard />} />
          <Route path='/customer/orders' element={<Orders />} />
          <Route path='/customer/wishlist' element={<Wishlist />} />
          <Route path='/customer/profile' element={<Profile />} />
          <Route path='/customer/change-password' element={<ChangePassword />} />
          <Route path='/customer/address-list' element={<AddressList />} />
          <Route path='/customer/add-address' element={<AddAddress />} />

          <Route path="/order-confirmation" element={<OrderConfirmation />} />

          {/* seller panel */}
          <Route path='/seller/login' element={<SellerLogin />} />
          <Route path='/seller/register' element={<SellerRegister />} />
          <Route path='/seller/dashboard' element={<SellerDashboard />} />
          <Route path='/seller/products' element={<SellerProduct />} />
          <Route path='/seller/add-products' element={<SellerAddProducts />} />
          <Route path='/seller/orders' element={<SellerOrders />} />
          <Route path='/seller/customers' element={<SellerCustomer />} />
          <Route path='/seller/reports' element={<SellerReport />} />
          <Route path='/seller/profile' element={<SellerProfile />} />
          <Route path='/seller/change-password' element={<SellerChangePassword />} />

          <Route path="/search" element={<SearchResults />} />

        </Routes>
      </div>

      <Footer />
    </div>
  );
}


export default App;
