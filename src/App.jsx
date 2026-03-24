import React from "react";
import {  Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      </>
  );
}
export default App;
