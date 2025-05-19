import React from "react";

const ProductCard = ({ title, image, price, type }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-transform hover:scale-[1.02]">
      <img
        src={image}
        alt={title}
        className="aspect-square w-full object-cover"
      />
      <div className="p-4 text-center">
        <p className="font-inter text-sm text-gray-400">{type}</p>
        <h3 className="font-inter mt-2 text-lg font-bold text-gray-800">
          {title}
        </h3>
        <p className="font-inter text-subColor mt-1">{price}</p>
        <button className="bg-accentColor mt-4 rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
