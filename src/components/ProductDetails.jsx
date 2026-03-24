import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(function () {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(function (res) {
        setProduct(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{product.title}</h1>
      <img src={product.image} width="200px" />
      <p>{product.description}</p>
      <h3>Price: ₹ {product.price}</h3>
    </div>
  );
}
export default ProductDetails;