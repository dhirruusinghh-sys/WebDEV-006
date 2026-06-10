import React from "react";
import Homw from "./Pages/Home";
import Product from "./Pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homw />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;