import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Checkout from '../pages/Checkout/Checkout';
import Cart from '../pages/Cart/Cart';
import Shop from '../pages/Shop/Shop';
import Privacy from '../pages/Privacy/Privacy';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={ <Navigate to='home' /> } /> 
        <Route path='home' element={ <Home /> } /> 
        <Route path='shop' element={ <Shop /> } /> 
        <Route path='shop/:id' element={ <ProductDetails /> } /> 
        <Route path='cart' element={ <Cart /> } /> 
        <Route path='checkout' element={ <Checkout /> } /> 
        <Route path='login' element={ <Login /> } /> 
        <Route path='signup' element={ <Signup /> } /> 
        <Route path='privacy' element={ <Privacy /> } /> 
    </Routes>
  )
}

export default Routers