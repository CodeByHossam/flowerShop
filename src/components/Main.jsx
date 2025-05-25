import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import Highlights from "./Highlights";
import FeaturedProducts from "./FeaturedProducts ";
import OurStory from "./OurStory";
import ContactCTA from "./ContactCTA";
import SectionTransition from "./SectionTransition";

const Separator = () => (
  <hr className="border-gradient-to-r from-subColor via-accentColor to-subColor mx-auto my-12 w-1/1 rounded border-3 opacity-70" />
);

const Main = () => {
  return (
    <main id="main" className="sm:max-w-maxAppWidth mx-auto min-h-[calc(100vh-headerBarSmall)] w-screen px-2 sm:min-h-[calc(100vh-headerBarBig)] sm:px-10">
      <Hero />
      <Products />
      <Separator />
      <FeaturedProducts />
      <Separator />
      <Highlights />
      <Separator />
      <OurStory />
      <Separator />
      <ContactCTA />
      <Separator />

      <SectionTransition
        title="Blooming with love & elegance 🌷"
        text="Discover timeless floral expressions in every petal."
      />
      <Separator />
    </main>
  );
};

export default Main;
