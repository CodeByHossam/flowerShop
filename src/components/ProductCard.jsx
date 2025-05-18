import React from "react";

const ProductCard = ({ title, image, price, type }) => {
  return (
    <div className=" overflow-hidden rounded-xl border border-gray-200 shadow-md transition-transform hover:scale-[1.02] bg-white">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square  object-cover"
      />
      <div className="p-4 text-center">
        <p className="font-inter text-sm text-gray-400">{type}</p>
        <h3 className="font-inter mt-2 text-lg font-bold text-gray-800">{title}</h3>
        <p className="mt-1 font-inter text-subColor">{price}</p>
        <button className="mt-4 rounded-full bg-accentColor px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
