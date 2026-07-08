import { useState } from "react";
import { products } from "../data/products";
import {
  ShoppingCart,
  Check,
  Trash2,
} from "lucide-react";

export default function ProductCart() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) return;

    setCart([...cart, product]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="max-w-7xl mx-auto px-5 py-14">

      <div className="text-center mb-10">

        <h2 className="text-4xl font-bold">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 mt-3">
          Choose from our collection of premium digital products.
        </p>

        <div className="mt-8 inline-flex bg-gray-100 rounded-full p-1">

          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : ""
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2 rounded-full transition flex items-center gap-2 ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : ""
            }`}
          >
            Cart

            {cart.length > 0 && (
              <span className="bg-white text-purple-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

        </div>
      </div>

      {activeTab === "products" ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

          {products.map((product) => (

            <div
              key={product.id}
              className="border rounded-xl p-6 hover:shadow-lg duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${product.color}`}
              >
                {product.icon}
              </div>

              <h3 className="font-bold mt-4 text-lg">
                {product.title}
              </h3>

              <p className="text-3xl font-bold mt-3">
                ${product.price}
              </p>

              <ul className="space-y-2 mt-5">

                {product.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <Check size={16} className="text-green-500" />
                    {item}
                  </li>
                ))}

              </ul>

<button
  onClick={() => addToCart(product)}
  disabled={cart.some((item) => item.id === product.id)}
  className={`mt-6 w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
    cart.some((item) => item.id === product.id)
      ? "bg-green-600 cursor-not-allowed text-white"
      : "bg-purple-600 hover:bg-purple-700 text-white"
  }`}
>
  <ShoppingCart size={18} />

  {cart.some((item) => item.id === product.id)
    ? "Product Added "
    : "Buy Now"}
</button>
            </div>

          ))}

        </div>
      ) : (
        <div className="border rounded-xl p-6 max-w-3xl mx-auto">

          <h2 className="font-bold text-xl mb-6">
            Your Cart
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-10">

              <ShoppingCart
                size={60}
                className="mx-auto text-gray-300"
              />

              <h3 className="text-xl mt-5">
                Your cart is empty
              </h3>

              <button
                onClick={() => setActiveTab("products")}
                className="mt-5 bg-purple-600 text-white px-6 py-3 rounded-lg"
              >
                Browse Products
              </button>

            </div>
          ) : (
            <>
              <div className="space-y-4">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex justify-between items-center border rounded-lg p-4"
                  >
                    <div className="flex gap-3 items-center">

                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p>${item.price}</p>
                      </div>

                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                ))}

              </div>

              <div className="flex justify-between text-xl font-bold mt-8">

                <span>Total</span>

                <span>${total}</span>

              </div>

              <button
                className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}