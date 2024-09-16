import React, { useEffect } from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/layouts/Menu";
import Footer from "./components/layouts/Footer";
import Home from "./components/layouts/Home";
import Header from "./components/layouts/Header";
import  Login from "./components/users/Login";
import  Register from "./components/users/Register";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Profile from "./components/users/Profile";
import UpdateProfile from "./components/users/UpdateProfile";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import Cart from "./components/cart/Cart";
import OrderSuccess from "./components/cart/OrderSuccess";
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";

export default function App() {

  //dispatched exactly once when the component is first rendered, and check if user is authenticated or not
  console.log(store);
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);

  

  return (
  <BrowserRouter>
  <div className="App">
    <Header/>
    <div className="container container-fluid">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/eats/stores/:id/menus" element={<Menu/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/user/signup" element={<Register/>}/>
        <Route path="/users/me" element={<Profile/>}/>
        <Route path="/users/me/update" element={<UpdateProfile/>}/>
        <Route path="/user/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/users/resetpassword/:token" element={<NewPassword/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<OrderSuccess/>}/>
        <Route path="/eats/orders/me/myOrders" element={<ListOrders/>}/>
        <Route path="/eats/orders/:id" element={<OrderDetails/>}/>
        <Route path="*" element={<h1>The page does not exist</h1>}/>

      </Routes>
    </div>
    <Footer/> 
    <Footer/> 
  </div>
  </BrowserRouter>
  
  );
}

