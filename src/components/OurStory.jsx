import React from "react";
import storyImage from "../assets/storyimage.jpg"; // Make sure you have this image in assets

const OurStory = () => {
  return (
    <section
      id="ourstory"
      className="max-w-maxAppWidth bg-main-color flex min-h-screen w-full scroll-m-7 flex-col-reverse items-center justify-center md:scroll-m-10 lg:flex-row"
    >
      {/* Image Section */}
      <div className="aspect-square w-full overflow-hidden md:w-70/100 lg:w-1/2">
        <img
          src={storyImage}
          alt="Our Flower Studio"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full px-6 py-12 text-center sm:px-12 sm:text-left lg:w-1/2">
        <h2 className="font-parisienne text-subColor text-3xl sm:text-4xl">
          Our Story
        </h2>
        <p className="font-inter mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
          At Flower Shop, every bouquet is a story waiting to bloom. What
          started as a passion project blossomed into a heartfelt business built
          on creativity, craftsmanship, and care. We handpick every flower and
          design each arrangement with meaning — making every order personal and
          memorable.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-lg bg-rose-100 p-4 shadow-sm">
            <h3 className="font-inter text-subColor text-md font-semibold">
              🌿 Sustainable Sourcing
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Partnering with local growers to ensure freshness &
              eco-friendliness.
            </p>
          </div>
          <div className="rounded-lg bg-rose-100 p-4 shadow-sm">
            <h3 className="font-inter text-subColor text-md font-semibold">
              💐 Artisan Designs
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Each bouquet is thoughtfully designed by passionate florists.
            </p>
          </div>
        </div>

        <button className="bg-accentColor font-inter mt-8 inline-block cursor-pointer rounded-full px-6 py-3 font-bold text-white shadow-md transition hover:bg-rose-800">
          Meet the Team
        </button>
      </div>
    </section>
  );
};

export default OurStory;
