import React from "react";

const Cart = () => {

  const productsData = [
  { id: 1, name: "AI Writing Pro", price: 29 },
  { id: 2, name: "Design Templates Pack", price: 49 },
  { id: 3, name: "Premium Stock Assets", price: 19 },
  { id: 4, name: "Automation Toolkit", price: 79 },
  { id: 5, name: "Resume Builder Pro", price: 15 },
  { id: 6, name: "Social Media Content Kit", price: 39 },
];
  return (
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

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
