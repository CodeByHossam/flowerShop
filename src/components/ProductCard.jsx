import React from "react";

const ProductCard = ({ id, title, image, price, type }) => {
  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 0) + 1;
    } else {
      cartItems.push({ id, title, image, price, type, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 ease-in-out hover:border-rose-200 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4 text-center">
        <p className="font-inter text-sm text-gray-400">{type}</p>
        <h3 className="font-inter mt-2 text-lg font-bold text-gray-800 transition-colors duration-300 hover:text-rose-600">
          {title}
        </h3>
        <p className="font-inter text-subColor mt-1">{price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-accentColor mt-4 cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-rose-700 hover:shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
