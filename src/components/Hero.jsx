import React from "react";
import myimage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="hero"
      className={
        "flex min-h-[calc(100vh-var(--heroDownBar))] w-full flex-col items-center justify-center text-center"
      }
    >
      <div
        id="hero-up"
        className="bg-main-color flex h-[calc(100vh-var(--heroDownBar))] flex-col-reverse items-center justify-center sm:mt-[-20%] sm:flex-row md:gap-2 lg:gap-10"
      >
        <div
          id="hero-content"
          className="sm:w-1/2 md:flex md:flex-col md:items-center md:justify-center"
        >
          <h1 className="font-parisienne mt-4 text-xl font-bold text-red-800 sm:text-2xl md:text-3xl lg:text-4xl">
            Bloom With Elegance
          </h1>
          <h2 className="font-inter sm:text-md mt-4 text-lg font-semibold text-gray-800 md:mt-6 md:px-1 md:text-2xl lg:px-10 lg:text-3xl">
            Handcrafted Floral Designs for Every Occasion
          </h2>

          <p className="md:text-md font-inter mt-4 px-4 text-sm sm:px-25 md:mt-6 md:px-5 md:text-lg lg:text-xl">
            Fresh blooms, custom arrangements, and same-day delivery. Let
            nature’s beauty speak for you.
          </p>
          <button
            onClick={() => {
              const productsSection = document.getElementById("products");
              productsSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-inter bg-accentColor mt-6 cursor-pointer rounded-full px-6 py-3 text-white shadow-md transition hover:bg-rose-800 md:mt-10"
          >
            Shop Now
          </button>
        </div>

        <div
          id="hero-photo-wrapper"
          className="mt-4 mb-4 h-52 overflow-hidden sm:mt-0 sm:h-1/2 lg:h-3/5"
        >
          <img
            src={myimage}
            alt="image"
            className="mx-auto aspect-square h-full max-w-md object-cover"
          />
        </div>
      </div>
      <div
        id="hero-down "
        className="absolute bottom-0 left-0 hidden min-h-[--heroDownBar] w-full bg-rose-950 text-white shadow-inner sm:block"
      >
        {/* Inner container with padding and max width */}
        <div className="max-w-maxAppWidth mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-around gap-6 text-center">
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
      </div>
    </section>
  );
}

export default Hero;
