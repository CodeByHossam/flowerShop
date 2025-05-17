import React from "react";
import myimage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="hero "
      className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center text-center sm:mt-20 sm:min-h-[calc(100vh-100px)] sm:justify-start sm:gap-5 lg:mt-0"
    >
      <div
        id="hero-up"
        className="hero-up mt-2 flex flex-col-reverse items-center justify-end sm:mt-10 sm:flex-row md:gap-8"
      >
        <div
          id="hero-up-left"
          className="mt-6 sm:mt-1 sm:w-1/2 md:flex md:flex-col md:items-center md:justify-center"
        >
          <h1 className="font-parisienne text-xl font-bold text-red-800 sm:text-2xl md:text-3xl">
            Bloom With Elegance
          </h1>
          <h2 className="font-inter sm:text-md mt-4 text-xl font-semibold text-gray-800 md:mt-10 md:px-1 md:text-2xl lg:px-18">
            Handcrafted Floral Designs for Every Occasion
          </h2>

          <p className="md:text-md font-inter mt-4 px-4 text-sm font-bold sm:px-25 md:mt-6 md:px-5 md:text-lg">
            Fresh blooms, custom arrangements, and same-day delivery. Let
            nature’s beauty speak for you.
          </p>
          <button className="font-inter bg-accentColor mt-6 rounded-full px-6 py-3 text-white shadow-md transition hover:bg-rose-700 md:mt-10">
            Shop Now
          </button>
        </div>

        <div id="hero-up-right" className="h-52 overflow-hidden sm:h-1/1">
          <img
            src={myimage}
            alt="image"
            className="mx-auto aspect-square h-full max-w-md object-cover"
          />
        </div>
      </div>
      <div className="hero-down absolute bottom-0 left-0 mt-10 hidden w-full bg-rose-950 py-6 text-white shadow-inner sm:block">
        <div className="max-w-myapp mx-auto flex flex-wrap justify-around gap-6 px-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl">🚚</span>
            <p className="font-inter mt-2 text-sm">Same-Day Delivery</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">🌸</span>
            <p className="font-inter mt-2 text-sm">Handcrafted Designs</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">💬</span>
            <p className="font-inter mt-2 text-sm">Free Floral Advice</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
