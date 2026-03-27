import { Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products" element={<ProductList/>} />
      <Route path="/product/:id" element={<ProductDetails/>} />
    </Routes>
  );
}
export default App;