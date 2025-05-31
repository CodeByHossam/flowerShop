import React from "react";

const SectionTransition = ({ title, text }) => {
  return (
    <div className="w-full bg-rose-50 py-10">
      <div className="max-w-maxAppWidth mx-auto px-4 text-center">
        <h3 className="font-parisienne text-subColor text-2xl">{title}</h3>
        <p className="font-inter mt-2 text-sm text-gray-500 sm:text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SectionTransition;
