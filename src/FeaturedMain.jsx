import React from "react";
import FeaturedChild from "./FeaturedChild";

const FeaturedMain = () => {
  return (
    <>
    <div className="mx-20 max-[1024px]:mx-auto max-[1024px]:my-[110px] my-[150px] font-[Montserrat] flex flex-col items-center">
      <span className="text-[17px] font-normal text-[#737373]">
        Featured Products
      </span>
      <span className="text-[22px] font-bold mt-[10px]">BESTSELLER PRODUCTS</span>
      <span className="text-[15px] tracking-tighte mt-[10px] font-normal text-[#737373]"
      >Problems trying to resolve the conflict between</span>
    <FeaturedChild/>
    </div>
    </>
  );
};

export default FeaturedMain;
