import React from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import pho1 from "../assets/products/product (1).png";
import pho2 from "../assets/products/product (2).png";
import pho3 from "../assets/products/product (3).png";
import pho4 from "../assets/products/product (4).png";
import pho5 from "../assets/products/product (5).png";
import pho6 from "../assets/products/product (6).png";
import pho7 from "../assets/products/product (7).png";
import pho8 from "../assets/products/product (8).png";

const products = [
  {
    id: "product-1",
    title: "Rose Bouquet",
    price: "$39",
    image: pho1,
    type: "Bouquet",
  },
  {
    id: "product-2",
    title: "Spring Vase",
    price: "$45",
    image: pho2,
    type: "Vase",
  },
  {
    id: "product-3",
    title: "Orchid Mix",
    price: "$55",
    image: pho3,
    type: "Bouquet",
  },
  {
    id: "product-4",
    title: "Pastel Harmony",
    price: "$49",
    image: pho4,
    type: "Vase",
  },
  {
    id: "product-5",
    title: "Paradise Garden",
    price: "$43",
    image: pho5,
    type: "Vase",
  },
  {
    id: "product-6",
    title: "Sky Heaven",
    price: "$41",
    image: pho6,
    type: "Vase",
  },
  {
    id: "product-7",
    title: "Sunshine Delight",
    price: "$37",
    image: pho7,
    type: "Bouquet",
  },
  {
    id: "product-8",
    title: "Lavender Dreams",
    price: "$46",
    image: pho8,
    type: "Vase",
  },
];
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      debounceDelay: 100,
       easing: "ease-in-out",
      once: true,
      offset: 100,
    });
    return () => {
      // cleanup setting
      AOS.refreshHard();
    };
  });

  return (
    <section
      id="products"
      className="bg-main-color max-w-maxAppWidth mx-auto my-16 scroll-m-10 px-4 pt-6 sm:px-10 md:scroll-m-20"
    >
      <h2 className="font-parisienne text-subColor text-center text-2xl sm:text-3xl">
        Our Floral Collection
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            data-aos="flip-right"
            data-aos-delay={index * 100}
          >
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              type={product.type}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
