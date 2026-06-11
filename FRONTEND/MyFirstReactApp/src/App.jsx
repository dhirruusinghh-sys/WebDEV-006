import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductStore from "./components/ProductStore";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
         <div className="flex gap-6 justify-center flex-wrap p-6">
             <ProductStore />
             <ProductStore />
             <ProductStore />
             <ProductStore />
             <ProductStore />
             <ProductStore />
          </div>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product-store" element={<ProductStore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;