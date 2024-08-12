import { useEffect, useState } from 'react'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import 'animate.css';
import Admin from './Component/Admin'
import toast, { Toaster } from 'react-hot-toast';
import PagenotFound from './Component/PagenotFound'
import Order from './Component/Admin/Order'

import Product from './Component/Admin/Product'
import Customers from './Component/Admin/Customers'
import Payments from './Component/Admin/Payments'
import Dashboard from './Component/Admin/Dashboard'
import Settings from './Component/Admin/Settings'
import Home from './Component/Home'
import ProductList from './Component/ProductList'
import Cotogries from './Cotogries'
import Login from './Component/Login'

import Signup from './Component/Signup'
import Contact from './Component/Contact'
import Guard from './Component/Guard/Guard';
import Cart from './Component/Cart';
import Profile from './Component/Profile';



function App() {
 
  return (
    <>
    
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home/>} />
  
    <Route path='/category' element={<Cotogries/>}/>
    <Route path='/contact-us' element={<Contact/>} />
    <Route path="/products" element={<ProductList/>}/>
    <Route path='/cart' element={<Cart/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route element={<Guard/>}>

    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
  </Route>
     <Route path="/admin">
   
    <Route path="product" element={<Product/>}/>
    <Route path="order" element={<Order/>}/>
    <Route path='customers' element={<Customers/>} />
    <Route path='payment' element={<Payments/>} />
    <Route path='dashboard' element={<Dashboard/>} />
     
    <Route path='settings' element={<Settings/>}/>
    <Route path='auth' element={<Admin/>}/>

    </Route>
      <Route path='*' element={<PagenotFound/>}/>
    </Routes>
    <Toaster />
    </BrowserRouter>
  
    </>
  )
}

export default App
