import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";

    if (category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    axios.get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));

  }, [category]);

  return (
    <div className="p-6 font-serif bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Product List
      </h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setCategory("all")}
          className={`px-4 py-2 border ${
            category === "all" ? "bg-black text-white" : ""
          }`}
        >
          All
        </button>

        <button
          onClick={() => setCategory("men's clothing")}
          className={`px-4 py-2 border ${
            category === "men's clothing" ? "bg-black text-white" : ""
          }`}
        >
          Mens Wear
        </button>

        <button
          onClick={() => setCategory("women's clothing")}
          className={`px-4 py-2 border ${
            category === "women's clothing" ? "bg-black text-white" : ""
          }`}
        >
          Womens Wear
        </button>
        <button
          onClick={() => setCategory("jewelery")}
          className={`px-4 py-2 border ${
            category === "jewelery" ? "bg-black text-white" : ""
          }`}
        >
          Jewelery
        </button>
        <button
          onClick={() => setCategory("electronics")}
          className={`px-4 py-2 border ${
            category === "electronics" ? "bg-black text-white" : ""
          }`}
        >
          Electronics
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl shadow-sm p-4 flex flex-col"
          >
            <div className="h-40 flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-base font-medium mb-2 line-clamp-2">
                {product.title}
              </h3>

              <div className="flex-grow"></div>

              <div>
                <p className="text-lg font-semibold mb-3">
                  ₹ {product.price}
                </p>

                <Link to={`/product/${product.id}`}>
                  <button className="w-full border py-2 hover:bg-black hover:text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;