import React from "react";
import { useNavigate } from "react-router-dom";
import electronicsImg from "./images/electronic.jpg";
import jeweleryImg from "./images/jewelery.jpg";
import menImg from "./images/men.jpg";
import womenImg from "./images/women.jpg";

function HomePage() {
  const navigate = useNavigate();

  const categories = [
    {
      label: "Electronics",
      value: "electronics",
      image: electronicsImg,
    },
    {
      label: "Jewelery",
      value: "jewelery",
      image: jeweleryImg,
    },
    {
      label: "Men's Clothing",
      value: "men's clothing",
      image: menImg,
    },
    {
      label: "Women's Clothing",
      value: "women's clothing",
      image: womenImg,
    },
  ];

  const handleClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

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
          <button onClick={() => navigate("/products")}>
            All Products
          </button>
          <button onClick={() => alert("Create Account Page")}>
            Create Account
          </button>
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
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-gray-500 mt-2">
          Select a category to explore products
        </p>
      </div>
      <div className="px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => handleClick(cat.value)}
              className="relative cursor-pointer rounded-xl overflow-hidden group shadow-md"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold text-center px-2">
                  {cat.label}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
export default HomePage;