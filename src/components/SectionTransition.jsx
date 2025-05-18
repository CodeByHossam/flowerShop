import React from "react";

const SectionTransition = ({title,text}) => {
  return (
    <div className="w-full bg-rose-50 py-10">
      <div className="mx-auto max-w-myapp px-4  text-center  ">
        <h3 className="font-parisienne text-2xl text-subColor">
         {title}
        </h3>
        <p className="font-inter mt-2 text-gray-500 text-sm sm:text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SectionTransition;
