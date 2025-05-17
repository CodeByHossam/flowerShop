import React from "react";
import Hero from "./Hero";

const Main = () => {
  return (
    <main className="sm:max-w-maxAppWidth mx-auto min-h-[calc(100vh-headerBarSmall)] w-screen px-2   sm:min-h-[calc(100vh-headerBarBig)] sm:px-10">
      <Hero />
    </main>
  );
};

export default Main;
