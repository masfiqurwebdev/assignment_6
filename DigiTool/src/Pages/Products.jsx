import { useState } from "react";
import product from '../assets/products/portfolio.png'

const productsData = [
  { id: 1, name: "AI Writing Pro", price: 29 },
  { id: 2, name: "Design Templates Pack", price: 49 },
  { id: 3, name: "Premium Stock Assets", price: 19 },
  { id: 4, name: "Automation Toolkit", price: 79 },
  { id: 5, name: "Resume Builder Pro", price: 15 },
  { id: 6, name: "Social Media Content Kit", price: 39 },
];

export default function ProductsCartSection() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);
const isInCart = (id) => {
  return cart.some((item) => item.id === id);
};

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) return;
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">
        Premium Digital Tools
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Choose from our curated collection of premium digital products
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-5 py-2 rounded-full ${
            activeTab === "products"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className={`px-5 py-2 rounded-full ${
            activeTab === "cart" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* Products Section */}
      {activeTab === "products" && (
        <div className="grid md:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-4">Premium digital product</p>

              <p className="text-xl font-bold mb-4">${product.price}</p>

              <button
                onClick={() => addToCart(product)}
                disabled={isInCart(product.id)}
                className={`w-full py-2 rounded-full text-white transition ${
                  isInCart(product.id)
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90"
                }`}
              >
                {isInCart(product.id) ? "Added to Cart" : "Buy Now"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Section */}
      {activeTab === "cart" && (
        <div className="bg-white p-6 rounded-2xl shadow">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-3"
              >
               
                <div className="flex gap-3">
                  <img src={product} className="w-10" alt="product Image" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>

                  </div>
                  </div>

                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
