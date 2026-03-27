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
    return (
      <h2 className="text-center mt-10 font-serif text-xl">
        Loading...
      </h2>
    );
  }

  return (
    <div className="p-6 font-serif bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 border px-4 py-2 text-sm hover:bg-black hover:text-white transition"
      >
        ← Back
      </button>

      <div className="bg-white rounded-xl shadow-sm p-6 grid md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-auto">
            <p className="text-2xl font-bold mb-4">
              ₹ {product.price}
            </p>

            <button className="w-full border border-black py-3 hover:bg-black hover:text-white transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;