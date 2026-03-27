import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get("category");

    let url = "https://fakestoreapi.com/products";

    if (selectedCategory) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }

    axios.get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));

  }, [location.search]);

  if (products.length === 0) {
    return (
      <h2 className="text-center mt-10 font-serif text-xl">
        Loading...
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-serif">

      <div className="flex justify-between items-center px-6 py-4 bg-white border-b">
        <h1
          className="text-2xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Products
        </h1>

        <div className="flex gap-6 items-center">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/products")}>All Products</button>

          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              navigate("/login");
            }}
            className="border px-4 py-1 text-sm hover:bg-black hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="px-6 mt-6 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="border px-4 py-2 text-sm hover:bg-black hover:text-white"
        >
          ← Back
        </button>
      </div>

      <h1 className="text-2xl font-semibold px-6 mb-6">
        Product List
      </h1>
      <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-xl p-4 flex flex-col">
            <div className="h-40 flex items-center justify-center mb-4">
              <img src={product.image} className="h-full object-contain" />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-base mb-2 line-clamp-2">
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