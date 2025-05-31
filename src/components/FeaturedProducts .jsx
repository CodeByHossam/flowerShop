import React from "react";
import fproduct1 from "../assets/featuredProducts/feature1.png";
import fproduct2 from "../assets/featuredProducts/feature2.png";
import fproduct3 from "../assets/featuredProducts/feature3.png";
import fproduct4 from "../assets/featuredProducts/feature4.png";
import fproduct5 from "../assets/featuredProducts/feature5.png";
import fproduct6 from "../assets/featuredProducts/feature6.png";

const products = [
  { name: "Romantic Roses", price: "$39", image: fproduct1 },
  { name: "Spring Bliss", price: "$45", image: fproduct2 },
  { name: "Orchid Elegance", price: "$55", image: fproduct3 },
  { name: "Sunflower Charm", price: "$36", image: fproduct4 },
  { name: "Peony Passion", price: "$48", image: fproduct5 },
  { name: "Lavender Love", price: "$42", image: fproduct6 },
];

const FeaturedProducts = () => {
  return (
    <section
      id="featured"
      className="bg-main-color max-w-maxAppWidth mx-auto my-16 px-4 sm:px-10"
    >
      <h2 className="font-parisienne text-subColor text-center text-2xl sm:text-3xl">
        Featured Bouquets
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map(({ name, price, image }) => (
          <div
            key={name}
            className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl"
          >
            <img
              src={image}
              alt={name}
              className="aspect-square w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-inter text-lg font-bold text-gray-800">
                {name}
              </h3>
              <p className="font-inter text-subColor mt-1">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
