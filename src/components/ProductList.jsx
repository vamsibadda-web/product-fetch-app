import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (res) {
        setProducts(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map(function (product) {
          return (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
              }}
            >
              <img src={product.image} width="100%" height="150px" />
              <h3>{product.title.slice(0, 20)}...</h3>
              <p>₹ {product.price}</p>

              <Link to={`/product/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductList;