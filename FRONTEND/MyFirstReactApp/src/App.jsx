import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";


import { BrowserRouter, Routes, Route } from "react-router-dom";



function    App(){
return (
  <>
  <BrowserRouter>
  <Header />

  
  
  <Routers>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/product" element={<Product />} />
  </Routers>
  </BrowserRouter>
  </>
)
}

export  default App;