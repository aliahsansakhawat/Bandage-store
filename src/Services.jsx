import React from "react";
import BookImg from "./assets/Services/book.png";
import PageImg from "./assets/Services/page.png";
import GraphImg from "./assets/Services/graph.png";
const Services = () => {
  return (
    <div className="px-[80px] font-[Montserrat]">
      <div className="flex  flex-col items-center">
        <span className="text-[17px] font-normal text-[#737373]">
          Featured Services
        </span>
        <span className="text-[22px] font-bold mt-[10px]">
          THE BEST PRODUCTS
        </span>
        <span className="text-[15px] tracking-tighte mt-[10px] font-normal text-[#737373]">
          Problems trying to resolve the conflict between
        </span>
      </div>
      <div className="flex justify-evenly mt-[115px] max-[1024px]:flex-col max-[1024px]:gap-12">
        <div className="flex flex-col items-center justify-center">
          <img src={BookImg} className="w-[72px] h-[72px]" alt="" />
          <span className="text-[27px] font-bold text-[#252b42] mt-5">
            Easy Wins
          </span>
          <span className="text-[14px] font-normal text-[#737373] w-[225px] text-center mt-[20px]">
            Get your best looking smile now!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={PageImg} className="w-[72px] h-[72px]" alt="" />
          <span className="text-[27px] font-bold text-[#252b42] mt-5">
            Concrete{" "}
          </span>
          <span className="text-[14px] font-normal text-[#737373] w-[232px] text-center mt-[20px]">
            Defalcate is most focused in helping you discover your most
            beautiful smile{" "}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={GraphImg} className="w-[72px] h-[52px]" alt="" />
          <span className="text-[27px] font-bold text-[#252b42] mt-5">
            Hack Growth{" "}
          </span>
          <span className="text-[14px] font-normal text-[#737373] w-[232px] text-center mt-[20px]">
            Overcame any hurdle or any other problem.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
