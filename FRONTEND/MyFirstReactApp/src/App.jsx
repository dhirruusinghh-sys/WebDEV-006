import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";


import {BrowserRouter , Routers, Route} from "react-router-dom";



function    App(){
return (
  <>
  <BrowserRouter>
  <Header />

  
  
  <Routers>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/product" element={<Product />} />
  </Routers>
  </BrowserRouter>
  </>
)
}

export  default App;