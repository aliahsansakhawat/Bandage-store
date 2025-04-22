import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import ReviewUser from "./assets/Reviews/review-user.png";
import { RiStarSLine } from "react-icons/ri";
import Review1 from "./assets/Reviews/review-1.png";
import Review2 from "./assets/Reviews/review-2.png";
import Review3 from "./assets/Reviews/review-3.png";
import Review4 from "./assets/Reviews/review-4.png";
import Review5 from "./assets/Reviews/review-5.png";
import Review6 from "./assets/Reviews/review-6.png";
import Review7 from "./assets/Reviews/review-7.png";
import Review8 from "./assets/Reviews/review-8.png";
import Review9 from "./assets/Reviews/review-9.png";
import Banner from "./assets/Reviews/banner-kitchen.png";
const Reviews = () => {
  return (
    <>
      <div className="px-[80px] font-[Montserrat] ">
        <div className="flex items-center justify-evenly max-[1024px]:flex-col">
          <div className="flex flex-col items-center justify-center text-center ">
            <span className=" text-black font-bold  text-[24px] ">
              What they say about us
            </span>
            <span>
              <img src={ReviewUser} className="mt-[58px]" alt="" />
            </span>
            <div className="items-center flex justify-center mt-[23px] text-[22px] text-orange-500 gap-0.5">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <RiStarSLine className="text-[25px] mt-[2.2px] text-neutral-500" />
            </div>
            <span className="text-sm mt-[20px] w-[451px] max-[1024px]:w-full font-bold text-[#252b42] text-center ">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </span>
            <span className="text-sm font-bold text-[#23a6f0] mt-[20px]">
              Regina Miles
            </span>
            <span className="text-sm font-bold text-black mt-[10px]">
              Designer
            </span>
          </div>
          <div className="grid grid-cols-3 gap-[10px] mt-[15px] items-center justify-items-center">
            <img src={Review1} alt="" />
            <img src={Review2} alt="" />
            <img src={Review3} alt="" />
            <img src={Review4} alt="" />
            <img src={Review5} alt="" />
            <img src={Review6} alt="" />
            <img src={Review7} alt="" />
            <img src={Review8} alt="" />
            <img src={Review9} alt="" />
          </div>
        </div>
      </div>
      <img src={Banner} className="w-full h-full mt-[150px]" alt="" />
    </>
  );
};

export default Reviews;
