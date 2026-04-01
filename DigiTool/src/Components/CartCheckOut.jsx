import { useState } from "react";

const initialItems = [
  { id: 1, name: "Product 1", price: 20, qty: 1 },
  { id: 2, name: "Product 2", price: 35, qty: 1 },
];

export default function CartCheckout() {
  const [cart, setCart] = useState(initialItems);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all fields");
      return;
    }
    alert("Order placed successfully!");
    setCart([]);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      {/* Cart Section */}
      <div className="bg-white shadow-lg rounded-2xl p-5">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQty(item.id, "dec")}
                  className="px-2 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => handleQty(item.id, "inc")}
                  className="px-2 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-semibold">
                  ${item.price * item.qty}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <div className="mt-4 text-right font-bold text-lg">
          Total: ${total}
        </div>
      </div>

      {/* Checkout Section */}
      <div className="bg-white shadow-lg rounded-2xl p-5">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <button
          onClick={handleCheckout}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
